from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "keep it secrect,keep it safe"


@app.route('/')
def create_user():
  if 'count' in session:
    session['count'] = session['count'] +1
  else:
    session["count"]= 1
  return render_template('show.html', qwe = session["count"])

@app.route("/destroy_session")
def delete():
  session.clear()
  return redirect("/")

@app.route("/upTWO")
def uptwo():
  if 'count' in session:
    session['count'] = session['count'] + 2
  else:
    session["count"] = 2
  return redirect('/')


if __name__=="__main__":
  app.run(debug=True)