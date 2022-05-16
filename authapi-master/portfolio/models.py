
from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Portfolio(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE,related_name='portfolio',blank=True,null=True)
    profile = models.TextField(null=True,blank=True)
    name_own = models.CharField(max_length=255,null=True,blank=True)
    comp_email = models.EmailField(max_length=255,null=True,blank=True)
    comp_contact = models.IntegerField(max_length=255,null=True,blank=True)
    companyname=models.TextField(null=True,blank=True)
    desc=models.TextField(null=True,blank=True)
    pitch=models.TextField(null=True,blank=True)

    valuation=models.CharField(max_length=225,null=True,blank=True)
    sales=models.CharField(max_length=225,null=True,blank=True)
    margin=models.CharField(max_length=225,null=True,blank=True)
    profit_month=models.CharField(max_length=225,null=True,blank=True)
    profit_year=models.CharField(max_length=225,null=True,blank=True)
    owership=models.IntegerField(null=True,blank=True)
    dil_equity=models.IntegerField(null=True,blank=True)
    ls_equity_members=models.TextField(null=True,blank=True)
    open_to_investors = models.BooleanField(default=False)
    open_to_partners = models.BooleanField(default=False)
    price_release = models.IntegerField(null=True,blank=True)
    ready = models.BooleanField(default=False)