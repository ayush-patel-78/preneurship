from .serializers import *
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import viewsets
from .models import  school_student,college_student,configuration_manage,employed,configuration_manage


# Create your views here.
class school_view(viewsets.ModelViewSet,):
    # queryset = school_student.objects.all()
    permission_classes = [IsAuthenticated]#[AllowAny] #
    serializer_class = school_serializer
    def get_queryset(self):
        return self.request.user.school.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class college_view(viewsets.ModelViewSet):
    # queryset = college_student.objects.all()
    permission_classes = [IsAuthenticated] #[AllowAny] #
    serializer_class = college_serializer
    def get_queryset(self):
        return self.request.user.college.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)


class employed_view(viewsets.ModelViewSet):
    # queryset = employed.objects.all()
    permission_classes = [IsAuthenticated] # [AllowAny] #
    serializer_class = employed_serializer

    def get_queryset(self):
        return self.request.user.employed.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)

class configuration_view(viewsets.ModelViewSet):
    # queryset = configuration_manage.objects.all()
    permission_classes = [AllowAny] #[IsAuthenticated]
    serializer_class = configuration_serializer

    def get_queryset(self):
        return self.request.user.configure.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)
