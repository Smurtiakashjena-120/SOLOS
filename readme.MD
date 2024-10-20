# Gen AI Powered Competitive Intelligence for Electronics Retailers in India

## Problem Overview
The electronics retail industry in India is highly competitive, with businesses constantly striving to gain an edge. Our solution provides a competitive advantage by collecting and analyzing publicly available data from major retailers such as Reliance Digital, Vijay Sales, Aditya Vision, and others. The goal is to offer actionable insights that help companies make strategic decisions by understanding their competitors' business models, product offerings, customer segments, and more.

## Our Approach
We focus on gathering a comprehensive dataset and leveraging AI to extract meaningful insights. The approach is divided into two parts:

### 1. Data Collection:
- **Publicly Available Sources**: We gather data from annual reports, financial statements, websites, and trusted review platforms.
- **Web Scraping**: We utilize scrapers to monitor real-time financial news, stock prices (via Google Finance), and other key metrics.
- **Google Gemini API**: Used to extract key information from large documents and reports.
- **Customer Reviews**: Collected from trusted websites to evaluate customer feedback and sentiment.

### 2. Data Processing:
- **Generative AI**: Employed to create detailed comparative analysis across competitors using the gathered data, offering insights on financial growth, customer sentiment, and business strategies.

## Key Data Points We Analyze
Our solution touches on several key aspects, extracted from publicly available sources:

1. **Channels**:
   - Store presence (physical, online, and B2B).
   - Geographical expansion and store formats.
2. **Product Portfolio**:
   - Categories offered, private labels, assortment size.
3. **Customer Segments**:
   - Understanding the target demographics served by the competitors.
4. **Marketing Strategies**:
   - Media presence and advertising campaigns.
5. **Affordability Offerings**:
   - Financing plans, exchange offers, and other affordability schemes.
6. **After Sales Services**:
   - Customer support and product disposal/recycling programs.

## Competitive Intelligence Parameters
We also analyze several other critical aspects to give a comprehensive view of each competitor's operations:

1. **Supply Chain**:
   - Delivery networks, supplier relationships, and logistics performance.
2. **Use of Technology**:
   - Digital innovations and advancements in store or online experiences.
3. **Geographical Presence**:
   - Number of stores, new store additions, and rental vs. owned stores, collected from company reports and news sources.
4. **Performance Trends**:
   - Financial trends and unit economics (sales per square foot, break-even, working capital), extracted from publicly available financial data.

## AI-Powered Comparative Analysis
Our system uses **Generative AI** to:
- Compare **financial growth**, store unit economics, and customer reviews across retailers.
- Highlight major **strategic initiatives**, such as investments, partnerships, and acquisitions.
- Analyze **customer sentiment** using publicly available reviews from trusted sources.
- Track real-time **stock prices** through the trusted **Google Finance** platform.

## Technology Stack
- **Backend**: Flask for API requests, routing, and data processing.
- **Frontend**: React.js with Tailwind CSS for an intuitive and responsive user interface.
- **Data Visualization**: React Chart.js to visualize trends and comparisons between competitors.
- **APIs**: Google Gemini for document insights, custom web scrapers for real-time data collection, and Axios for frontend-backend communication.

## User Interface Features
The user interface provides an easy-to-use dashboard with the following features:
- **Comparative Analytics**: A dashboard showing the financial performance, store growth, and customer sentiment across competitors.
- **Real-time Stock Prices**: Stock data is continuously updated via **Google Finance**.
- **News Section**: Provides relevant industry news and updates to keep users informed.
- **Ratings and Reviews**: Displays customer reviews collected from trusted websites.

## Future Plans
- **Improving Data Sources**: We plan to enhance our system by sourcing more reliable customer reviews from multiple platforms.
- **Tracking Growth Metrics**: We aim to track financial growth data and store additions on a half-yearly basis to offer more real-time insights.
- **AI Model Enhancement**: We are working to further refine our AI model for deeper predictive insights and automated recommendations.