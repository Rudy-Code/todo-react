import { useState } from 'react'
import styles from './App.module.css'
import { Form } from './components/Form/Form'
import { ToDoItem } from './components/toDoItem/toDoItem'
import { getSubHeading } from './utils/getSubheading.js'

function App() {
	const [tasks, setTasks] = useState([
		{ name: 'Zadanie 1', done: false, id: 1 },
		{ name: 'Zadanie 2', done: false, id: 2 },
		{ name: 'Zadanie 3', done: true, id: 3 },
	])
	const [isFormShown, setIsFormShown] = useState(false)

	function addItem(newNameTask) {
		setTasks(prevTasks => [...prevTasks, { name: newNameTask, done: false, id: Math.random() }])
		setIsFormShown(false)
	}

	function deleteItem(id) {
		setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
	}

	function doneItem(id) {
		setTasks(prevTasks => prevTasks.map(task => (task.id === id ? { ...task, done: true } : task)))
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>Do zrobienia</h1>
					<h2>{getSubHeading(tasks.length)}</h2>
				</div>
				{!isFormShown && (
					<button
						className={styles.button}
						onClick={() => {
							setIsFormShown(true)
						}}>
						+
					</button>
				)}
			</header>
			{isFormShown && <Form onFormSumbit={newNameTask => addItem(newNameTask)} />}
			<ul>
				{tasks.map(({ id, name, done }) => {
					return (
						<ToDoItem
							key={id}
							name={name}
							done={done}
							onDeleteButtonClick={() => deleteItem(id)}
							onDoneButtonClick={() => doneItem(id)}
						/>
					)
				})}
			</ul>
		</div>
	)
}

export default App
