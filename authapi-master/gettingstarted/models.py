from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Verification(models.Model):
    owner = models.OneToOneField(User,on_delete=models.CASCADE,related_name='verify',blank=True,null=True,unique=True)
    title = models.CharField(max_length=200,null=True)
    date = models.DateField(null=True)
    number = models.IntegerField(null=True)

    profile = models.ImageField(null=True)
    companyname = models.TextField(null=True)
    companydocs = models.FileField(null=True,blank=True)
    desc = models.TextField(null=True,blank=True)
    pitch = models.TextField(null=True,blank=True)

    aadhar = models.FileField(null=True)
    Pancard = models.ImageField(null=True,blank=True)
    Voterid = models.ImageField(null=True,blank=True)
    selfie = models.ImageField(null=True)