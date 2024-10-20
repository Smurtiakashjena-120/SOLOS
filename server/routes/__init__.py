from flask import Flask
from flask_cors import CORS
from .news import news_bp
from .analysis import analysis_bp
from .stocks import stocks_bp
from .reviews import reviews_bp


def create_app():
    app = Flask(__name__)
    CORS(app)

    # Register the blueprints
    app.register_blueprint(news_bp)
    app.register_blueprint(analysis_bp)
    app.register_blueprint(stocks_bp)
    app.register_blueprint(reviews_bp)
 

    return app
