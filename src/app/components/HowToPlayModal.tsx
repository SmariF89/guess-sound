'use client';

import React from 'react';
import { Button, Modal } from 'antd';

type InfoModalProps = {
	open: boolean;
	hideFn: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
};

export default function HowToPlayModal(props: InfoModalProps) {
	return (
		<Modal
			title='How to play'
			open={props.open}
			onOk={props.hideFn}
			onCancel={props.hideFn}
			centered
			footer={<Button onClick={props.hideFn}>Back to guessing</Button>}
			closeIcon={false}
		>
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium venenatis nunc.
					Suspendisse ultrices nulla vitae elit mattis mattis. Donec eget cursus tellus. Maecenas nunc tellus,
					gravida ac diam eget, iaculis efficitur sem. Integer vitae justo vitae est blandit ultricies ac eget
					augue. Aenean et nibh dictum, feugiat purus sit amet, aliquam justo. Proin magna lacus, faucibus et
					lobortis non, tempor sed mauris. Integer id pellentesque enim, vitae luctus eros. Maecenas eget leo
					non ligula sollicitudin condimentum.
				</p>
			</div>
		</Modal>
	);
}
