
from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response

from rest_framework.generics import get_object_or_404

# Create your views here.
from gettingstarted.serializers import *
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import viewsets
from .models import Verification


class GetStartedAPIView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated] #[AllowAny]
    serializer_class = GetStartedSerializer
    queryset = Verification.objects.all()
    # lookup_field = "owner"

    # serializer_class = GetStartedSerializer

    def get_queryset(self):
        # obj = get_object_or_404(self.queryset,owner=self.request.user)
        # self.check_object_permissions(self.request,obj)
        return Verification.objects.filter(owner=self.request.user)
    

    def get_object(self):
        obj = get_object_or_404(self.get_queryset,owner=self.request.user)
        self.check_object_permissions(self.request,obj)
        return obj
        

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def perform_update(self, serializer):
        instance = self.get_object()
        if self.request.user.is_authenticated:
            serializer.save(owner=self.request.user)

