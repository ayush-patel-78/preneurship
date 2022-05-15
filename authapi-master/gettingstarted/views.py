
from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response



# Create your views here.
from gettingstarted.serializers import *
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import viewsets
from .models import Verification


class GetStartedAPIView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated] #[AllowAny]
    serializer_class = GetStartedSerializer
    # queryset = Verification.objects.all()
    # lookup_field = "owner"

    # serializer_class = GetStartedSerializer

    def get_queryset(self):
        return self.request.user.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

