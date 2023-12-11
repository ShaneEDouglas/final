from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

NEWS_API_KEY = 'f473b9e803ea4954bf36513b820b1bf1'
NEWS_API_ENDPOINT = 'https://newsapi.org/v2/everything'

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the News API service!"})

@app.route('/news', methods=['GET'])
def get_news():
    query = request.args.get('q', default=None)  # Only set if provided
    category = request.args.get('category', default=None)  # New category parameter
    language = request.args.get('language', 'en')
    page_size = request.args.get('pageSize', default=20)
    page = request.args.get('page', default=1)

    params = {
        'language': language,
        'pageSize': page_size,
        'page': page,
        'apiKey': NEWS_API_KEY
    }
    
    
    if query:

        params['q'] = query
        endpoint = NEWS_API_ENDPOINT  

    elif category:
        endpoint = NEWS_API_ENDPOINT  
        params['category'] = category
    else:
        
        params['q'] = 'news'
        endpoint = NEWS_API_ENDPOINT

    response = requests.get(endpoint, params=params)
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(debug=True)