from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_world():
  return render_template("index.html")

@app.route("/dojo")
def say_dojo():
  return "Dojo!"

@app.route("/<hi>/<name>")
def hiname(hi, name):
  return f"{hi} {name}"

@app.route("/repeat/<num>/<hello>")
def counter(num, hello):
  return int(num) * str(hello)



if __name__=="__main__":    
  app.run(debug=True)
