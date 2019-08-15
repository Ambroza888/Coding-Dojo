from django.shortcuts import render, HttpResponse



def index(request):
  return HttpResponse("this is the equalvalnet of @app.rout('/')")

def another_method(request,my_val):
  return HttpResponse("the number is ")


def yet_another(request,name):
  return HttpResponse("RRRRRRR")

def one_more(request,id,color,bumbum):
  return HttpResponse("are we able to do it ?")