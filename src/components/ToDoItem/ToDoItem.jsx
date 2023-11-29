import { Button } from '../Button/Button'
import styles from './ToDoItem.module.css'

export function ToDoItem({ id, name, done, onDeleteButtonClick, onDoneButtonClick }) {
	return (
		<li className={styles.li}>
			<span className={`${styles.span} ${done ? styles.done : ''}`} id={id}>
				{name}
			</span>
			{!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
			<Button onClick={onDeleteButtonClick}>Usuń</Button>
		</li>
	)
}
