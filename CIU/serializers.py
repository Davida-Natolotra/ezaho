from rest_framework import serializers
from .models import CIU


class CIUSerializer(serializers.ModelSerializer):
    class Meta:
        model = CIU
        fields = '__all__'
