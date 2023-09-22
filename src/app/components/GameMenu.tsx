'use client';

import React, { useState } from 'react';
import { styled } from 'styled-components';
import useGameContext from '../context/GameContext';
import { Button, Menu, MenuProps } from 'antd';
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
import HowToPlayModal from './HowToPlayModal';

const GameMenuContainer = styled.div`
	position: absolute;
	margin: 15px 0px 0px 15px;
`;

const fakeNumCatalog: number[] = Array.from(Array(20).keys()).map<number>((n: number) => {
	return n + 1;
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
		...fakeNumCatalog.map((gameNum) => {
			return getItem(`Game #${gameNum}`, gameNum, <RightOutlined />);
		}),
	]),
];

type ModalVisibilityState = {
	about: boolean;
	howToPlay: boolean;
};

export default function GameMenu() {
	const [gameState, setGameState] = useGameContext();
	const [menuCollapsed, setMenuCollapsed] = useState(false);
	const [modalVisibility, setModalVisibility] = useState<ModalVisibilityState>({
		about: false,
		howToPlay: false,
	});

	const toggleModal = (modal: keyof ModalVisibilityState, toggle: boolean) => {
		if (modalVisibility.about || modalVisibility.howToPlay) {
			setModalVisibility({
				about: false,
				howToPlay: false,
			});
		}
		setModalVisibility({
			about: modal === 'about' && toggle,
			howToPlay: modal === 'howToPlay' && toggle,
		});
	};

	const onMenuClick = (e: MenuInfo) => {
		switch (e.key) {
			case 'how-to-play':
				toggleModal('howToPlay', true);
				break;
			case 'about':
				toggleModal('about', true);
				break;
			default:
				const key: number | typeof NaN = Number(e.key);
				if (!isNaN(key)) {
					setGameState({ type: 'SELECT_GAME', payload: key });
				}
		}
	};

	return (
		<GameMenuContainer>
			<AboutModal
				open={modalVisibility.about}
				hideFn={() => {
					toggleModal('about', false);
				}}
			/>
			<HowToPlayModal
				open={modalVisibility.howToPlay}
				hideFn={() => {
					toggleModal('howToPlay', false);
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
		</GameMenuContainer>
	);
}
