from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Verification(models.Model):
    owner = models.OneToOneField(User,on_delete=models.CASCADE,related_name='verify',blank=True,null=True)
    title = models.CharField(max_length=200,null=True,blank=True)
    date = models.DateField(null=True,blank=True)
    number = models.IntegerField(null=True,blank=True)

    profile = models.ImageField(null=True)
    companyname = models.TextField(null=True)
    companydocs = models.TextField(null=True,blank=True)
    desc = models.TextField(null=True,blank=True)
    pitch = models.TextField(null=True,blank=True)

    aadhar = models.TextField(null=True,blank=True)
    Pancard = models.TextField(null=True,blank=True)
    Voterid = models.TextField(null=True,blank=True)
    selfie = models.TextField(null=True,blank=True)