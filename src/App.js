import React, { useState } from 'react';
import './App.css';

export default function App() {
	const questions = [
		{
			questionText: 'What type of meal are you feeling?',
			answerOptions: [
				{ answerText: 'Breakkyy' },
				{ answerText: 'Lunch Time, yo' },
				{ answerText: 'Din-din' },
				{ answerText: 'Snacky' }
			]
		},
		{
			questionText: 'How would you like to meal prepared?',
			answerOptions: [
				{ answerText: 'Cook at home' },
				{ answerText: 'Fast food' },
				{ answerText: 'Order from restaurant' },
				{ answerText: 'Go shop at grocery store' }
			]
		},
		{
			questionText: 'What type of flavors family?',
			answerOptions: [
				{ answerText: 'Savory, gimme something tasty' },
				{ answerText: 'Something spiccy' },
				{ answerText: 'Sweet, like pancakes, not dessert' },
				{ answerText: 'Not sure, just hungrryy' }
			]
		},
		{
			questionText: 'Hunger level? This is VERY important and will determine your meal size',
			answerOptions: [
				{ answerText: '1 - I can eat' },
				{ answerText: '2 - Getting snacky' },
				{ answerText: '3 - Better get me some food.' },
				{ answerText: '4 - Rocky level hunger. Hurry' }
			]
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [chosenAnswer, setChosenAnswers] = useState([]);

	const handleAnswerButtonClick = (answerText) => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		setChosenAnswers([...chosenAnswer, answerText]);
		console.log(answerText);
	};

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					{chosenAnswer.map((answer) => (
						<p>{answer}</p>
					))}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button key={index} onClick={() => handleAnswerButtonClick(answerOption.answerText)}>
								{answerOption.answerText}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
