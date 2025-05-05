from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Asset, Category

def index(request):
    assets = Asset.objects.all()  # Fetch all assets
    categories = Category.objects.all()  # Fetch all categories
    return render(request, 'index.html', {'assets': assets, 'categories': categories})

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

def logout_view(request):
    logout(request)
    return redirect('/')

def browse(request):
    assets = Asset.objects.all()
    categories = Category.objects.all()
    return render(request, 'browse.html', {'assets': assets, 'categories': categories})

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            return render(request, 'auth/login.html', {'error': 'Invalid credentials'})
    return render(request, 'auth/login.html')

def register_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        if password == confirm_password:
            if not User.objects.filter(username=username).exists():
                User.objects.create_user(username=username, email=email, password=password)
                return redirect('/login/')
            else:
                return render(request, 'auth/register.html', {'error': 'Username already exists'})
        else:
            return render(request, 'auth/register.html', {'error': 'Passwords do not match'})
    return render(request, 'auth/register.html')
