import React, { useEffect, useState } from "react";
import {Segment, Card, Grid, Divider, Button} from 'semantic-ui-react';

const NewsHeadline = () => {
	const [news, setNews] = useState([]);
	useEffect(() => {
		// Fetch news data from NewsAPI
		const fetchNews = async () => {
			try {
				const response = await fetch(
					"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6473f79887f344108f17a5c2b2657839"
				);
				const data = await response.json();
				setNews(data.articles);
			} catch (error) {
				console.error("Failed to fetch news:", error);
			}
		};
		fetchNews();
	}, []);

	return (
		<div>
			{news.length > 0 ? (
				
                news.slice(0, 7).map((article) => (
                        <Grid.Column key={article.url} style={{ marginBottom: 20 }}>
                            <Grid.Row>
                                <h5>{article.title}</h5>
                                <div className="btn-read-news">
                                    <a href={article.url} target="_blank" rel="noreferrer">
                                        <Button type="submit" color="teal" content="Read More" size="mini" />
                                    </a>
                                </div>
                                <Divider />
                            </Grid.Row>
                        </Grid.Column>
                ))
                
                // <ul>
				// 	{news.map((article) => (
				// 		<li key={article.url} className="news-list">
				// 			<h5>{article.title}</h5>
				// 			{/* <p>{article.description}</p>
				// 			<a href={article.url} target="_blank" rel="noopener noreferrer">
				// 				Read More
				// 			</a> */}
				// 		</li>
				// 	))}
				// </ul>
			) : (
				<p>Loading news...</p>
			)}
		</div>
	);
};

export default NewsHeadline;