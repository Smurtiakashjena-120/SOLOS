
from flask import Blueprint, jsonify

# Create a blueprint for user routes
news_bp = Blueprint('news', __name__)
#start news


import requests
from bs4 import BeautifulSoup

query = 'reliance-digital'

headlines_list = []
#Economics times url
URL = f"https://economictimes.indiatimes.com/topic/{query}"
res = requests.get(URL)

#Parsing the webpage content to html

soup = BeautifulSoup(res.text, 'html.parser')

headlines = soup.find_all(class_= 'contentD')

for headline in headlines:
    title = headline.find('h2')
    link = title.find('a')['href']

    content = headline.find('p')
    news = {
        "title": title.get_text(),
        "link": "https://economictimes.indiatimes.com/"+link,
        "content": content.get_text()
            }
    
    headlines_list.append(news)





@news_bp.route('/api/news', methods=['GET'])
def get_news():

    return jsonify({'headlines_list': headlines_list})