from django.db import models


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=20, null=False, unique=True)
    objective = models.TextField(max_length=300, null=False)
    created_at = models.DateTimeField(auto_now_add=True)

class Member(models.Model): 
    username: models.CharField(max_length=16, null=False, unique=True)
    active_projects: models.ManyToManyField(Project)

class Role(models.Model):
    role: models.CharField(max_length=16, null=False, unique=True)

class Task(models.Model):
    parent_project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=20, null=False)
    description = models.TextField(max_length=200, null=False, default="Task Description")
    is_completed = models.BooleanField(default=False)
