from django.shortcuts import render
from .models import Blog
# Create your views here.

def blog(request):
    blogs = Blog.object.all()
    return render(request, "blog.html", {"blogs":blog})

# def first_blog(request):
#     return render(request, "blog/blog.html")