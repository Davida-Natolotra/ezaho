from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Cible, PSensibilisation, TypeDemande, Sexe, Csb, PE, DICMeva, Referent, PAX, Collecte, Distribution_Intrant, Intrant
from .serializers import CibleSerializer, PSensibilisationSerializer, TypeDemandeSerializer, SexeSerializer, ReferentSerializer, CsbSerializer, PESerializer, PAXSerializer, DICMevaSerializer, CollecteSerializer, CollecteListeSerializer, Distribution_Intrant_Serializer, Intrant_Serializer
import calendar
from datetime import datetime as dt, timedelta
from transpose_dict import TD


class CibleListCreateView(generics.ListCreateAPIView):
    queryset = Cible.objects.all()
    serializer_class = CibleSerializer


class CibleDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cible.objects.all()
    serializer_class = CibleSerializer


class PSensibilisationListCreateView(generics.ListCreateAPIView):
    queryset = PSensibilisation.objects.all()
    serializer_class = PSensibilisationSerializer


class PSensibilisationDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PSensibilisation.objects.all()
    serializer_class = PSensibilisationSerializer


class PEListCreateView(generics.ListCreateAPIView):
    queryset = PE.objects.all()
    serializer_class = PESerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('region', 'cible', 'district', 'commune')


class PEDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PE.objects.all()
    serializer_class = PESerializer


class TypeDemandeListCreateView(generics.ListCreateAPIView):
    queryset = TypeDemande.objects.all()
    serializer_class = TypeDemandeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('cible', 'sexe')


class TypeDemandeDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TypeDemande.objects.all()
    serializer_class = TypeDemandeSerializer


class SexeListCreateView(generics.ListCreateAPIView):
    queryset = Sexe.objects.all()
    serializer_class = SexeSerializer


class SexeDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sexe.objects.all()
    serializer_class = SexeSerializer


class CsbListCreateView(generics.ListCreateAPIView):
    queryset = Csb.objects.all()
    serializer_class = CsbSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('region', 'region__name', 'district', 'district__name')


class CsbDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Csb.objects.all()
    serializer_class = CsbSerializer


class DICMevaListCreateView(generics.ListCreateAPIView):
    queryset = DICMeva.objects.all()
    serializer_class = DICMevaSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('region', 'ville')


class DICMevaDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DICMeva.objects.all()
    serializer_class = DICMevaSerializer


class ReferentListCreateView(generics.ListCreateAPIView):
    queryset = Referent.objects.all()
    serializer_class = ReferentSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('region', 'district', 'ville',
                        'commune', 'cible', 'csb')


class ReferentDetailUpdateView(generics.ListCreateAPIView):
    queryset = Referent.objects.all()
    serializer_class = ReferentSerializer


class CollecteListCreateView(generics.ListCreateAPIView):
    queryset = Collecte.objects.all()
    serializer_class = CollecteSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(responsable=self.request.user.id)


class CollecteDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Collecte.objects.all()
    serializer_class = CollecteSerializer


class MyCollecteList(generics.ListCreateAPIView):
    serializer_class = CollecteListeSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('pax__nom_fb', 'pax__prenom',)

    def get_queryset(self):
        user = self.request.user.id
        return Collecte.objects.filter(responsable=user)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createMyCollection(request):
    current_user = request.user
    serializer = CollecteSerializer(data=request.data)
    serializer.responsable = current_user.id
    if serializer.is_valid():
        serializer.save()
        mycollectes = Collecte.objects.filter(responsable=current_user.id)
        serializer = CollecteListeSerializer(mycollectes, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GraphTDemande(request):
    all_tDemande = TypeDemande.objects.all().values('name')
    data_demande = {}
    data_demande_prev = {}
    mois_actuel = request.GET.get('mois_actuel')
    mois_precedent = str(int(mois_actuel)-1)
    mois_prev_prev = str(int(mois_actuel)-1)
    annee_actuel = request.GET.get('year')
    date_string_start_actuel = annee_actuel+"/"+mois_precedent+"/21"
    date_string_stop_actuel = annee_actuel+"/"+mois_actuel + "/20"
    start_actuel = dt.strptime(date_string_start_actuel, "%Y/%m/%d")
    stop_actuel = dt.strptime(date_string_stop_actuel, "%Y/%m/%d")

    date_string_start_precedent = annee_actuel+"/"+mois_prev_prev+"/21"
    date_string_stop_precedent = annee_actuel+"/"+mois_precedent + "/20"
    start_precedent = dt.strptime(date_string_start_precedent, "%Y/%m/%d")
    stop_precedent = dt.strptime(date_string_stop_precedent, "%Y/%m/%d")

    # date/mois/annee
    for dem in all_tDemande.values():
        data_demande[dem['name']] = Collecte.objects.filter(
            type_demande=dem['name']).filter(date_collecte__range=[start_actuel, stop_actuel]).count()

    for dem in all_tDemande.values():
        data_demande_prev[dem['name']] = Collecte.objects.filter(
            type_demande=dem['name']).filter(date_collecte__range=[start_precedent, stop_precedent]).count()

    return Response({"data_demande": data_demande, "data_precedent": data_demande_prev})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def PieDemande(request):
    all_tDemande = TypeDemande.objects.all().values('name')
    data_demande = {}
    mois_actuel = request.GET.get('mois_actuel')
    mois_prev = str(int(mois_actuel)-1)
    annee_actuel = request.GET.get('year')
    date_string_start = annee_actuel+"/"+mois_prev+"/21"
    date_string_stop = annee_actuel+"/"+mois_actuel + "/20"
    start = dt.strptime(date_string_start, "%Y/%m/%d")
    stop = dt.strptime(date_string_stop, "%Y/%m/%d")
    total = Collecte.objects.filter(date_collecte__range=[start, stop]).count()
    if total == 0:
        total = 1
    # date/mois/annee
    for dem in all_tDemande.values():
        data_demande[dem['name']] = int(round(Collecte.objects.filter(
            type_demande=dem['name']).filter(date_collecte__range=[start, stop]).count()*100/total, 0))
    data_demande['total'] = total
    return Response(data_demande)


@api_view(['GET'])
def Date_Range_API(request):
    dateEntree = request.GET.get("dateEntree", None)
    dateFin = request.GET.get("dateFin", None)
    if len(dateEntree) == 0 and len(dateFin) == 0:
        lisitra = Collecte.objects.all()
    else:
        lisitra = Collecte.objects.filter(
            date_collecte__range=[dateEntree, dateFin])
    lisitra = CollecteListeSerializer(lisitra, many=True)
    return Response(lisitra.data)


class Distribution_Intrant_Create(generics.CreateAPIView):
    queryset = Distribution_Intrant.objects.all()
    serializer_class = Distribution_Intrant_Serializer
    permission_classes = [IsAuthenticated]


class Intrant_Liste(generics.ListAPIView):
    queryset = Intrant.objects.all()
    serializer_class = Intrant_Serializer


mois_liste = [{'number': 1, 'name': 'Janvier'}, {'number': 2, 'name': 'Févier'}, {'number': 3, 'name': 'Mars'}, {'number': 4, 'name': 'Avril'}, {'number': 5, 'name': 'Mai'}, {'number': 6, 'name': 'Juin'}, {
    'number': 7, 'name': 'Juillet'}, {'number': 8, 'name': 'Aout'}, {'number': 9, 'name': 'Septembre'}, {'number': 10, 'name': 'Octobre'}, {'number': 11, 'name': 'Novembre'}, {'number': 12, 'name': 'Décembre'}]


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ListDistribByYear(request):
    year = request.GET.get('year')
    intrants = Intrant.objects.all()
    months = {}
    intr = {}
    # for mois in mois_liste:
    #     months[mois['name']] = {}
    #     for i in intrants:
    #         intr[i.name] = []
    #         months[mois['name']].update({i.name:  Distribution_Intrant.objects.filter(
    #             intrant=i.id).filter(mois=mois['number']).filter(year=year)})

    # intr = TD(months, 1)
    # data = {'Gel': list(intr['Gel'].values()), 'Condom M': list(
    #     intr['Condom M'].values()), 'Condom F': list(intr['Condom F'].values())}
    Gel = []
    for mois in range(1, 13):
        try:
            Gel.append(Distribution_Intrant.objects.filter(intrant__name="Gel").filter(
                mois=mois).filter(year=int(year))[0].nombre)
        except:
            Gel.append(0)

    Condom_M = []
    for mois in range(1, 13):
        try:
            Condom_M.append(Distribution_Intrant.objects.filter(intrant__name__icontains="Condom M").filter(
                mois=mois).filter(year=int(year))[0].nombre)
        except:
            Condom_M.append(0)
    Condom_F = []
    for mois in range(1, 13):
        try:
            Condom_F.append(Distribution_Intrant.objects.filter(intrant__name__icontains="Condom F").filter(
                mois=mois).filter(year=int(year))[0].nombre)
        except:
            Condom_F.append(0)

    return Response({'Gel': Gel, 'Condom M': Condom_M, 'Condom F': Condom_F})


@api_view(['GET'])
def Liste_Mois(request):
    return Response(mois_liste)


trimestre_liste = [{'number': 1, 'name': 'T1', 'months': [1, 2, 3]}, {'number': 2, 'name': 'T2', 'months': [4, 5, 6]}, {
    'number': 3, 'name': 'T3', 'months': [7, 8, 9]}, {'number': 4, 'name': 'T4', 'months': [10, 11, 12]}, ]
