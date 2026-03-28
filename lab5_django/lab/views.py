from django.shortcuts import render

# Create your views here.
from django.shortcuts import redirect
from .forms import RegistrationForm
from .models import usersprofile

def register_view(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('register')
    
    form = RegistrationForm()
    users = usersprofile.objects.all()
    return render(request, 'regitration.html', {'form': form, 'users': users})    #render resitration.html where form = 'form' and users = 'users