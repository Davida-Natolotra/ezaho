# Generated by Django 4.1 on 2022-10-01 09:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("CIU", "0002_ciu_uid"),
    ]

    operations = [
        migrations.AddField(
            model_name="ciu",
            name="date_created",
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]
