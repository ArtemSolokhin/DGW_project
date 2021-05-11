from django.urls import path, include, re_path
from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register(r'user', views.CustomUserViewSet)
router.register(r'branch', views.BranchViewSet)
router.register(r'parcel', views.ParcelViewSet)

urlpatterns = [
    path('api/v1/', include((router.urls, "api"), namespace='api')),
    path('api/v1/user/', views.CustomUserViewSet.as_view({'get': 'list'}), name='user'),
    path('api/v1/branch/', views.BranchViewSet.as_view({'get': 'list'}), name='branch'),
    path('api/v1/parcel/', views.ParcelViewSet.as_view({'get': 'list'}), name='parcel'),
    re_path('api/v1/personal-info/(?P<pk>.+)/$', views.PersonalInfoViewSet.as_view(), name='info'),
]