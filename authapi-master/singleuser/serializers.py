from rest_framework import serializers
from .models import configuration_manage,employed,college_student,school_student

class school_serializer(serializers.ModelSerializer):
    class Meta:
        model = school_student
        fields = '__all__'


class college_serializer(serializers.ModelSerializer):
    class Meta:
        model = college_student
        fields = '__all__'


class employed_serializer(serializers.ModelSerializer):
    class Meta:
        model = employed
        fields = '__all__'



class configuration_serializer(serializers.ModelSerializer):
    # image = serializers.ImageField(use_url=True)
    class Meta:
        model = configuration_manage
        fields = '__all__'