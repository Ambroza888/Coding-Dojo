from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def index(request):

  if not "counter" in request.session:
    request.session['counter'] = 0
  


  return render(request, "my_apps/index.html")


def generate(request):
  request.session['theword'] = get_random_string(length=14)
  request.session['counter'] = request.session['counter'] + 1
  return redirect("/")

def reset(request):

  request.session['counter'] = 0
  return redirect("/")