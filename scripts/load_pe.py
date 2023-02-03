from location.models import Region, District, Commune, Level5
from VIH.models import PE
import csv
import json
from dhis2 import Api

api = Api('localhost:8085', 'admin', 'district')


def run():
    with open('VIH/data/PE.csv') as file:
        reader = csv.reader(file)
        next(reader)

        PE.objects.all().delete()

        for row in reader:
            try:
                # Level 6
                req_lv_6 = api.get(f'organisationUnits/{row[1]}',
                                   params={'fields': 'id,name,parent,code,level'}).json()

                p5 = req_lv_6['parent']['id']

                # Level 5
                req_lv_5 = api.get(f'organisationUnits/{p5}',
                                   params={'fields': 'id,name,parent,code,level'}).json()
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
                pe = PE(
                    uid=row[0],
                    code=row[2],
                    name=row[5],
                    parentid=row[7],
                    hierarchylevel=int(row[21]),
                    commune=commune,
                    district=district,
                    region=region,

                )
                pe.save()
            except:
                print(row[21])
