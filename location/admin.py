from django.contrib import admin
from .models import Region, Commune, District, Ville, Level5

# Register your models here.
admin.site.register([Region, Commune, District, Ville, Level5])
