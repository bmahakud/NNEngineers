# Generated by Django 3.2.7 on 2023-12-11 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0009_account_aprovedtopper'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='mentoringexamname',
            field=models.CharField(blank=True, default='', max_length=250, verbose_name='mentoring_exam_name'),
        ),
        migrations.AlterField(
            model_name='account',
            name='mentoringtag',
            field=models.CharField(blank=True, default='', max_length=250, verbose_name='highlight_tag'),
        ),
    ]