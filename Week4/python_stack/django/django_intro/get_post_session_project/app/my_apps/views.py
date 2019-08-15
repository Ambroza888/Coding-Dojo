from django.shortcuts import render, HttpResponse, redirect

def index(request):
  return render(request, "my_apps/index.html")

def some_funk(request):
  if request.method == "POST":
    val_from_field_one = request.POST["one"]
    if val_from_field_one == 1:
      return redirect('http://www.google.com') 
    else:
      print("bam")
  return redirect("/")
