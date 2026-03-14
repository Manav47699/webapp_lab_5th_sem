from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=70)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    