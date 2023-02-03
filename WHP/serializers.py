from dataclasses import fields
from rest_framework import serializers
from .models import CPF, Collecte_WHP, Sexe


class CPFSerializer(serializers.ModelSerializer):
    class Meta:
        model = CPF
        fields = '__all__'


class Collecte_WHP_serializer(serializers.ModelSerializer):
    class Meta:
        model = Collecte_WHP
        fields = '__all__'


class SexeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sexe
        fields = '__all__'
