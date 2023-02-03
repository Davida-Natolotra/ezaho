from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Collecte_ezaho
import calendar
from datetime import datetime as dt, timedelta
from .serializers import Collecte_ezaho_serializer, Collecte_ezaho_list_serializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createCollecte(request):
    serializer = Collecte_ezaho_serializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        mycollectes = Collecte_ezaho.objects.all()
        serializer = Collecte_ezaho_list_serializer(mycollectes, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CollecteList(generics.ListCreateAPIView):
    queryset = Collecte_ezaho.objects.all()
    serializer_class = Collecte_ezaho_list_serializer
    permission_classes = [IsAuthenticated]


class CollecteDetailUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Collecte_ezaho.objects.all()
    serializer_class = Collecte_ezaho_serializer
