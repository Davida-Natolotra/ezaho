from rest_framework.decorators import api_view
from rest_framework.response import Response
from asgiref.sync import sync_to_async
from location.models import Region, District, Commune, Csb, Level5
from dhis2 import Api
# Create your views here.

api = Api('localhost:8085', 'admin', 'district')


@sync_to_async
@api_view(['GET'])
def Load_Dispatch(request):
    # Load data from DHIS2
    r = api.get_paged('organisationUnits', page_size=100,
                      merge=True, params={'fields': 'id,name,parent,level,code'})
    orgunit = r['organisationUnits']

    # Dispatch data
    local = []
    for item in orgunit:
        try:
            if item['code'].isdigit():
                local.append(item)

        except:
            pass
    # Filter the data to get location: only level 1 through 4 are allowed
    region = []
    districts = []
    commune = []
    level5 = []
    for el in local:
        if el['level'] == 2:
            region.append(el)

        elif el['level'] == 3:
            districts.append(el)

        elif el['level'] == 4:
            commune.append(el)

    for it in orgunit:
        if it['level'] == 5:
            level5.append(it)

    csb = []
    for i in orgunit:
        try:
            if i['code'].upper()[:3] == 'CSB':
                csb.append(i)
        except:
            pass

    # Recreate the model: create each field in each model and make the relationship
    Level5.objects.all().delete()
    Csb.objects.all().delete()
    Commune.objects.all().delete()
    District.objects.all().delete()
    Region.objects.all().delete()

# Level 2
    for reg in region:
        regin = Region(
            uid=reg['id'],
            code=reg['code'],
            name=reg['name'],
            parentid=reg['parent']['id'],
            hierarchylevel=reg['level']
        )
        regin.save()

# Level 3
    for dis in districts:
        dist = District(
            uid=dis['id'],
            code=dis['code'],
            name=dis['name'],
            parentid=dis['parent']['id'],
            hierarchylevel=dis['level'],
            region=Region.objects.get(uid=dis['parent']['id'])
        )
        dist.save()

# Level 4
    for com in commune:
        comm = Commune(
            uid=com['id'],
            code=com['code'],
            name=com['name'],
            parentid=com['parent']['id'],
            hierarchylevel=com['level'],
            district=District.objects.get(uid=com['parent']['id']),
            region=Region.objects.get(
                uid=District.objects.get(uid=com['parent']['id']).parentid)
        )

        comm.save()

# Level 5
    for lev5 in level5:
        try:
            l5 = Level5(
                uid=lev5['id'],
                code=lev5['code'],
                name=lev5['name'],
                parentid=lev5['parent']['id'],
                hierarchylevel=lev5['level'],
                commune=Commune.objects.get(uid=lev5['parent']['id']),
                district=District.objects.get(
                    uid=Commune.objects.get(uid=lev5['parent']['id']).parentid),
                region=Region.objects.get(
                    uid=District.objects.get(
                        uid=Commune.objects.get(uid=lev5['parent']['id']).parentid).parentid)
            )
            l5.save()
        except:
            pass

    for centre in csb:
        if centre['level'] == 5:

            try:
                p5 = centre['id']
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
                cs = Csb(
                    uid=centre['id'],
                    code=centre['code'],
                    name=centre['name'],
                    parentid=centre['parent']['id'],
                    hierarchylevel=centre['level'],
                    commune=commune,
                    district=district,
                    region=region
                )
                cs.save()
            except:
                pass

    return Response({'Loading': orgunit})
