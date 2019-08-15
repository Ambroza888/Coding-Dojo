from django.shortcuts import render, redirect, HttpResponse
from time import gmtime, strftime

def index(request):

  context = {
    "time": strftime("%b %d %Y, %I:%M %p")
  }


  return render(request, "my_apps/index.html", context)