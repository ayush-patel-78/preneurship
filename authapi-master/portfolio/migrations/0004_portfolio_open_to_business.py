# Generated by Django 4.0.3 on 2022-05-09 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_alter_portfolio_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='open_to_business',
            field=models.BooleanField(default=False),
        ),
    ]
