from flask import Blueprint, jsonify

# Create a blueprint for user routes
reviews_bp = Blueprint('reviews', __name__)
#start news


@reviews_bp.route('/api/reviews', methods=['GET'])
def get_reviews():
    # Sample review data with 5 elements
    reviews_data = [
        {
            "total_reviews": 30,
            "1_star_ratings": 7,
            "2_star_ratings": 1,
            "3_star_ratings": 3,
            "4_star_ratings": 5,
            "5_star_ratings": 4,
            "average_rating": 2.9
        },
        {
            "total_reviews": 50,
            "1_star_ratings": 5,
            "2_star_ratings": 2,
            "3_star_ratings": 10,
            "4_star_ratings": 20,
            "5_star_ratings": 13,
            "average_rating": 3.8
        },
        {
            "total_reviews": 40,
            "1_star_ratings": 8,
            "2_star_ratings": 4,
            "3_star_ratings": 6,
            "4_star_ratings": 12,
            "5_star_ratings": 10,
            "average_rating": 3.6
        },
        {
            "total_reviews": 20,
            "1_star_ratings": 3,
            "2_star_ratings": 0,
            "3_star_ratings": 2,
            "4_star_ratings": 5,
            "5_star_ratings": 10,
            "average_rating": 4.3
        },
        {
            "total_reviews": 15,
            "1_star_ratings": 1,
            "2_star_ratings": 0,
            "3_star_ratings": 2,
            "4_star_ratings": 5,
            "5_star_ratings": 7,
            "average_rating": 4.5
        }
    ]
    
    # Return the array as a JSON response
    return jsonify(reviews_data)