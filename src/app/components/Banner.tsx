'use client';

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
	display: flex;
	justify-content: space-between;

	border-bottom: solid;
	flex-grow: 2;

	a {
		margin: 12px;
	}
`;

const BannerTitle = styled.h1`
	font-weight: bold;
	font-size: 52px;
	align-self: center;
`;

export default function Banner() {
	return (
		<BannerContainer>
			<Link href={''}>About</Link>
			<BannerTitle>
				<i>Guess the sound</i>
			</BannerTitle>
			<Link href={''}>How to play</Link>
		</BannerContainer>
	);
}
