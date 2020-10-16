from flask import Flask, request, abort
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route('/sleep-score', methods=('POST',))
def sleep_score():
    try:
        res = request.get_json()
        score = round(100 * (res['durationSleep'] / res['durationBed']))
        return str(score)
    except Exception:
        abort(400, '#1')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
