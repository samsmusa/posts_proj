from django.urls import path
from . import views

app_name = "posts"

urlpatterns = [
    path('', views.post_list_and_create, name='main'),
]
