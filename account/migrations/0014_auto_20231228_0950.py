# Generated by Django 3.2.7 on 2023-12-28 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0013_account_profilehighlighttag'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='hobby',
            field=models.CharField(blank=True, default='', max_length=250, verbose_name='hobby'),
        ),
        migrations.AddField(
            model_name='account',
            name='otherinfo',
            field=models.TextField(blank=True, max_length=100000, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='targetexam',
            field=models.CharField(blank=True, default='', max_length=250, verbose_name='target_exam'),
        ),
        migrations.AddField(
            model_name='account',
            name='targetyear',
            field=models.CharField(blank=True, default='', max_length=250, verbose_name='target_exam year'),
        ),
    ]
