from flask import Flask, render_template,request
app = Flask(__name__) 
@app.route('/')       
def hello_world():
  return render_template("POST_Form_submission.html")


@app.route("/process", methods = ["POST"])
def process_form():

  return render_template("post_form_sub_info.html", name =request.form["username"], em = request.form["email"])

if __name__=="__main__":
  app.run(debug=True)