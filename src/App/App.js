import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panels from '@enact/moonstone/Panels';
import React from 'react';
import VirtualGridList from '../views/VirtualGridList';

import css from './App.less';


const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<Panels noCloseButton>
				<VirtualGridList/>
			</Panels>
		</div>
	)
});

export default MoonstoneDecorator(App);
