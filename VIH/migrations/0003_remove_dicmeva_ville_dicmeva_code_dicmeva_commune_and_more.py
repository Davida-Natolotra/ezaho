# Generated by Django 4.1 on 2022-09-29 10:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("location", "0003_level5"),
        ("VIH", "0002_pe_code_pe_hierarchylevel_pe_parentid_pe_uid_and_more"),
    ]

    operations = [
        migrations.RemoveField(model_name="dicmeva", name="ville",),
        migrations.AddField(
            model_name="dicmeva",
            name="code",
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name="dicmeva",
            name="commune",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="location.commune",
            ),
        ),
        migrations.AddField(
            model_name="dicmeva",
            name="district",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="location.district",
            ),
        ),
        migrations.AddField(
            model_name="dicmeva",
            name="hierarchylevel",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="dicmeva",
            name="parentid",
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name="dicmeva",
            name="uid",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
