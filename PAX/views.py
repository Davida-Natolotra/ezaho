from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .models import PAX
from .serializers import PAXSerializer
from PAX import serializers
from VIH.models import Sexe
from .models import Objectif
from datetime import datetime
from xmlrpc.client import Boolean
from asgiref.sync import sync_to_async


class PAXListCreateView(generics.ListCreateAPIView):
    queryset = PAX.objects.all()
    serializer_class = PAXSerializer
    filter_backends = [DjangoFilterBackend]
    search_fields = ('nom_fb', 'phone', 'prenom')
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(responsable=self.request.user.id)


class PAXDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PAX.objects.all()
    serializer_class = PAXSerializer
    permission_classes = [IsAuthenticated]


class MyPAXList(generics.ListCreateAPIView):
    serializer_class = PAXSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('nom_fb', 'phone', 'prenom')

    def get_queryset(self):
        uReq = self.request.user
        user = User.objects.get(id=uReq.id)
        uweb = User.objects.filter(username__contains='web')
        uweb_id = []
        for u in uweb:
            uweb_id.append(u.id)
        queryset = ''
        if 'web' in user.username:
            queryset = PAX.objects.filter(responsable__in=uweb_id)
        else:
            queryset = PAX.objects.filter(responsable=user.id)
        return queryset


@api_view(['GET'])
def PAXByUser(request):
    userReq = request.user.id
    user = User.objects.get(id=userReq)
    current_month = int(datetime.now().strftime('%m'))
    current_year = int(datetime.now().strftime('%Y'))
    if current_month in [1, 2, 3]:
        MyPAXCount = PAX.objects.filter(responsable=user.id).filter(
            date_inscription__range=[f'{current_year}-01-01', f'{current_year}-03-01']).count()
    elif current_month in [4, 5, 6]:
        MyPAXCount = PAX.objects.filter(responsable=user.id).filter(
            date_inscription__range=[f'{current_year}-04-01', f'{current_year}-06-01']).count()
    elif current_month in [7, 8, 9]:
        MyPAXCount = PAX.objects.filter(responsable=user.id).filter(
            date_inscription__range=[f'{current_year}-07-01', f'{current_year}-09-01']).count()
    elif current_month in [10, 11, 12]:
        MyPAXCount = PAX.objects.filter(responsable=user.id).filter(
            date_inscription__range=[f'{current_year}-10-01', f'{current_year}-12-01']).count()
    MyObjectives = Objectif.objects.filter(
        responsable=user.id).values()[0]['nombre']
    MyPercentage = int(round(MyPAXCount*100/MyObjectives))

    return Response({'MyPAXCount': MyPAXCount, 'MyPercentage': MyPercentage, 'MyObjectives': MyObjectives})


@api_view(['GET'])
def MyLastPax(request):
    user = request.user.id
    myls = PAX.objects.filter(responsable=user).last()
    serializer = PAXSerializer(myls)

    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSexeName(request, sexeId):
    sexe_name = Sexe.objects.get(id=int(sexeId)).name
    return Response(sexe_name)


@api_view(['GET'])
def getPAXBySexe(request):
    total = PAX.objects.all().count()
    if total == 0:
        total = 1
    masculin = PAX.objects.filter(sexe='1').count()
    feminin = PAX.objects.filter(sexe='2').count()
    masculin_percentage = int(round(masculin*100/total, 0))
    feminin_percentage = int(round(feminin*100/total, 0))
    return Response({'total': total, 'masculin': masculin, 'masculin_percentage': masculin_percentage, 'feminin': feminin, 'feminin_percentage': feminin_percentage})


class getPAXFB(generics.ListCreateAPIView):
    serializer_class = PAXSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        pax = PAX.objects.exclude(nom_fb__isnull=True).exclude(nom_fb="")
        return pax


@sync_to_async()
@api_view(['GET'])
def check_prenom_unique(request, prenom=None):
    check = PAX.objects.filter(prenom=prenom).count()
    response: Boolean
    if check == 0:
        response = True
    else:
        response = False
    print(response)
    return Response(response)


@sync_to_async()
@api_view(['GET'])
def check_last_serial_no(request):
    check = PAX.objects.last().serial_no
    return Response(check)
