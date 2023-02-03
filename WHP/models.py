from django.db import models
from location.models import Region, District,  Commune
from PAX.models import PAX
# Create your models here.


class CPF(models.Model):
    commune = models.ForeignKey(
        Commune, on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, blank=True, null=True)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    uid = models.CharField(max_length=50, blank=True, null=True)
    code = models.CharField(max_length=250, blank=True, null=True)
    parentid = models.CharField(max_length=250, blank=True, null=True)
    hierarchylevel = models.IntegerField(blank=True, null=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    adresse = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name


class Collecte_WHP(models.Model):
    pax = models.ForeignKey(
        PAX, on_delete=models.CASCADE, blank=True, null=True)
    type_cible = models.CharField(max_length=255, blank=True, null=True)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)
    type_demande = models.CharField(max_length=255, blank=True, null=True)
    type_referent = models.CharField(max_length=255, blank=True, null=True)
    referent = models.CharField(max_length=255, blank=True, null=True)
    page_sensibilisation = models.CharField(
        max_length=255, blank=True, null=True)
    date_collecte = models.DateField(blank=True, null=True, auto_now_add=True)
    models.IntegerField(null=True, blank=True)
    responsable = models.IntegerField(null=True, blank=True)


class Sexe(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    value = models.CharField(max_length=2, blank=True, null=True)

    def __str__(self):
        return self.name
