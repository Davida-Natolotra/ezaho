# Generated by Django 4.1 on 2022-10-05 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("PAX", "0003_pax_region_pax_responsable"),
    ]

    operations = [
        migrations.CreateModel(
            name="Objectif",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nombre", models.IntegerField(blank=True, null=True)),
                ("responsable", models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
