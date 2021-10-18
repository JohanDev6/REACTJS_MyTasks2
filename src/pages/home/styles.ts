import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	height: 100vh;

	padding: 20px;

	.content{
		color: ${props => props.theme.text};
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.info-text{
		margin: 5px 0px;
		font-size: 0.9rem;
	}

	h1{
		font-weigth: 800;
		text-transform: uppercase;
		font-size: 1.4rem;
	}
`

export const TodoList = styled.ul`
	width: 100%;
	height: 90%;

	list-style: none;
	overflow-y: auto;
	border-radius: 4px;

	li{
		width: 100%;
		height: 55px;
		border: 1px solid white;
		border-radius: 6px;
	}

	li + li{
		margin-top: 11px;
	}

	::-webkit-scrollbar-thumb{
		background: ${props => props.theme.main};
	}

	::-webkit-scrollbar{
		height: 4px;
		width: 4px;
	}

	::-webkit-scrollbar-track{
		background: transparent;
	}
`

export const InputWrapper = styled.div`
	width: 100%;
	min-height: 50px;

	margin: 9px 0px;

	border: 1px solid ${props => props.theme.main};
	border-radius: 8px;

	justify-content: space-between !important;

	.icon{
		min-width: 50px;
		height: 100%;

		border-radius: 0px 8px 8px 0px;

		background: ${props => props.theme.footer};
	}

	input{
		height: 100%;
		width: 100%;
		padding-left: 5px;

		background: transparent;
	}
`
