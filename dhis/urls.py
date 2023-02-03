from django.urls import path
from . import views

urlpatterns = [
    path('api/dhis/', views.Load_Dispatch, name="API DHIS2"),
]
