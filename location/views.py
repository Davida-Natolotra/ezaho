from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import Region, District, Ville, Commune
from .serializers import RegionSerializer, DistrictSerializer, CommuneSerializer, VilleSerializer
from django_filters.rest_framework import DjangoFilterBackend


class RegionListCreate(generics.ListCreateAPIView):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


class RegionListVille(APIView):

    def get(self, request, pk):
        queryset = Region.objects.get(id=pk).ville_set.all()
        serializer = RegionSerializer(instance=queryset)
        return Response(serializer.data)


class RegionDetailUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


@api_view(['GET'])
def get_region(request, id):
    region = Region.objects.get(id=id).name
    return Response(region)


class DistrictListCreate(generics.ListCreateAPIView):
    queryset = District.objects.all()
    serializer_class = DistrictSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('region__id', 'region__name', 'region')


class DistrictDetailUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = District.objects.all()
    serializer_class = DistrictSerializer


class CommuneListCreate(generics.ListCreateAPIView):
    queryset = Commune.objects.all()
    serializer_class = CommuneSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('region', 'district', 'region__name', 'district__name')


class CommuneDetailUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Commune.objects.all()
    serializer_class = CommuneSerializer


class VilleListCreate(generics.ListCreateAPIView):
    queryset = Ville.objects.all()
    serializer_class = VilleSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'region__name',
                     'district__name', 'commune__name', 'region__id']


class VilleDetailUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ville.objects.all()
    serializer_class = VilleSerializer
