from django.db import models

# Create your models here.


class Region(models.Model):
    uid = models.CharField(max_length=50, blank=True, null=True)
    code = models.CharField(max_length=250, blank=True, null=True)
    name = models.CharField(max_length=250, blank=True, null=True)
    parentid = models.CharField(max_length=250, blank=True, null=True)
    hierarchylevel = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name


class District(models.Model):
    uid = models.CharField(max_length=50, blank=True, null=True)
    code = models.CharField(max_length=250, blank=True, null=True)
    name = models.CharField(max_length=250, blank=True, null=True)
    parentid = models.CharField(max_length=250, blank=True, null=True)
    hierarchylevel = models.IntegerField(blank=True, null=True)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name


class Commune(models.Model):
    uid = models.CharField(max_length=50, blank=True, null=True)
    code = models.CharField(max_length=250, blank=True, null=True)
    name = models.CharField(max_length=250, blank=True, null=True)
    parentid = models.CharField(max_length=250, blank=True, null=True)
    hierarchylevel = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, blank=True, null=True)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name


class Ville(models.Model):
    uid = models.CharField(max_length=50, blank=True, null=True)
    code = models.CharField(max_length=250, blank=True, null=True)
    name = models.CharField(max_length=250, blank=True, null=True)
    parentid = models.CharField(max_length=250, blank=True, null=True)
    hierarchylevel = models.IntegerField(blank=True, null=True)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, blank=True, null=True)
    commune = models.ForeignKey(
        Commune, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name


class Csb(models.Model):
    uid = models.CharField(max_length=50, blank=True, null=True)
    code = models.CharField(max_length=250, blank=True, null=True)
    name = models.CharField(max_length=250, blank=True, null=True)
    parentid = models.CharField(max_length=250, blank=True, null=True)
    hierarchylevel = models.IntegerField(blank=True, null=True)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, blank=True, null=True)
    commune = models.ForeignKey(
        Commune, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name


class Level5(models.Model):
    uid = models.CharField(max_length=50, blank=True, null=True)
    code = models.CharField(max_length=250, blank=True, null=True)
    name = models.CharField(max_length=250, blank=True, null=True)
    parentid = models.CharField(max_length=250, blank=True, null=True)
    hierarchylevel = models.IntegerField(blank=True, null=True)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, blank=True, null=True)
    commune = models.ForeignKey(
        Commune, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name
