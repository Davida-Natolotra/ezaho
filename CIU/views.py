import code
from rest_framework import generics, filters
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated

from VIH.views import SexeListCreateView
from .models import CIU
from .serializers import CIUSerializer
from location.models import Region
from location.serializers import RegionSerializer
from VIH.models import Sexe
from VIH.serializers import SexeSerializer
from uuid import uuid4


class CIUListCreateView(generics.ListCreateAPIView):
    queryset = CIU.objects.all()
    serializer_class = CIUSerializer


class CIUDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CIU.objects.all()
    serializer_class = CIUSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def generate(request):
    reg_req = request.GET.get('region')
    sex_req = request.GET.get('sexe')
    region = Region.objects.get(id=int(reg_req))
    sexe = Sexe.objects.get(id=int(sex_req))
    print(
        f'region name:{region.name}, region code:{region.code}, sexe name:{sexe.name}, sexe code:{sexe.value}')
    ro = uuid4()
    rv = str(ro.hex)[:8].upper()
    while CIU.objects.filter(uid=rv).count() > 0:
        ro = uuid4()
        rv = str(ro.hex)[:8].upper()

    code = f'{sexe.value}-{rv}-{str(region.code)}'

    return Response({'ciu': code, 'id': CIU.objects.last().id})


@api_view(['GET'])
def generate_multiple(request):
    # Region
    # Sexe
    # Nombre
    pass


@api_view(['GET'])
def check_ciu(request):
    code = request.GET.get('code')
    try:
        CIU.objects.get(code=code)
        return Response({'check': "OK"})
    except:
        return Response({'check': 'none'})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createCIU(request, code):

    print("code : ", code)
    uid = code.split('-')[1]
    try:
        new = CIU(
            code=code,
            uid=uid
        )
        new.save()
        return Response({'save': "OK"})
    except:
        return Response({'error': "Invalid code: " + code})
