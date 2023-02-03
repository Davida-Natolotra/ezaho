from location.models import Region, District, Commune
from VIH.models import DICMeva
import csv
from dhis2 import Api

api = Api('localhost:8085', 'admin', 'district')


def run():
    with open('VIH/data/DIC.csv') as file:
        reader = csv.reader(file)
        next(reader)

        DICMeva.objects.all().delete()

        for row in reader:
            try:

                # Level 5
                req_lv_5 = api.get(f'organisationUnits/{row[1]}',
                                   params={'fields': 'id,name,parent,code,level'}).json()
                print(req_lv_5)
                # Level 4
                p4 = req_lv_5['parent']['id']
                req_lv_4 = api.get(f'organisationUnits/{p4}',
                                   params={'fields': 'id,name,parent,code,level'}).json()
                # Level 3
                p3 = req_lv_4['parent']['id']
                req_lv_3 = api.get(f'organisationUnits/{p3}',
                                   params={'fields': 'id,name,parent,code,level'}).json()
                # Level 2
                p2 = req_lv_3['parent']['id']
                req_lv_2 = api.get(f'organisationUnits/{p2}',
                                   params={'fields': 'id,name,parent,code,level'}).json()

                commune = Commune.objects.get(code=req_lv_4['code'])
                district = District.objects.get(code=req_lv_3['code'])
                region = Region.objects.get(code=req_lv_2['code'])

            except:
                pass
            try:
                dic = DICMeva(
                    uid=row[0],
                    code=row[2],
                    name=row[5],
                    parentid=row[7],
                    hierarchylevel=int(row[21]),
                    commune=commune,
                    district=district,
                    region=region,

                )
                dic.save()
            except:
                print("error")
