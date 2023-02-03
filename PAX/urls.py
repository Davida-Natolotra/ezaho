from django.urls import path
from . import views

urlpatterns = [
    path("PAX/", views.PAXListCreateView.as_view()),
    path("PAX/<int:pk>/", views.PAXDetailUpdateView.as_view(), name="pax"),
    path("PAX/MyPAXList", views.MyPAXList.as_view()),
    path("PAX/ByUser", views.PAXByUser),
    path("PAX/MyLastPax/", views.MyLastPax),
    path("PAX/sexe/<int:sexeId>/", views.getSexeName),
    path("PAX/BySexe/", views.getPAXBySexe),
    path("PAX/fb", views.getPAXFB.as_view()),
    path("PAX/check_prenom_unique/<str:prenom>", views.check_prenom_unique),
    path("PAX/check_last_serial_no", views.check_last_serial_no)
]
