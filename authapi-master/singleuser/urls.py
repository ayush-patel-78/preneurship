from django.urls import path,include
from rest_framework import routers
from . views import *

router = routers.DefaultRouter()

router.register('api/school-view', school_view, basename="school")
router.register('api/collage-view', college_view, basename="collage")
router.register('api/employed-view',employed_view, basename="employed")
router.register('api/configuration-view',configuration_view, basename="configure")

urlpatterns = router.urls