import { useState } from 'react';

const AnswerSection = (props) => {
	return (
		<div className='answer-section'>
			{props.questions[props.currentQuestion].answerOptions.map((answerOption, index) => (
				<button key={index} onClick={() => props.handleAnswerButtonClick(answerOption.answerText)}>
					{answerOption.answerText}
				</button>
			))}
		</div>
	);
};

export default AnswerSection;
