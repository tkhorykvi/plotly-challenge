import os
import pandas as pd
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/bellybutton.sqlite"
db = SQLAlchemy(app)

Base = automap_base()

Base.prepare(db.engine, reflect=True)


Samples_Metadata = Base.classes.sample_metadata
Samples = Base.classes.samples


<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.js"></script>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  <script src="./static/js/app.js"></script>
  <script src="./static/js/bonus.js"></script>
  <script src="./static/js/samples.json"></script>
</body>
</html>