import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from '../components/Slider';

const Repair = styled.div`
	color: #ffffff;
	font-size: 40px;
	font-weight: 700;
	line-height: 50px;
	
	span {
		display: block;
		font-size: 24px;
		line-height: 30px;	
		margin-bottom: 54px;
	}
`

const LightText = styled.div`
	color: #fff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
`

const CallBtn = styled.button`
	width: 247px;
	min-height: 67px;
	background-color: #ffa14b;
	border-radius: 30px;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	margin-top: 32px;
	border: none;
`

class Main extends React.Component {
	render() {
		return (
				<Row>
					<Col lg={5}>
						<Repair>
							Качественный ремонт
							<span>iphone за 35 минут и гарантия 1 год</span>
						</Repair>
						<LightText>Оставьте заявку на бесплатную диагностику без очереди,
							и получите защитное стекло, стоимостью 1000 рублей,
							с установкой в подарок!</LightText>
						<CallBtn>Отправить заявку!</CallBtn>
					</Col>
					<Col lg={5} lgOffset={1}>
						<Slider/>
					</Col>
				</Row>
		)
	}
}

export default Main;