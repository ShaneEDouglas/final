from flask import Flask, request, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.INFO)

#Database
faq_responses = {

    "weather": "The weather is sunny!",
    "temperature": "It's currently 22 degrees Celsius.",
    "help": "You can ask me a question, or you can say hi.",
    "location": "The address is 12345 Ridley Ave",
    "Destination":"The address is 12345 Ridley Ave",

}


#default route
@app.route('/', methods=['GET'])
def home():
    return jsonify("Welcome to the FAQ chat bot server!")


@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        message = data.get('message', '').lower()
        response = determine_response(message)
        return jsonify(response=response)
    except Exception as e:
        logging.error(f"Error: {e}")
        return jsonify(error=str(e)), 500

def determine_response(message):
    
    for question, answer in faq_responses.items():
        if question in message:
            return answer
    return "Sorry, I don't understand that question."

if __name__ == "__main__":
    app.run(debug=True)

