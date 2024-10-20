from routes import create_app

def startServer():
     app = create_app()
     print("hulalal")
     app.run(host='0.0.0.0', port=5000, debug=True)