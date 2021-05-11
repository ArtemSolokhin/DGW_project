from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    pass


class Branch(models.Model):
    work_start = models.TimeField()
    work_end = models.TimeField()
    address = models.CharField(max_length=255)
    count_of_boxes = models.IntegerField()

    def __str__(self):
        return f"{self.address} branch number {self.id}"


class Parcel(models.Model):
    STATUS_CONFIRMED = 1
    STATUS_DO_NOT_CONFIRMED = 0
    STATUS_OVERDUE = 2
    STATUS_DO_NOT_ACTIVE = 3
    STATUS_ACTIVATED = 4

    STATUS_CHOICES = (
        (STATUS_CONFIRMED, 'CONFIRMED'),
        (STATUS_DO_NOT_CONFIRMED, 'DO NOT CONFIRMED'),
        (STATUS_OVERDUE, 'OVERDUE'),
        (STATUS_DO_NOT_ACTIVE, 'DO NOT ACTIVE'),
        (STATUS_ACTIVATED, 'ACTIVATED'),
    )

    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sender')
    receiver = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='receiver')
    status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES, default=0)
    date_of_create = models.DateField()
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    box = models.IntegerField()

    def __str__(self):
        return f"{self.sender}"
