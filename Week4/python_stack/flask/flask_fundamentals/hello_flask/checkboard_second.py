from flask import Flask, render_template
app = Flask(__name__) 
@app.route('/')       
def hello_world():
    return render_template("checkboard_2.html", num = 4)


@app.route('/<nomer>')       
def overit(nomer):
  return render_template("checkboard_2.html", num = 4, nomer = int(nomer/2))



if __name__=="__main__":
  app.run(debug=True)
  