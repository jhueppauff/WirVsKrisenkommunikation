from flask import Flask, escape, request
import os
from dotenv import load_dotenv
load_dotenv(verbose=True)

app = Flask(__name__)

@app.route('/')
def index():
    return f'Use: /check /health'

@app.route('/health')
def health():
    return f'Healthy!'

@app.route('/check')
def textcheck():
    # TODO check url or content
    DATABASE_URL = os.getenv("DATABASE_URL")
    return f'Check {DATABASE_URL}!'