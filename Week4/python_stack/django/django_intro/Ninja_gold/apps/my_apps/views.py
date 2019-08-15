from django.shortcuts import render, HttpResponse, redirect
import random
from time import strftime


def chanse():
  num = random.randint(0,2)
  if num == 1:
    return True
  else:
    return False

def index(request):
  if not "total" in request.session:
    request.session['total'] = 0

  if not "activity" in request.session:
    request.session['activity'] = []
  return render(request, "my_apps/index.html")


def process_money(request):
  guest_input = request.POST['building']
  curtime = strftime("%Y-%m-%d %H:%M %p")
  if guest_input == "farm":
    num_farm = random.randint(10,20)
    request.session['total'] = request.session['total'] + num_farm
    request.session["activity"].append(f"<p style='color:green'>Earned {num_farm} golds from the farm!{curtime}</p>")
  elif guest_input == "cave":
    num_cave = random.randint(5,10)
    request.session['total'] = request.session['total'] + num_cave
    request.session["activity"].append(f"Earned {num_cave} golds from the cave!{curtime}")
  elif guest_input == "house":
    num_house = random.randint(2,5)
    request.session['total'] = request.session['total'] + num_house
    request.session["activity"].append(f"Earned {num_house} golds from the house!{curtime}")
  elif guest_input == "casino":
    num_casino = random.randint(0,50)
    qwe = chanse()
    if qwe == True:
      request.session['total'] = request.session['total'] + num_casino
      request.session["activity"].append(f"Earned {num_casino} golds from the casino!{curtime}")
    else:
      request.session['total'] = request.session['total'] - num_casino
      request.session["activity"].append(f"Entered a casino and lost {num_casino} golds Ouch..{curtime}")
  else:
    print("mistake :(")
  return redirect('/')

def reset(request):
  request.session['activity'] = []
  request.session['total'] = 0
  return redirect ("/")