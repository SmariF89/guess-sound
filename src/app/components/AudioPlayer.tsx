'use client';

import React, { useEffect, useRef, useState } from 'react';

import { PlayCircleTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';

const AudioPlayerContainer = styled.div`
	display: flex;
	width: 30%;

	button {
		align-self: center;
		margin-right: 15px;
	}
`;
const AudioPlayerWrapper = styled.div`
	width: 100%;
`;

type AudioPlayerState = {
	isPlaying: boolean;
};

const initialState: AudioPlayerState = {
	isPlaying: false,
};

type AudioPlayerProps = {
	src: string;
};

const AudioPlayer = (props: AudioPlayerProps) => {
	const [audioPlayerState, setAudioPlayerState] = useState<AudioPlayerState>(initialState);
	const containerRef = useRef<HTMLDivElement>(null);
	const waveSurferRef = useRef<WaveSurfer | null>(null);

	useEffect(() => {
		if (containerRef.current && !waveSurferRef.current) {
			// Create WaveSurfer player instance.
			waveSurferRef.current = WaveSurfer.create({
				height: 100,
				waveColor: 'rgb(250, 17, 0)',
				progressColor: 'rgb(0, 250, 62)',
				url: props.src,
				container: containerRef.current,
				barWidth: 2,
				barGap: 1,
				barRadius: 2,
				autoplay: false,
				interact: false,
			});

			// Subscribe to WaveSurfer events.
			waveSurferRef.current.on<'play'>('play', () => {
				setAudioPlayerState({ ...audioPlayerState, isPlaying: true });
			});
			waveSurferRef.current.on<'finish'>('finish', () => {
				waveSurferRef.current?.seekTo(0);
				setAudioPlayerState({ ...audioPlayerState, isPlaying: false });
			});
		}
	}, [containerRef.current]);

	const playAudio = async () => {
		if (waveSurferRef.current && !audioPlayerState.isPlaying) {
			await waveSurferRef.current.play();
		}
	};

	return (
		<AudioPlayerContainer>
			<Button
				icon={audioPlayerState.isPlaying ? <PlayCircleTwoTone twoToneColor='#fa1100' /> : <PlayCircleTwoTone />}
				size='large'
				onClick={() => {
					playAudio();
				}}
			/>
			<AudioPlayerWrapper ref={containerRef} />
		</AudioPlayerContainer>
	);
};

export default AudioPlayer;
