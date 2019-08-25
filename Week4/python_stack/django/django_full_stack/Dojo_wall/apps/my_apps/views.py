from django.shortcuts import render, HttpResponse, redirect



def index(request):
  return render(request, "my_apps/index.html")