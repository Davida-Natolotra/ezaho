# Generated by Django 4.1 on 2022-09-29 13:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("location", "0003_level5"),
        ("VIH", "0003_remove_dicmeva_ville_dicmeva_code_dicmeva_commune_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="dicmeva",
            name="ville",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="location.ville",
            ),
        ),
    ]
