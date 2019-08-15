from django.shortcuts import render,HttpResponse, redirect

def index(request):
  context = {
    "name": "Noelle",
    "favorite_color": "turquoise",
    "pets": ["Bruce", "Fitz", "Georgie"]
  }


  return render(request, "my_app/index.html",context)