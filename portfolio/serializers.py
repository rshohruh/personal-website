from rest_framework import serializers
from .models import Project, Certificate, Blog

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'category', 'image', 'alt', 'link']

class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = ['id', 'title', 'image', 'link']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'category', 'image', 'alt', 'date', 'text', 'text', 'link']
