from django.urls import path
from .views import CollecteDetailUpdateView, CollecteList, createCollecte

urlpatterns = [
    path("ezaho/collecte/new", createCollecte,
         name="collecte create"),
    path("ezaho/collecte/<int:id>", CollecteDetailUpdateView.as_view(),
         name="collecte detail update"),
    path("ezaho/collecte", CollecteList.as_view())
]
