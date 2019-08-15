from django.shortcuts import render,HttpResponse,redirect

def index(request):
  return HttpResponse('placeholder to later display a list of all blogs')

def new(request):
  return HttpResponse("placeholder to dispaly a NEW form to create a new blog")

def create(request):
  return redirect("/")

def show(requset,num):
  return HttpResponse(f"place holder to dispaly blog number: {num}")


def edit(request,num):
  return HttpResponse(f'place holder to eidt blog :{num}')

def destroy(request,qwe):
  return redirect ("/")
