from django.db import models

# Create your models here.


class CIU(models.Model):
    code = models.CharField(max_length=20, blank=True, null=True)
    uid = models.CharField(max_length=20, blank=True, null=True)
    datetime = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        def __str__(self):
            return self.uid
