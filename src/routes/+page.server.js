export function load() {
	const subjects = [];
	subjects.push({
		iconName: 'feather',
		color: '#37b24d',
		title: 'Lectura y Redacción',
		description:
			'Investigación sobre los principales autores y obras acerca del Holocausto, ademas de un análisis de los géneros literarios y las motivaciones al escribir. <br> Tambien un pequeño estudio sobre el debate acerca de la ficción histórica en el Holocausto y reseñas sobre los libros leídos en clase.',
		link: 'TLRIID'
	});
	subjects.push({
		iconName: 'hash',
		color: '#1c7ed6',
		title: 'Matemáticas',
		description:
			'Investigación y graficación de varios datos relacionados con el tema del holocausto. <br> Tambien un analisis sobre las dimensiones de algunos escondites durante el holocausto con un enfoque en un arbol particular.'
	});
	subjects.push({
		iconName: 'book',
		color: '#f59f00',
		title: 'Historia',
		description:
			'Composición de “miniobra de teatro” que recrean una entrevista en la cual tres sobrevivientes de los campos de concentración platican sus experiencias, junto con un video introductorio sobre el tema del proyecto. <br> Además de una serie de cartulinas que abarcan el marco teórico del Holocausto.'
	});
	subjects.push({
		iconName: 'compass',
		color: '#0ca678',
		title: 'Inglés',
		description:
			'Coordinación general de todas las etapas del proyecto, escenificación de la presentación general y distribución del pequeño museo. <br> También documentación completa del proyecto incluyendo un sitio web con descripciones e imágenes.'
	});
	subjects.push({
		iconName: 'filter',
		color: '#ae3ec9',
		title: 'Química',
		description:
			'Investigación sobre los macronutrientes y micronutrientes asi como ejemplos de los mismos y explicación de lo que aportan al organismo. También se investigó sobre las calorías que necesita una persona para sobrevivir y la dieta de la gente en los campos de concentración.'
	});
	subjects.push({
		iconName: 'hard-drive',
		color: '#4263eb',
		title: 'Computación',
		description:
			'Apoyo a la parte visual y tecnológica del proyecto. <br> Creación de un modelo 3D sobre un escondite durante el holocausto.'
	});
	subjects
		.filter((subject, index) => index % 2 === 0)
		.forEach((subject) => {
			subject.backgroundColor = '#f2f2f2';
		});

	return { subjects };
}
