# Generated by Django 4.1 on 2022-09-29 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CIU",
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
                ("code", models.CharField(blank=True, max_length=20, null=True)),
                ("is_used", models.BooleanField(default=False, null=True)),
            ],
        ),
    ]
