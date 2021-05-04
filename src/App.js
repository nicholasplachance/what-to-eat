import React, { useState, useEffect } from 'react';
import axios from 'axios';

// CSS
import './App.css';

// Components imports
import ScoreSection from './components/scoreSection/scoreSection';
import AnswerSection from './components/answerSection/answerSection';
import QuestionSection from './components/questionSection/questionSection';
export default function App() {
	const questions = [
		{
			questionText: 'What type of meal are you feeling?',
			answerOptions: [
				{ answerText: 'Breakfast' },
				{ answerText: 'Lunchtime' },
				{ answerText: 'din-din' },
				{ answerText: 'snacky snack' }
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
	const [showChoseNumber, setShowChoseNumber] = useState(true);
	const [choseNumber, setChoseNumber] = useState(0);
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

	const reset = () => {
		setShowChoseNumber(!showChoseNumber);
		setShowScore(!showScore);
		setCurrentQuestion(0);
		setChosenAnswers([]);
		setChoseNumber(0);
	};

	const handleNumberButtonClick = (num) => {
		setShowChoseNumber(!showChoseNumber);
		setChoseNumber(num);
	};

	return (
		<div>
			<h1 className='title'>Hungry Boyss</h1>
			<div className='app'>
				{showChoseNumber ? (
					<div>
						<h2>How many people are eating?</h2>
						<button onClick={() => handleNumberButtonClick(1)}>1</button>
						<button onClick={() => handleNumberButtonClick(2)}>2</button>
					</div>
				) : showScore ? (
					<div>
						<ScoreSection chosenAnswer={chosenAnswer} />
						<button onClick={() => reset()}>Reset</button>
					</div>
				) : (
					<>
						<QuestionSection
							questions={questions}
							currentQuestion={currentQuestion}
							currentQuestion={currentQuestion}
							choseNumber={choseNumber}
						/>
						<AnswerSection
							questions={questions}
							currentQuestion={currentQuestion}
							handleAnswerButtonClick={handleAnswerButtonClick}
						/>
					</>
				)}
			</div>
		</div>
	);
}
