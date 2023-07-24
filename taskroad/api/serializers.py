from rest_framework import serializers
from .models import Project
from .models import Task


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ("id", "name", "objective", "created_at")

class TaskSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Task
        fields = ("id", "parent_project", "name", "is_completed")