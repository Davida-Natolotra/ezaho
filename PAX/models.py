from django.db import models
from location.models import Region, District, Ville, Commune
from django.contrib.auth.models import User

# Create your models here.


class PAX(models.Model):
    nom_fb = models.CharField(max_length=255, blank=True, null=True)
    id_fb = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    sexe = models.CharField(max_length=255, blank=True, null=True)
    prenom = models.CharField(max_length=255, blank=True, null=True)
    code = models.CharField(max_length=255, blank=True, null=True)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, null=True, blank=True)
    responsable = models.IntegerField(null=True, blank=True)
    adresse = models.CharField(max_length=250, blank=True, null=True)
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, blank=True, null=True)
    ciu = models.CharField(max_length=12, blank=True, null=True)
    date_inscription = models.DateField(
        auto_now_add=False, null=True, blank=True)
    nouveau = models.IntegerField(null=True, blank=True)
    serial_no = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.prenom


class Objectif(models.Model):
    nombre = models.IntegerField(null=True, blank=True)
    responsable = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True)
