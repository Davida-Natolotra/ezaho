# Generated by Django 4.1 on 2022-09-28 11:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Commune",
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
                ("uid", models.CharField(blank=True, max_length=50, null=True)),
                ("code", models.CharField(blank=True, max_length=250, null=True)),
                ("name", models.CharField(blank=True, max_length=250, null=True)),
                ("parentid", models.CharField(blank=True, max_length=250, null=True)),
                ("hierarchylevel", models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="District",
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
                ("uid", models.CharField(blank=True, max_length=50, null=True)),
                ("code", models.CharField(blank=True, max_length=250, null=True)),
                ("name", models.CharField(blank=True, max_length=250, null=True)),
                ("parentid", models.CharField(blank=True, max_length=250, null=True)),
                ("hierarchylevel", models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Region",
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
                ("uid", models.CharField(blank=True, max_length=50, null=True)),
                ("code", models.CharField(blank=True, max_length=250, null=True)),
                ("name", models.CharField(blank=True, max_length=250, null=True)),
                ("parentid", models.CharField(blank=True, max_length=250, null=True)),
                ("hierarchylevel", models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Ville",
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
                ("uid", models.CharField(blank=True, max_length=50, null=True)),
                ("code", models.CharField(blank=True, max_length=250, null=True)),
                ("name", models.CharField(blank=True, max_length=250, null=True)),
                ("parentid", models.CharField(blank=True, max_length=250, null=True)),
                ("hierarchylevel", models.IntegerField(blank=True, null=True)),
                (
                    "commune",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="location.commune",
                    ),
                ),
                (
                    "district",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="location.district",
                    ),
                ),
                (
                    "region",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="location.region",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="district",
            name="region",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="location.region",
            ),
        ),
        migrations.AddField(
            model_name="commune",
            name="district",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="location.district",
            ),
        ),
        migrations.AddField(
            model_name="commune",
            name="region",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="location.region",
            ),
        ),
    ]
