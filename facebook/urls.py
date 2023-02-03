from django.urls import path
from . import views

urlpatterns = [
    path("fb/VIH/reach", views.reach_VIH_two_months_PSI, name="fb_reach"),
    path("fb/VIH/likes", views.likes_VIH_two_months_PSI, name="fb_likes"),
    path("fb/VIH/visit", views.visit_VIH_two_months_PSI, name="fb_visit"),
    path(
        "fb/E-zaho/reach", views.reach_Ezaho_two_months_PSI, name="fb_reach"),
    path("fb/E-zaho/likes", views.likes_Ezaho_two_months_PSI, name="fb_likes"),
    path("fb/E-zaho/visit", views.visit_Ezaho_two_months_PSI, name="fb_visit"),
    path("fb/reach_all", views.reach_compare_all),
    path("fb/hello", views.hello),
    path('fbupload/<str:programme>/<str:type>',
         views.UploadFileView.as_view(), name='upload-file')
]
