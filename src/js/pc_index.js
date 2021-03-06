import React from 'react';
import PcHeader from './pc_header.js';
import PcFooter from './pc_footer.js';
import PcMain from './pc_main.js';
import PcMusicbox from './pc_musicbox.js';
import PcNewsDetails from './pc_news_details.js';
import PcNewsContainer from './pc_newscontainer.js';

import { Switch, Route } from 'react-router-dom';

export default class Pcindex extends React.Component{
	render(){
		return (
			<div>
			<PcHeader />
			<main>
			
			<Switch>
			<Route exact path='/' component={PcMain}/>
			<Route exact path='/musicbox' component={PcMusicbox}/>
			<Route exact path='/news' component={PcNewsContainer}/>
			<Route path='/details/:uniquekey' component={PcNewsDetails}/>
			</Switch>

			</main>
			<PcFooter />
			</div>
			);
		}
	}

