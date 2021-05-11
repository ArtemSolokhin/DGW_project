from rest_framework.generics import ListAPIView

from .models import CustomUser, Parcel, Branch
from rest_framework.viewsets import ModelViewSet
from .serializers import CustomUserSerializer, ParcelSerializer, BranchSerializer
from django.db.models import Q


class CustomUserViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class ParcelViewSet(ModelViewSet):
    queryset = Parcel.objects.all()
    serializer_class = ParcelSerializer


class BranchViewSet(ModelViewSet):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer


class PersonalInfoViewSet(ListAPIView):
    serializer_class = ParcelSerializer

    def get_queryset(self):
        pk = self.kwargs['pk']
        return Parcel.objects.filter(Q(sender=CustomUser.objects.get(pk=pk)) | Q(receiver=CustomUser.objects.get(pk=pk)))

    @classmethod
    def get_extra_actions(cls):
        return []
