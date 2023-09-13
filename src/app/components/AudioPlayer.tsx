'use client';

import { PlayCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useRef, useState } from 'react';

type AudioPlayerState = {
	isPlaying: boolean;
};

type AudioPlayerProps = {
	src: string;
};

const AudioPlayer = (props: AudioPlayerProps) => {
	const [audioPlayerState, setAudioPlayerState] = useState<AudioPlayerState>({ isPlaying: false });
	const audioRef = useRef<HTMLAudioElement>(null);

	const toggleAudio = async () => {
		if (audioRef.current) {
			if (audioPlayerState.isPlaying) {
				audioRef.current.pause();
				setAudioPlayerState({ isPlaying: false });
			} else {
				await audioRef.current.play();
				setAudioPlayerState({ isPlaying: true });
			}
		}
	};

	return (
		<React.Fragment>
			<audio src={props.src} ref={audioRef} />
			<Button
				icon={<PlayCircleOutlined />}
				size='large'
				onClick={() => {
					toggleAudio();
				}}
			/>
		</React.Fragment>
	);
};

export default AudioPlayer;
