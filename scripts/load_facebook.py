from facebook.models import FacebookLikes, FacebookVisit, FacebookReach
from scripts.load_facebook_ezaho import run as load_ezaho
from scripts.load_facebook_VIH import run as load_VIH
from scripts.load_facebook_WHP import run as load_WHP
from scripts.load_facebook_PF import run as load_PF
from scripts.load_facebook_PALU import run as load_PALU


def run():
    FacebookLikes.objects.all().delete()
    FacebookVisit.objects.all().delete()
    FacebookReach.objects.all().delete()
    load_ezaho()
    load_VIH()
    load_WHP()
    load_PF()
    load_PALU()
