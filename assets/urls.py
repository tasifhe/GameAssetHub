from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('mylibrary/', views.mylibrary, name='mylibrary'),
    path('publish/', views.publish, name='publish'),
    path('community/', views.community, name='community'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('profile/', views.profile, name='profile'),
    path('settings/', views.settings, name='settings'),
    path('logout/', views.logout, name='logout'),
    path('browse/', views.browse, name='browse'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
]
