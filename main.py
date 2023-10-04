from flask import Flask, render_template

app = Flask("OurTeamProject")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/card_page")
def card_page():
    return render_template("cardpage.html")


@app.route("/card_page/mem1")
def member_page():
    return render_template("introduce.html")

app.run("127.0.0.1")