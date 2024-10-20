import google.generativeai as genai
import os
from dotenv import load_dotenv


load_dotenv()

genai.configure(api_key= os.getenv('GEMINI_API_KEY'))

model = genai.GenerativeModel("gemini-1.5-flash")

import pdfplumber

import json
def summarize_text(text):
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content([f"""Key differentiators in Business Model
o Channels (store, online, B2B)
o Product portfolio (categories, category mix, assortment size and
type, private labels, etc.) Customer segments served
o Marketing strategy and media presence
o Affordability offerings (financing, exchange etc.)
o After sales offerings (services, customer service,
recycling/disposal)
o Supply chain (network, supplier relationships, delivery promises
etc.)
o Use of technology
• Geographical presence & store formats
o # of stores by location, new additions in the last year, future
plans
o Stores rented vs owned
o Formats (size, type, manpower)
o Space for advertising
• Performance trends over time, by region and by category
o Financials
o Store unit economics (capex, working capital, sales per square
foot, break-even etc.)
• Customer feedback (NPS, reviews etc.)
• Any major strategic initiatives – investments, acquisitions, etc.
• Future outlook give all the entries to the point like number of shop=130 like wise return the data in json format such that we can use to show in our website , so give in a reliable json format do not give any notes and instructive text just only give the json file {text}"""])
    return response.text



def extract_text_from_pdf(pdf_file):
    text = ""
    with pdfplumber.open(pdf_file) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    summary = summarize_text(text)
    cleanedData= summary.replace('```json', '').replace('```', '').strip()
    data_dict = json.loads(cleanedData)
    print(data_dict)

text = extract_text_from_pdf(f"C:/Desktop/transfinite/app/server/vijay sales.pdf")
