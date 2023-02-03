from django.urls import path
from .views import RegionListCreate, RegionDetailUpdate, DistrictListCreate, DistrictDetailUpdate, CommuneListCreate, CommuneDetailUpdate, VilleListCreate, VilleDetailUpdate, RegionListVille, get_region

urlpatterns = [
    path("region/", RegionListCreate.as_view(), name="regions"),
    path("region/<int:pk>/", RegionDetailUpdate.as_view(), name="region"),
    path("district/", DistrictListCreate.as_view(), name="districts"),
    path("district/<int:pk>/", DistrictDetailUpdate.as_view(), name="district"),
    path('commune/', CommuneListCreate.as_view(), name="communes"),
    path('commune/<int:pk>/', CommuneDetailUpdate.as_view(), name="commune"),
    path('ville/', VilleListCreate.as_view(), name="villes"),
    path('ville/<int:pk>/', VilleDetailUpdate.as_view(), name="ville"),
    path('region/villes/<int:pk>/', RegionListVille.as_view()),
    path('region/get_region/<int:id>/', get_region)
]
