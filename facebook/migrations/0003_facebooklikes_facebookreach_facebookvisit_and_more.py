# Generated by Django 4.1 on 2022-10-02 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("facebook", "0002_facebookpost_reach"),
    ]

    operations = [
        migrations.CreateModel(
            name="FacebookLikes",
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
                ("date", models.DateField(blank=True, null=True)),
                ("number", models.IntegerField(blank=True, null=True)),
                ("programme", models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="FacebookReach",
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
                ("date", models.DateField(blank=True, null=True)),
                ("number", models.IntegerField(blank=True, null=True)),
                ("programme", models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="FacebookVisit",
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
                ("date", models.DateField(blank=True, null=True)),
                ("number", models.IntegerField(blank=True, null=True)),
                ("programme", models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
        migrations.AddField(
            model_name="facebookpost",
            name="programme",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
