# Generated by Django 4.1 on 2022-10-04 23:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("facebook", "0003_facebooklikes_facebookreach_facebookvisit_and_more"),
    ]

    operations = [
        migrations.DeleteModel(name="FacebookPost",),
    ]
