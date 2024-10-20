

from flask import Blueprint, jsonify

# Create a blueprint for user routes
stocks_bp = Blueprint('stocks', __name__)
#start news



@stocks_bp.route('/api/stocks', methods=['GET'])
def get_stock():
    # Example array of stock data
    stock_data = [
        {"symbol": "BAJAJ", "price": 150.10},
        {"symbol": "VIJAY SALES", "price": 2820.50},
        {"symbol": "ADITYA", "price": 780.30}
    ]
    
    # Return the array as a JSON response
    return jsonify(stock_data)