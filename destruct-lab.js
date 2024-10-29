const addEdition = (
	title,
	{
		trainer = 'TBD',
		startDate = new Date(),
		duration = 5,
		city = 'TBD',
	} = (overig = {})
) => {
	console.log(title, trainer, startDate, duration, city);
};

addEdition('Course 1', {
	trainer: 'John',
	startDate: new Date(2019, 4, 1),
	duration: 3,
	city: 'New York',
});
addEdition('Course 2', {
	startDate: new Date(2019, 4, 1),
});
addEdition('Course 3');
