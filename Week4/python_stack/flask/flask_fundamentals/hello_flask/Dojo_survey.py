from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
  return render_template("dojo_survey.html")



@app.route("/result", methods=["POST"])
def result():

  return render_template("dojo_survey_show.html", location = request.form["location"], nam = request.form["name"],comment= request.form["freetextAREA"],language=request.form["language"])






if __name__ == '__main__':
  app.run(debug=True)