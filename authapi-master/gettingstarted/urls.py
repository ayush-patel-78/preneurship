
from django.urls import path
from rest_framework import routers
from gettingstarted.views import GetStartedAPIView

router = routers.DefaultRouter()
router.register('api/verification', GetStartedAPIView, 'verification')
urlpatterns = router.urls