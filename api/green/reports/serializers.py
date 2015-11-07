from rest_framework import serializers
from reports.models import Report


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ('id', 'title', 'description', 'latitude', 'longitude')
