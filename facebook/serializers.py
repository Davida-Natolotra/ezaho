from rest_framework import serializers
from .models import FacebookLikes, FacebookReach, FacebookVisit


class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField()


class FacebookLikesFileSerializer(serializers.Serializer):

    class Meta:
        model = FacebookLikes
        fields = "__all__"
