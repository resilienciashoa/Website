export function load() {
	const subjects = [];
	subjects.push({
		iconName: 'feather',
		color: '#37b24d',
		title: 'TLRIID',
		description:
			'Investigación sobre los principales autores y obras acerca del Holocausto, ademas de un análisis de los géneros literarios y las motivaciones al escribir. <br> Tambien un pequeño estudio sobre el debate acerca de la ficcion historica en el Holocausto y reseñas sobre los libros leídos en clase.'
	});
	subjects.push({
		iconName: 'hash',
		color: '#1c7ed6',
		title: 'Matemáticas',
		description:
			'Investigación sobre los principales autores y obras acerca del holocausto, ademas de un análisis sobre los géneros literarios y las motivaciones al escribir. <br> Tambien un pequeño estudio sobre el debate acerca de la ficcion historica en el holocausto y reseñas sobre los libros leídos en clase.'
	});
	subjects.push({
		iconName: 'book',
		color: '#f59f00',
		title: 'Historia',
		description:
			'Investigación sobre los principales autores y obras acerca del holocausto, ademas de un análisis sobre los géneros literarios y las motivaciones al escribir. <br> Tambien un pequeño estudio sobre el debate acerca de la ficcion historica en el holocausto y reseñas sobre los libros leídos en clase.'
	});
	subjects
		.filter((subject, index) => index % 2 === 0)
		.forEach((subject) => {
			subject.backgroundColor = '#f2f2f2';
		});

	return { subjects };
}
