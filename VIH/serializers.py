from rest_framework import serializers
from .models import PAX, Cible, PE, PSensibilisation, TypeDemande, Sexe, Csb, DICMeva, Referent, Collecte, Intrant, Distribution_Intrant


class CibleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cible
        fields = '__all__'


class PESerializer(serializers.ModelSerializer):
    class Meta:
        model = PE
        fields = '__all__'


class PSensibilisationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PSensibilisation
        fields = '__all__'


class PAXSerializer(serializers.ModelSerializer):
    class Meta:
        model = PAX
        fields = '__all__'


class TypeDemandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeDemande
        fields = '__all__'


class SexeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sexe
        fields = '__all__'


class CsbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Csb
        fields = '__all__'


class ReferentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Referent
        fields = '__all__'


class DICMevaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DICMeva
        fields = '__all__'


class CollecteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Collecte
        fields = '__all__'


class CollecteListeSerializer(serializers.ModelSerializer):
    pax = serializers.CharField(source='pax.code')

    class Meta:
        model = Collecte
        fields = '__all__'


class Distribution_Intrant_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Distribution_Intrant
        fields = '__all__'


class Intrant_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Intrant
        fields = '__all__'
