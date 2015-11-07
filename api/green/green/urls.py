from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from reports import views as report_views

router = DefaultRouter()

router.register(r'reports', report_views.ReportViewSet)
router.register(r'categories', report_views.CategoryViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]
