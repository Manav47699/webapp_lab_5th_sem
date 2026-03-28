from django.db import models

class usersprofile(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50) 
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    email = models.EmailField()