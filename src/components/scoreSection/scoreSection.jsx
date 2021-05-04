import { useState } from 'react';

const ScoreSection = (props) => {
	return (
		<div className='score-section'>
			{props.chosenAnswer.map((answer, index) => (
				<p key={index}>{answer}</p>
			))}
		</div>
	);
};

export default ScoreSection;
