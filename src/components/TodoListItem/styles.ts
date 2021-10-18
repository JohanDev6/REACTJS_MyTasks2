import styled from 'styled-components'

export const Container = styled.button<{color: string; completed: boolean}>`
	width: 100%;
	height: 100%;
	border-radius: 6px;

	justify-content: space-between !important;
	padding: 0px 5px;

	background: ${props => props.color};
	transition: 0.4s ease;

	border-left: 6px solid ${props => props.completed? props.theme.main : 'none'};

	.icons{
		height: 100%;
		justify-content: space-around;

		svg{
			margin: 0px 3px;
			cursor: pointer;
		}
	}
`
