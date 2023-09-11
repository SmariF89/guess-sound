import React from 'react';
import { Button, Modal } from 'antd';

type InfoModalProps = {
	open: boolean;
	hideFn: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
};

export default function AboutModal(props: InfoModalProps) {
	return (
		<Modal
			title='About'
			open={props.open}
			onOk={props.hideFn}
			onCancel={props.hideFn}
			centered
			footer={<Button onClick={props.hideFn}>Back to guessing</Button>}
			closeIcon={false}
		>
			<div>
				<p>
					This game is a fan recreation of the similarly named{' '}
					<a href='https://guessthe.game/'>GuessThe.Game</a> but with a twist. Rather than guessing using
					images as hints, the player - you guessed it - listens to audio.
				</p>
			</div>
		</Modal>
	);
}
