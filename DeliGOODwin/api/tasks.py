import datetime
import os
from celery import shared_task
from .models import Parcel


@shared_task
def create_reserve_copy():
    return os.system(f'python manage.py dumpdata --exclude=contenttypes --exclude=auth > '
                     f'backup/backup_{datetime.datetime.now().strftime("%y.%m.%d_%H.%M.%S")}.json')


@shared_task
def check_return_to_sender():
    parcels = Parcel.objects.all()
    for parcel in parcels:
        if parcel.status == 0:
            if (datetime.datetime.now().date() - parcel.date_of_create).days > 2:
                Parcel.objects.filter(id=parcel.id).update(status=2)


@shared_task
def check_parcel_to_overdue():
    parcels = Parcel.objects.all()
    for parcel in parcels:
        if parcel.status == 1:
            if (datetime.datetime.now().date() - parcel.date_of_create).days > 14:
                Parcel.objects.filter(id=parcel.id).update(status=2)


@shared_task
def check_parcel_to_do_not_active():
    parcels = Parcel.objects.all()
    for parcel in parcels:
        if parcel.status == 2:
            if (datetime.datetime.now().date() - parcel.date_of_create).days > 7:
                Parcel.objects.filter(id=parcel.id).update(status=3)
