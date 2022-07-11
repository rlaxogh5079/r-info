from fastapi import FastAPI
import os
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from starlette.responses import RedirectResponse

app = FastAPI()
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get(path="/")
def root():
    return RedirectResponse(url="/home", status_code=302)

@app.get("/home")
def home():
    return templates.TemplateResponse("home.html", {"request": {"Content-Type": "text/html"}})

if __name__ == "__main__":
    os.system("nodemon --exec uvicorn server:app --reload --host=0.0.0.0 --port=3000")