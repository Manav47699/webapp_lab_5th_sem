from django import forms
from .models import usersprofile

class RegistrationForm(forms.ModelForm):
    class Meta:
        model = usersprofile
        fields = '__all__'
        