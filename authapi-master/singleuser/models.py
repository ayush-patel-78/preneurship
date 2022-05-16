from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class school_student(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='school',unique=True)
    current_qualification = models.CharField(max_length=50,blank=True,null=True)
    qualification_status = models.CharField(max_length=50,blank=True,null=True)
    academy_name = models.CharField(max_length=50,blank=True,null=True)

class college_student(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='college',blank=True,null=True)
    course_name = models.CharField(max_length=50,blank=True,null=True)
    specification_in = models.CharField(max_length=50,blank=True,null=True)
    collage_name = models.CharField(max_length=50,blank=True,null=True)
    add_previous_education = models.CharField(max_length=500,blank=True,null=True)

class employed(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='employed',blank=True,null=True)
    company_name = models.CharField(max_length=100,blank=True,null=True)
    position_in_company = models.CharField(max_length=80,blank=True,null=True)
    add_previous_education = models.TextField(blank=True,null=True)

class configuration_manage(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='configure',blank=True,null=True)
    image = models.TextField(null=True,blank=True)
    name = models.CharField(max_length=255,blank=True,null=True)
    add_skills = models.CharField(max_length=500,blank=True,null=True)
    bio = models.TextField(blank=True,null=True)