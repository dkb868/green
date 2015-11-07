from rest_framework import serializers
from reports.models import Report, Category


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ('id', 'category', 'title', 'description', 'latitude', 'longitude', 'created_at')


class CategorySerializer(serializers.ModelSerializer):
    reports = ReportSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'title', 'reports', 'description', 'created_at')
