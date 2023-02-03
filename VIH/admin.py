from django.contrib import admin
from .models import PSensibilisation, TypeDemande, Sexe, Cible, Csb, Referent, Collecte, PE, DICMeva, Intrant, Distribution_Intrant
# Register your models here.
admin.site.register([PSensibilisation, TypeDemande, Sexe,
                    Cible, Csb, Referent, Collecte, PE, DICMeva, Intrant, Distribution_Intrant])
