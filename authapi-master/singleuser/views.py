from .serializers import *
from django.shortcuts import get_object_or_404, render
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import viewsets
from .models import  school_student,college_student,configuration_manage,employed,configuration_manage


# Create your views here.
class school_view(viewsets.ModelViewSet,):
    permission_classes = [IsAuthenticated]#[AllowAny] #
    serializer_class = school_serializer
    queryset = school_student.objects.all()
    def get_queryset(self):
        return school_student.objects.filter(owner=self.request.user)
    
    def get_object(self):
        obj = get_object_or_404(self.queryset, owner=self.request.user)
        self.check_object_permissions(self.request, obj)
        return obj
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        instance = self.get_object()  # instance before update
        if self.request.user.is_authenticated:
            serializer.save(owner=self.request.user)


class college_view(viewsets.ModelViewSet):
    # queryset = college_student.objects.all()
    permission_classes = [IsAuthenticated] #[AllowAny] #
    serializer_class = college_serializer
    def get_queryset(self):
        return college_student.objects.filter(owner=self.request.user)
    
    def get_object(self):
        obj = get_object_or_404(self.get_queryset, owner=self.request.user)
        self.check_object_permissions(self.request, obj)
        return obj
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        instance = self.get_object()  # instance before update
        if self.request.user.is_authenticated:
            serializer.save(owner=self.request.user)


class employed_view(viewsets.ModelViewSet):
    # queryset = employed.objects.all()
    permission_classes = [IsAuthenticated] # [AllowAny] #
    serializer_class = employed_serializer

    def get_queryset(self):
        return employed.objects.filter(owner=self.request.user)
    
    def get_object(self):
        obj = get_object_or_404(self.get_queryset, owner=self.request.user)
        self.check_object_permissions(self.request, obj)
        return obj
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        instance = self.get_object()  # instance before update
        if self.request.user.is_authenticated:
            serializer.save(owner=self.request.user)

class configuration_view(viewsets.ModelViewSet):
    # queryset = configuration_manage.objects.all()
    permission_classes = [AllowAny] #[IsAuthenticated]
    serializer_class = configuration_serializer

    def get_queryset(self):
        return configuration_manage.objects.filter(owner=self.request.user)
    
    def get_object(self):
        obj = get_object_or_404(self.get_queryset, owner=self.request.user)
        self.check_object_permissions(self.request, obj)
        return obj
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        instance = self.get_object()  # instance before update
        if self.request.user.is_authenticated:
            serializer.save(owner=self.request.user)
