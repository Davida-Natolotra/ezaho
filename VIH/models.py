from django.db import models
from location.models import Region, District, Ville, Commune, Csb
from django.contrib.auth.models import User
from PAX.models import PAX
# Create your models here.


class Cible(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name


class PSensibilisation(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name


class TypeDemande(models.Model):
    sexe = models.ForeignKey(
        'Sexe', on_delete=models.CASCADE, blank=True, null=True)
    cible = models.ForeignKey(
        Cible, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name


class Sexe(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    value = models.CharField(max_length=2, blank=True, null=True)

    def __str__(self):
        return self.name


class PE(models.Model):
    ville = models.ForeignKey(
        Ville, on_delete=models.CASCADE, blank=True, null=True)
    commune = models.ForeignKey(
        Commune, on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, blank=True, null=True)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)
    cible = models.ForeignKey(
        Cible, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    uid = models.CharField(max_length=50, blank=True, null=True)
    code = models.CharField(max_length=250, blank=True, null=True)
    parentid = models.CharField(max_length=250, blank=True, null=True)
    hierarchylevel = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name


class DICMeva(models.Model):
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)
    commune = models.ForeignKey(
        Commune, on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    uid = models.CharField(max_length=50, blank=True, null=True)
    code = models.CharField(max_length=250, blank=True, null=True)
    parentid = models.CharField(max_length=250, blank=True, null=True)
    hierarchylevel = models.IntegerField(blank=True, null=True)
    ville = models.ForeignKey(
        Ville, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Referent(models.Model):
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)
    ville = models.ForeignKey(
        Ville, on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, blank=True, null=True)
    commune = models.ForeignKey(
        Commune, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    cible = models.ForeignKey(
        Cible, on_delete=models.CASCADE, blank=True, null=True)
    csb = models.ForeignKey(
        Csb, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name


class Collecte(models.Model):
    pax = models.ForeignKey(
        PAX, on_delete=models.CASCADE, blank=True, null=True)
    type_cible = models.CharField(max_length=255, blank=True, null=True)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, blank=True, null=True)
    commune = models.ForeignKey(
        Commune, on_delete=models.CASCADE, blank=True, null=True)
    ville = models.ForeignKey(
        Ville, on_delete=models.CASCADE, blank=True, null=True)
    type_demande = models.CharField(max_length=255, blank=True, null=True)
    type_referent = models.CharField(max_length=255, blank=True, null=True)
    referent = models.CharField(max_length=255, blank=True, null=True)
    page_sensibilisation = models.CharField(
        max_length=255, blank=True, null=True)
    date_collecte = models.DateField(blank=True, null=True, auto_now_add=True)
    models.IntegerField(null=True, blank=True)
    responsable = models.IntegerField(null=True, blank=True)
    frequence = models.IntegerField(null=True, blank=True, default=0)


class Intrant(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name


class Distribution_Intrant(models.Model):
    intrant = models.ForeignKey(
        Intrant, null=True, blank=True, on_delete=models.CASCADE)
    nombre = models.IntegerField(blank=True, null=True)
    mois = models.IntegerField(blank=True, null=True)
    year = models.IntegerField(blank=True, null=True)
