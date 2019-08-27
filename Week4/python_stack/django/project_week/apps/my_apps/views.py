from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.contrib import messages
import bcrypt



def index(request):
    return render(request, "my_apps/index.html")

def contact(request):
  return render(request, "my_apps/contact.html")