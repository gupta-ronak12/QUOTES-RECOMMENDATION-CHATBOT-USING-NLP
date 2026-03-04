from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

RASA_URL = "http://localhost:5005/webhooks/rest/webhook"

@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()

        if not data or "message" not in data:
            return jsonify({"error": "Message is required"}), 400

        user_message = data["message"]

        payload = {
            "sender": "user",
            "message": user_message
        }

        response = requests.post(RASA_URL, json=payload)

        if response.status_code != 200:
            return jsonify({"error": "Rasa server error"}), 500

        rasa_response = response.json()

        if rasa_response:
            bot_reply = rasa_response[0].get("text", "")
        else:
            bot_reply = "Sorry, I didn’t understand that."

        return jsonify({"reply": bot_reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5000, debug=True)