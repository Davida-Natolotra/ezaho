from django.contrib import admin
from .models import FacebookLikes, FacebookReach, FacebookVisit
# Register your models here.
admin.site.register([FacebookLikes,
                    FacebookReach, FacebookVisit])
