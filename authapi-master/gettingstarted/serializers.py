from rest_framework.serializers import ModelSerializer
from gettingstarted.models import *


class GetStartedSerializer(ModelSerializer):
    class Meta:
        model = Verification
        fields = "__all__"


