from flask import Flask, render_template
app = Flask(__name__) 
@app.route("/play/<num>/<color>/<duljina>")
def playground(num,color,duljina):
  return render_template("Playground_flask_assign.html",some_num= int(num),color123 = color, dulgo = int(duljina))








if __name__=="__main__":    
  app.run(debug=True)
