from flask import Flask, render_template
app = Flask(__name__) 
@app.route('/')       
def hello_world():
    return render_template("index.html")
    
@app.route("/sucess")
def sucess():
  return "veso picha"


@app.route("/<name>")
def hello(name,qwe):
  return f"hello, {name} {qwe}"





if __name__=="__main__":    
  app.run(debug=True)
