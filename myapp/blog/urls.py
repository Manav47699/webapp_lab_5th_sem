from django.urls import path
from . import views

urlpatterns = [
    path('', views.blog),
    # path('/first-blog', views.first_blog)
]