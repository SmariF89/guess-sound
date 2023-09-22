import { StepForwardOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React from 'react';

const SkipButton: React.FC = () => (
	<Tooltip title='Skip'>
		<StepForwardOutlined style={{ fontSize: '24px' }} />
	</Tooltip>
);

export default SkipButton;
