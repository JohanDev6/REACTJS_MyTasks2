import React, { ReactElement } from 'react'
import { BiTrashAlt, BiEdit } from "react-icons/bi";

import { Container } from './styles'

const colors = [
	"linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
	"linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
	"linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
	"linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
	"linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
	"linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
	"linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
	"linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
	"linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
	"linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
	"linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
	"linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
	"linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
	"linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
	"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
]

export interface ITodoListItem {
	onClick? : () => void;
	value: string;
	listId: number;
	color: number;
	completed: boolean;

	editClick: (id: number) => void;
	deleteClick: (id: number) => void;
	completeClick: (id: number) => void;
}

export default function TodoListItem({value, listId, color, editClick, deleteClick, completeClick, completed, ...buttonProps} : ITodoListItem) : ReactElement {
	return (
		<Container onDoubleClick={() => {completeClick(listId)}} completed={completed} color={colors[color]} data-listid={listId} className='display-flex' {...buttonProps}>
			<span>{value}</span>
			<div className='icons display-flex'>
				<BiEdit onClick={() => {editClick(listId)}}/>
				<BiTrashAlt onClick={() => {deleteClick(listId)}} className='trash'/>
			</div>
		</Container>
	)
}
