# Generated by Django 4.1 on 2022-09-06 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('facebook', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='facebookpost',
            name='reach',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
