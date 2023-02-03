from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
import calendar
from datetime import datetime as dt, timedelta
from .models import CPF, Collecte_WHP, Sexe
from .serializers import Collecte_WHP_serializer, CPFSerializer, SexeSerializer


class CPFListCreateView(generics.ListCreateAPIView):
    queryset = CPF.objects.all()
    serializer_class = CPFSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('region', 'cible', 'district', 'commune')


class CPFDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CPF.objects.all()
    serializer_class = CPFSerializer


class SexeListCreateView(generics.ListCreateAPIView):
    queryset = Sexe.objects.all()
    serializer_class = SexeSerializer


class SexeDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sexe.objects.all()
    serializer_class = SexeSerializer


class CollecteListCreateView(generics.ListCreateAPIView):
    queryset = Collecte_WHP.objects.all()
    serializer_class = Collecte_WHP_serializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(responsable=self.request.user.id)


class CollecteDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Collecte_WHP.objects.all()
    serializer_class = Collecte_WHP_serializer
