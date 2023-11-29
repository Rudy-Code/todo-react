import { useState } from 'react'
import { Button } from '../Button/Button'
import styles from './Form.module.css'

export function Form({ onFormSumbit }) {
	const [inputValue, setInputValue] = useState('')

	return (
		<form
			className={styles.form}
			onSubmit={e => {
				e.preventDefault()
				onFormSumbit(inputValue)
			}}>
			<input
				type="text"
				value={inputValue}
				onChange={e => {
					setInputValue(e.target.value)
				}}
				className={styles.input}
			/>
			<Button>Dodaj</Button>
		</form>
	)
}
