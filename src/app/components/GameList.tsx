'use client';

import React, { useState } from 'react';
import { styled } from 'styled-components';
import useGameContext from '../context/GameContext';
import { Game } from '../types';
import { Button, Menu, MenuProps, Modal } from 'antd';
import {
	InfoCircleOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	OrderedListOutlined,
	QuestionOutlined,
	RightOutlined,
} from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import AboutModal from './AboutModal';

const GameListContainer = styled.div`
	position: absolute;
	margin: 15px 0px 0px 15px;
`;

const gameList: Game[] = Array.from(Array(20).keys()).map<Game>((n: number) => {
	return { num: n + 1 };
});

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group',
): MenuItem => {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
};

const menuItems: MenuItem[] = [
	getItem('About', 'about', <InfoCircleOutlined />),
	getItem('How to play', 'how-to-play', <QuestionOutlined />),
	getItem('Catalog', 'catalog', <OrderedListOutlined />, [
		...gameList.map((game) => {
			return getItem(`Game #${game.num}`, game.num, <RightOutlined />);
		}),
	]),
];

export default function GameList() {
	const [menuCollapsed, setMenuCollapsed] = useState(false);
	const [aboutModalToggled, setAboutModalToggled] = useState(false);
	const [gameState, setGameState] = useGameContext();

	const onMenuClick = (e: MenuInfo) => {
		switch (e.key) {
			case 'how-to-play':
				// setAboutModalToggled(!modalToggled);
				break;
			case 'about':
				setAboutModalToggled(true);
				break;
			default:
				const key: number | typeof NaN = Number(e.key);
				if (!isNaN(key)) {
					setGameState({ type: 'SELECT_GAME', payload: key });
				}
		}
	};

	return (
		<GameListContainer>
			<AboutModal
				open={aboutModalToggled}
				hideFn={() => {
					setAboutModalToggled(false);
				}}
			/>
			<Button
				type='primary'
				onClick={() => {
					setMenuCollapsed(!menuCollapsed);
				}}
				style={{ marginBottom: 16 }}
			>
				{menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button>
			<Menu
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode='inline'
				theme='dark'
				inlineCollapsed={menuCollapsed}
				items={menuItems}
				onClick={onMenuClick}
				selectedKeys={[gameState.currentGame.toString()]}
			/>
		</GameListContainer>
	);
}
