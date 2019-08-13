from flask import Flask, render_template, redirect, session, request
import random
app = Flask(__name__)
app.secret_key = "keep it up"

@app.route('/')       
def hello():
  if not "guess" in session:
    mynum = random.randint(1,100)
    session["guess"] = mynum
    session['yourNUM'] = ""
  return render_template("index.html")

@app.route("/thenumber", methods=["POST"])
def funk():
  theNUM = request.form["theNUM"]
  if int(session["guess"]) > int(theNUM):
    session['yourNUM'] = "Too Low"
  elif int(session["guess"]) < int(theNUM):
    session['yourNUM'] = "Too High"
  else:
      session['yourNUM'] = "You Guess Right !!!"
      

  return redirect("/")



if __name__=="__main__":    
  app.run(debug=True)