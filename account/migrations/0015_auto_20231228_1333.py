# Generated by Django 3.2.7 on 2023-12-28 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0014_auto_20231228_0950'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='edudegree',
            options={'ordering': ('endYear',)},
        ),
        migrations.RemoveField(
            model_name='edudegree',
            name='certificates',
        ),
        migrations.RemoveField(
            model_name='edudegree',
            name='endDate',
        ),
        migrations.RemoveField(
            model_name='edudegree',
            name='marksheets',
        ),
        migrations.RemoveField(
            model_name='edudegree',
            name='startDate',
        ),
        migrations.AddField(
            model_name='edudegree',
            name='endYear',
            field=models.IntegerField(blank=True, default=2021, null=True),
        ),
        migrations.AddField(
            model_name='edudegree',
            name='marks',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='edudegree',
            name='startYear',
            field=models.IntegerField(blank=True, default=2020, null=True),
        ),
        migrations.AlterField(
            model_name='edudegree',
            name='degreename',
            field=models.TextField(blank=True, max_length=100000, null=True),
        ),
        migrations.AlterField(
            model_name='edudegree',
            name='institute',
            field=models.TextField(blank=True, max_length=10000, null=True),
        ),
    ]