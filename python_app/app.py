# https://docs.docker.com/language/python/build-images/
import flask
from flask import Flask, make_response, request, Response
from datetime import datetime
from flask_cors import CORS

import prometheus_client
from prometheus_client import Summary, Counter, Histogram, Gauge

app = Flask(__name__)

CORS(app)

graphs = {}
graphs['c'] = Counter('python_request_operations_total', 'The total number of processed requests')


@app.route("/currentTime", methods=["GET"])
def current_time():
    graphs['c'].inc()
    now = datetime.now()
    return now.strftime("%H:%M:%S")


@app.route("/metrics")
def requests_count():
    res = []
    for k, v in graphs.items():
        res.append(prometheus_client.generate_latest(v))
    return Response(res, mimetype="text/plain")
