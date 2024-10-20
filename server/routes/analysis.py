from flask import Blueprint, jsonify

# Create a blueprint for user routes
analysis_bp = Blueprint('analysis', __name__)
#start news

comparative_analysis_data = {
    "products": [
        {
            "productName": "Consumer Electronics",
            "companies": [
                {
                    "name": "Reliance",
                    "assortmentSize": "Extensive assortment with private labels",
                    "pricingStrategy": "Competitive pricing with installment options",
                    "customerSegments": ["Retail", "Corporate", "NRI"],
                    "distributionChannels": ["Store", "Online", "B2B"]
                },
                {
                    "name": "Bajaj",
                    "assortmentSize": "Focused on consumer products, lighting, and EPC",
                    "pricingStrategy": "Premium pricing for value-added products",
                    "customerSegments": ["Retail", "Corporate"],
                    "distributionChannels": ["Store", "B2B"]
                },
                {
                    "name": "Poojara Telecom",
                    "assortmentSize": "Specialized in mobile phones, accessories, and gadgets",
                    "pricingStrategy": "Moderate pricing with easy finance options",
                    "customerSegments": ["Retail"],
                    "distributionChannels": ["Store", "Online"]
                },
                {
                    "name": "Aditya Vision",
                    "assortmentSize": "Comprehensive product range across electronics and home appliances",
                    "pricingStrategy": "Competitive pricing with seasonal offers",
                    "customerSegments": ["Retail"],
                    "distributionChannels": ["Store", "Online"]
                },
                {
                    "name": "Vijay Sales",
                    "assortmentSize": "Diverse range including large appliances and in-house brand",
                    "pricingStrategy": "Aggressive pricing with discounts and vendor offers",
                    "customerSegments": ["Retail"],
                    "distributionChannels": ["Store", "Online"]
                }
            ],
            "featuresComparison": {
                "pricing": {
                    "Reliance": "Competitive pricing with installment options",
                    "Bajaj": "Premium pricing targeting quality-conscious customers",
                    "Poojara Telecom": "Moderate pricing with flexible finance options",
                    "Aditya Vision": "Competitive with seasonal discount schemes",
                    "Vijay Sales": "Aggressive pricing with frequent vendor discounts"
                },
                "assortmentSize": {
                    "Reliance": "Extensive assortment including private labels",
                    "Bajaj": "Focused on specific categories like lighting and EPC",
                    "Poojara Telecom": "Niche focus on mobile and gadgets",
                    "Aditya Vision": "Wide range of electronics and home appliances",
                    "Vijay Sales": "Comprehensive assortment including in-house brand"
                },
                "customerSegments": {
                    "Reliance": ["Retail", "Corporate", "NRI"],
                    "Bajaj": ["Retail", "Corporate"],
                    "Poojara Telecom": ["Retail"],
                    "Aditya Vision": ["Retail"],
                    "Vijay Sales": ["Retail"]
                }
            }
        }
    ],
    "financialComparison": {
        "companies": [
            {
                "name": "Reliance",
                "revenue": "₹9,74,864 crore",
                "netProfit": "₹73,670 crore",
                "EBITDA": "₹2,00,000 crore",
                "debtEquityRatio": "0.9:1",
                "interestCoverageRatio": "6.0"
            },
            {
                "name": "Bajaj",
                "revenue": "₹5,429 crore",
                "netProfit": "₹216 crore",
                "EBITDA": "₹650 crore",
                "debtEquityRatio": "1.2:1",
                "interestCoverageRatio": "4.5"
            },
            {
                "name": "Poojara Telecom",
                "revenue": "₹633 crore",
                "netProfit": "₹7.27 crore",
                "EBITDA": "₹14.27 crore",
                "debtEquityRatio": "2.01:1",
                "interestCoverageRatio": "5.65"
            },
            {
                "name": "Aditya Vision",
                "revenue": "₹430 crore",
                "netProfit": "₹15 crore",
                "EBITDA": "₹25 crore",
                "debtEquityRatio": "0.8:1",
                "interestCoverageRatio": "3.5"
            },
            {
                "name": "Vijay Sales",
                "revenue": "₹5577 crore",
                "netProfit": "₹174.85 crore",
                "EBITDA": "₹302 crore",
                "debtEquityRatio": "1.5:1",
                "interestCoverageRatio": "4.0"
            }
        ]
    }
}

@analysis_bp.route('/api/analysis', methods=['GET'])
def get_comparative_analysis():
    return jsonify(comparative_analysis_data)

