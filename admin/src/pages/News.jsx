import { useState, useEffect } from "react";
import axios from "axios";
import { NavBar } from "../navbar/NavBar";
import { motion } from 'framer-motion';

export function News() {
  const [newsData, setNewsData] = useState({ headlines_list: [] }); // Ensure the initial state has a structure
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/news");
        setNewsData(response.data);  // Assuming response.data contains news articles
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch news");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    // Update headlines when newsData changes
    if (newsData.headlines_list) {
      setHeadlines(newsData.headlines_list);
    }
  }, [newsData]); // Depend on newsData to trigger this effect when it changes

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  return (
    <div>
      <NavBar />
<NewsComponent headlines={headlines}></NewsComponent>

    </div>
  );
}


const NewsComponent = ({ headlines }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Latest News</h1>
      <ul className="space-y-6">
        {headlines.length > 0 ? (
          headlines.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }} // Start off-screen
              animate={{ opacity: 1, y: 0 }}   // Animate to on-screen
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
              className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">{item.title}</h2>
              <p className="text-gray-700 mt-2">{item.content}</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline mt-4 inline-block transition-colors duration-200 hover:text-blue-700"
              >
                Read more
              </a>
            </motion.li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No headlines available.</li>
        )}
      </ul>
    </div>
  );
};


