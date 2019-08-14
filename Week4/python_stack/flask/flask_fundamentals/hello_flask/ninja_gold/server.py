from flask import Flask, render_template, request, redirect, session
import random
import datetime
app = Flask(__name__)  
app.secret_key = "keep it secrect,keep it safe"


def chansefunk():
  num = random.randint(0,2)
  if num == 1:
    print(f"the num is {num}")
    return True
  else:
    print(f"the num of else state is {num}")
    return False

def addactivity(num,action,location):
  timestamp = datetime.datetime.now()
  if location == "casino":
    if action == "earned":
      session["activity"].append(f"<p style='color:red'>Earned</p> {num} from the casino ({timestamp})")
    elif action == "lost":
      lost = f"Entered the casino and lost {num} gold ...Ouch ({timestamp})"
      session["activity"].append(lost)
    else:
      print ("ebalo si e maikata")
  elif location == "farm":
    session['activity'].append(f"Earned {num} from the Farm!")
  elif location == "cave":
    session['activity'].append(f"Earned {num} from the Cave!")
  elif location == "house":
    session['activity'].append(f"Earne {num} from the house!")
  else:
    print("ebi se")




@app.route('/')         
def index():
  if not "total" in session:
    session['total'] = 0
  if not "activity" in session:
    session["activity"] = []
    

  # massage = "<ul><li>Hello<li><ul>"
  return render_template("index.html")

@app.route('/process_money', methods = ["POST"])
def process():

  guest_input = request.form["building"]
  if guest_input == "farm":
    farm_num = random.randint(10,20)
    session["total"] = session["total"] + farm_num
    addactivity(farm_num,"earned","farm")
  elif guest_input == "cave":
    cave_num = random.randint(5,10)
    session["total"] = session["total"] + cave_num
    addactivity(cave_num,"earned","cave")
  elif guest_input == "house":
    house_num = random.randint(2,5)
    session['total'] = session['total'] + house_num
    addactivity(house_num,"earned","house")
  elif guest_input == "casino":
    casino_num = random.randint(0,50)
    chanse = chansefunk()
    if chanse == True:
      session['total'] = session['total'] + casino_num
      addactivity(casino_num,"earned","casino")
    elif chanse == False:
      session['total'] = session['total'] - casino_num
      addactivity(casino_num,"lost","casino")
    else:
      print("e sa si eba maikata")
  else:
    print("e sa si eba maikata")
  return redirect("/")


@app.route('/clear', methods=['POST'])
def clear():
    session['total'] = 0
    session['activity'] = []
    return redirect('/')


if __name__=="__main__":   
    app.run(debug=True)