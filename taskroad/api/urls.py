from django.urls import path
from .views import ProjectListView
from .views import ProjectCreateView
from .views import ProjectDetailView
from .views import TaskListView

urlpatterns = [
    path("projects/", ProjectListView.as_view(), name="view all projects"),
    path("projects/register", ProjectCreateView.as_view(), name="register new project"),
    path("projects/<int:id>", ProjectDetailView.as_view(), name="view project detail"),
    path("projects/tasks", TaskListView.as_view(), name="view all tasks")
]