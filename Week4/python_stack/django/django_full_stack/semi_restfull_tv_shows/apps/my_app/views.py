from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.contrib import messages


def index(request):
  context = {
    "all_shows": Show.objects.all()
  }
  return render(request, "my_app/index.html", context)

def add_new_show(request):
  return render(request, "my_app/add_new_show_page.html")

def display_show_info(reqeust,my_val):
  context = {
    "specific_show": Show.objects.get(id=my_val)
  }
  return render(reqeust, "my_app/display_show_info.html", context)

def taking_show_info(request):
  errors = Show.objects.basic_validator(request.POST)
  if len(errors) > 0:
    for key, candy in errors.items():
      messages.error(request, candy)
    return redirect("shows/new")
  else:
    title = request.POST["title"] 
    network = request.POST["network"]
    date = request.POST["date"]
    desc = request.POST["desc"]
    temp = Show.objects.create(title=title,network=network,release_date=date,desc=desc)
    id = temp.id
    return redirect(f'/shows/{id}')


def delete(reqeust,my_val):

  Show.objects.get(id=my_val).delete()

  return redirect("/shows")

def edit(request,my_val):
    context = {
      "chosen_show": Show.objects.get(id=my_val)
    }
    return render(request, "my_app/edit_page.html", context)


def update(request,my_val):
  errors = Show.objects.basic_validator(request.POST)
  if len(errors) > 0:
    for key, candy in errors.items():
      messages.error(request, candy)
    return redirect(f"/shows/{my_val}/edit")
  else:
    title = request.POST["title"]
    network = request.POST["network"]
    release_date = request.POST["release_date"]
    desc = request.POST["desc"]
    current = Show.objects.get(id=my_val)
    current.title = title
    current.network = network
    current.release_date = release_date
    current.desc = desc
    current.save()

  return redirect(f"/shows/{my_val}")