from django.db import models
from PAX.models import PAX

# Create your models here.


class Collecte_ezaho(models.Model):
    date_collecte = models.DateField(auto_now_add=True, null=True)
    pax = models.ForeignKey(
        PAX, on_delete=models.CASCADE, blank=True, null=True)
    referent = models.CharField(max_length=250, blank=True, null=True)
