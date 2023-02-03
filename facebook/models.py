from django.db import models

# Create your models here.


class FacebookReach(models.Model):
    date = models.DateField(auto_now_add=False, null=True, blank=True)
    number = models.IntegerField(null=True, blank=True)
    programme = models.CharField(max_length=20, null=True, blank=True)

    class Meta:
        def __str__(self):
            return self.programme


class FacebookLikes(models.Model):
    date = models.DateField(auto_now_add=False, null=True, blank=True)
    number = models.IntegerField(null=True, blank=True)
    programme = models.CharField(max_length=20, null=True, blank=True)

    class Meta:
        def __str__(self):
            return self.programme


class FacebookVisit(models.Model):
    date = models.DateField(auto_now_add=False, null=True, blank=True)
    number = models.IntegerField(null=True, blank=True)
    programme = models.CharField(max_length=20, null=True, blank=True)

    class Meta:
        def __str__(self):
            return self.programme
