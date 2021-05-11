import re

from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import CustomUser, Parcel, Branch


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password')

    def save(self):
        user = super(CustomUserSerializer, self).save()
        user.set_password(self.validated_data['password'])
        user.save()
        return user

    @staticmethod
    def validate_email(value):
        if not re.match(r"^[\w\-\\.]+@([\w-]+\.)+[\w-]{2,4}$", value):
            raise ValidationError("This is not an email!")
        return value


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'

    @staticmethod
    def validate_count_of_boxes(value):
        if value <= 0:
            raise ValidationError("Can't be smaller than 1")
        return value


class ParcelSerializer(serializers.ModelSerializer):
    # sender = CustomUserSerializer(read_only=True)
    # receiver = CustomUserSerializer(read_only=True)
    # branch = BranchSerializer(read_only=True)

    class Meta:
        model = Parcel
        fields = "__all__"

    def save(self):
        parcel = super(ParcelSerializer, self).save()
        if self.validated_data['sender'] == self.validated_data['receiver']:
            raise ValidationError("Error!")
        parcel.save()
        return parcel

