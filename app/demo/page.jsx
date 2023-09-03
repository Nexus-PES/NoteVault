"use client";
// import React, { useState } from 'react';
// import { SentimentAnalyzer, PorterStemmer } from 'natural';

// export default function SentimentPage() {
//   const [inputText, setInputText] = useState('');
//   const [sentimentResult, setSentimentResult] = useState(null);

//   const predictSentiment = () => {
//     const tokenizer = new natural.WordTokenizer();
//     const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
//     const result = analyzer.getSentiment(tokenizer.tokenize(inputText));
//     setSentimentResult(result);
//   };

//   return (
//     <div>
//       <h1>Sentiment Predictor</h1>
//       <textarea
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         rows={4}
//         cols={50}
//         placeholder="Enter text for sentiment prediction"
//       />
//       <button onClick={predictSentiment}>Predict Sentiment</button>
//       {sentimentResult !== null && (
//         <div>
//           <p>Score: {sentimentResult.score}</p>
//           <p>Vote: {sentimentResult.vote}</p>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
export default function MarkdownToHtml() {
	const [input, setInput] = useState("");

	return (
		<div className="bg-dark-100 flex ">
			<textarea
				autoFocus
				onChange={(e) => setInput(e.target.value)}
				className="h-screen w-[50vh]"
				value={input}
			/>
			<div className="prose prose-custom selection:bg-secondary-600/80">
				<ReactMarkdown>{input}</ReactMarkdown>
			</div>
		</div>
	);
}


// import React from 'react'

// const DemoPage = () => {
//   return (
// 	<div>DemoPage</div>
//   )
// }

// export default DemoPage