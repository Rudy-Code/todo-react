export function getSubHeading(numberOfTasks) {
	if (numberOfTasks === 1) return '1 zadanie'
	if (numberOfTasks > 1 && numberOfTasks < 5) return `${numberOfTasks} zadania`
	if (numberOfTasks > 4) return `${numberOfTasks} zadań`
	return 'Brak zadań'
}
