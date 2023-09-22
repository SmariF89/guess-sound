import { Space, AutoComplete, Button, Empty, message } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import SkipButton from './SkipButton';

const GuessInputInnerContainer = styled.div`
	width: 30%;
	margin-top: 24px;
`;

const GuessInput: React.FC = () => {
	const [inputText, setInputText] = useState<string>('');
	const [messageApi, contextHolder] = message.useMessage();

	const fakeOptions: { value: string }[] = [
		{ value: 'Half-Life' },
		{ value: 'Grand Theft Auto 3' },
		{ value: 'Freedom Fighters' },
		{ value: 'Crysis' },
		{ value: 'The Sims' },
		{ value: 'Mafia' },
		{ value: 'Bioshock' },
		{ value: 'Tomb Raider' },
	].toSorted((objA, objB) => {
		return objA.value > objB.value ? 1 : 0;
	});

	const submitGuess = () => {
		if (!fakeOptions.some((opt) => opt.value === inputText)) {
			inputError();
			return;
		}
		console.log(`Submitted ${inputText}.`);
		setInputText('');
	};

	const inputError = () => {
		messageApi.open({
			type: 'error',
			content: 'Game not found in database',
			style: { textAlign: 'right' },
		});
	};

	return (
		<GuessInputInnerContainer>
			{contextHolder}
			<Space.Compact style={{ width: '100%' }}>
				<AutoComplete
					style={{ width: '100%' }}
					options={fakeOptions}
					filterOption
					value={inputText}
					onChange={(txt) => setInputText(txt)}
					onSelect={(txt) => setInputText(txt)}
					size='large'
					placeholder='Type your guess...'
					suffixIcon={<SkipButton />}
					notFoundContent={<Empty description={<span>No match found</span>} />}
				/>
				<Button onClick={submitGuess} size='large' type='primary' ghost>
					Guess
				</Button>
			</Space.Compact>
		</GuessInputInnerContainer>
	);
};

export default GuessInput;
