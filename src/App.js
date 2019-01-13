import React, {Component} from 'react';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
const bgUrl = process.env.PUBLIC_URL + '/img/background.jpg';

const HeaderWrapper = styled.header`
	width: 100%;
	min-height: 49px;
	background-color: #242424;
	opacity: 0.8;
`

const MenuWrapper = styled.div`
	min-height: 89px;
	padding-top: 20px;
`

const MainWrapper = styled.div`
	min-height: 600px;
	padding-top: 130px;
	background: url(${bgUrl}) no-repeat;
	background-size: cover;
`

class App extends Component {
	render() {
		return (
				<div className="App">
					<HeaderWrapper>
						<Grid>
							<Header/>
						</Grid>
					</HeaderWrapper>
					<MenuWrapper>
						<Grid>
							<Menu/>
						</Grid>
					</MenuWrapper>
					<MainWrapper>
						<Grid>
							<Main/>
						</Grid>
					</MainWrapper>
				</div>
		);
	}
}

export default App;
