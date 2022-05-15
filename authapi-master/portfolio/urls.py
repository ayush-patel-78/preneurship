from django.urls import path
from rest_framework import routers
from .views import GetStartedAPIView,ListPortfolio

router = routers.DefaultRouter()
router.register('api/portfolio', GetStartedAPIView, 'portfolio')
router.register('api/companies', ListPortfolio, 'companies')
urlpatterns = router.urls