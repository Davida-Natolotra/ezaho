# Generated by Django 4.1 on 2022-11-11 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("PAX", "0008_pax_date_inscription"),
    ]

    operations = [
        migrations.AddField(
            model_name="pax",
            name="nouveau",
            field=models.BooleanField(blank=True, default=True, null=True),
        ),
    ]
