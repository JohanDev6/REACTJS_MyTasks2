import React, { ReactElement, useState, useEffect, useRef } from 'react'
import { BiMessageSquareAdd } from "react-icons/bi";

import { Container, InputWrapper, TodoList } from './styles'

import TodoListItem from '../../components/TodoListItem'

export default function HomePage() : ReactElement {

	const [taskList, setTaskList] = useState<any[]>([])
	const inputRef = useRef<HTMLInputElement>(null)

	const getColorRandom = () => {
		let min = 0;
		let max = 14;

		return Math.floor(Math.random() * (max - min)) + min;
	}

	const handleAddTask = () => {
		let valueTask = inputRef.current?.value;

		setTaskList((prev : any) => [...prev, {
			id: taskList.length + 1,
			value: valueTask,
			completed: false,
			timestamp: new Date().getTime(),
			color: getColorRandom(),
		}])
	}

	const handleChangeTask = (id : number) => {
		let valueTask = inputRef.current?.value;
		let newTaskList = [...taskList];
		let updateTask = taskList.find(x => x.id === id);

		newTaskList[updateTask.id - 1] = {...newTaskList[updateTask.id - 1], value : valueTask};
		setTaskList(newTaskList)
	}

	const handleDeleteTask = (id : number) => {
		setTaskList((prev : any) => prev.filter((item : any) => item.id !== id))
	}

	const handleCompleteTask = (id : number) => {
		let newTaskList = [...taskList];
		let updateTask = taskList.find(x => x.id === id);

		newTaskList[updateTask.id - 1] = {...newTaskList[updateTask.id - 1], completed : !newTaskList[updateTask.id - 1].completed};
		setTaskList(newTaskList)
	}

	return (
		<Container>
		  <div className='content display-flex'>
				<h1>My Tasks 2</h1>
				<InputWrapper className='display-flex'>
					<input ref={inputRef} type='text'/>
					<div onClick={handleAddTask} title='Add task in list' className='icon display-flex'>
						<BiMessageSquareAdd/>
					</div>
				</InputWrapper>
				<p className='info-text'><span style={{color:'#4ef58b'}}>Double Click</span> Mark completed</p>
				<TodoList>
					{taskList.map((task: any, index: number) => (
						<li><TodoListItem key={index} completeClick={handleCompleteTask} completed={task.completed} editClick={handleChangeTask} deleteClick={handleDeleteTask} listId={task.id} value={task.value} color={task.color}/></li>
					))}
				</TodoList>
			</div>
		</Container>
	)
}
