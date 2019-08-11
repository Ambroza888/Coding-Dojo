from flask import Flask, render_template
app = Flask(__name__) 
@app.route('/')
def eightByeight():
  return render_template("checkerboard.html", num = 8, theboZZ = 8, color1 = "black", color2 = "red")
@app.route("/<x>")
def theboZZ(x):
  papichulio = 8
  return render_template("checkerboard.html", num = papichulio,theboZZ = int(x),color1 = "black", color2 = "red")
@app.route("/<x>/<y>")
def pepiCIGANINA(x,y):
  return render_template("checkerboard.html", num = int(y),theboZZ = int(x), color1 = "black", color2 = "red")

@app.route("/<x>/<y>/<f>/<u>")
def pepiMANGALA(x,y,f,u):
  return render_template("checkerboard.html", num = int(y),theboZZ = int(x), color1 = f, color2 = u)

if __name__=="__main__":    
  app.run(debug=True)
