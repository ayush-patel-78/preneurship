from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class school_student(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='school',unique=True)
    current_qualification = models.CharField(max_length=50)
    qualification_status = models.CharField(max_length=50)
    academy_name = models.CharField(max_length=50)

class college_student(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='college',unique=True)
    course_name = models.CharField(max_length=50)
    specification_in = models.CharField(max_length=50)
    collage_name = models.CharField(max_length=50)
    add_previous_education = models.CharField(max_length=500)

class employed(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='employed')
    company_name = models.CharField(max_length=100)
    position_in_company = models.CharField(max_length=80)
    add_previous_education = models.TextField()

class configuration_manage(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='configure')
    image = models.ImageField(null=True,blank=True,upload_to='media/')
    add_skills = models.CharField(max_length=500)
    bio = models.TextField()