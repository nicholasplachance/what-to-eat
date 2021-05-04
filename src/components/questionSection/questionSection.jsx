import { useState } from 'react';

const QuestionSection = (props) => {
	return (
		<div className='question-section'>
			<div className='question-count'>
				<span>Question {props.currentQuestion + 1}</span>/{props.questions.length}
				<p style={{ textAlign: 'center', fontWeight: 'bolder' }}>
					Number of people eating: {props.choseNumber}
				</p>
			</div>
			<div className='question-text'>{props.questions[props.currentQuestion].questionText}</div>
		</div>
	);
};

export default QuestionSection;
