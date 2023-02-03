from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Collecte_ezaho


class Collecte_ezaho_serializer(serializers.ModelSerializer):
    class Meta:
        model = Collecte_ezaho
        fields = '__all__'


class Collecte_ezaho_list_serializer(serializers.ModelSerializer):
    pax = serializers.CharField(source='pax.code')

    class Meta:
        model = Collecte_ezaho
        fields = '__all__'
