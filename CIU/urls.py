from django.urls import path
from . import views

urlpatterns = [
    path('CIU/', views.CIUListCreateView.as_view(), name='CIU liste'),
    path("CIU/<int:pk>/", views.CIUDetailUpdateView.as_view(), name="CIU el"),
    path("CIU/generate", views.generate, name="generate"),
    path("CIU/check", views.check_ciu, name="check"),
    path("CIU/create/<str:code>/", views.createCIU, name="create")
]
