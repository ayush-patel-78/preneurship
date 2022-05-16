from django.shortcuts import render
from rest_framework.response import Response

# Create your views here.
from .serializers import *
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import viewsets
from .models import Portfolio

class GetStartedAPIView(viewsets.ModelViewSet):
    permission_classes = [AllowAny] #[IsAuthenticated]
    serializer_class = PortfolioSerializer

    def get_queryset(self):
        return self.request.user.portfolio.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)


class ListPortfolio(viewsets.ViewSet):
    serializer_class = PortfolioSerializer

    def list(self, request):
        queryset = Portfolio.objects.all()
        serializer = PortfolioSerializer(queryset, many=True)
        return Response(serializer.data)

