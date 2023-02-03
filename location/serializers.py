from rest_framework import serializers
from .models import Region, District, Commune, Ville


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Region


class CommuneSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Commune


class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = District


class VilleSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Ville
