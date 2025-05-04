from django.shortcuts import render
from .models import Asset

def index(request):
    assets = Asset.objects.all()
    return render(request, 'index.html', {'assets': assets})
