from django.shortcuts import render
from .models import Asset, Category

def index(request):
    assets = Asset.objects.all()  # Fetch all assets
    categories = Category.objects.all()  # Fetch all categories
    return render(request, 'index.html', {'assets': assets, 'categories': categories})

def categories(request):
    categories = Category.objects.all()
    return render(request, 'categories.html', {'categories': categories})

def mylibrary(request):
    return render(request, 'mylibrary.html')

def publish(request):
    return render(request, 'publish.html')

def community(request):
    return render(request, 'community.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def profile(request):
    return render(request, 'profile.html')

def settings(request):
    return render(request, 'settings.html')

def logout(request):
    # Placeholder for logout logic
    return render(request, 'logout.html')

def browse(request):
    assets = Asset.objects.all()
    categories = Category.objects.all()
    return render(request, 'browse.html', {'assets': assets, 'categories': categories})
