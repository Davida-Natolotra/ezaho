from dataclasses import fields
from rest_framework import serializers
from .models import PAX


class PAXSerializer(serializers.ModelSerializer):
    class Meta:
        model = PAX
        fields = "__all__"
