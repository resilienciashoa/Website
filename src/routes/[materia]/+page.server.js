export function load({ params }) {
	const materia = params.materia;
	const obj = {};

	if (materia === 'TLRIID') {
		obj.title = 'TLRIID';
		obj.imgSrc = '/TLRIID/books.jpg';
		obj.hoverColor = '#37b24d';
		obj.specificProjects = [
			{
				imgSrc: '/test2.jpg',
				imgMargin: '-50px 0px 0px -20px',
				imgWidth: '200%',
				title: 'Mamparas',
				description: 'Distribución de contenido en mamparas.',
				url: '/TLRIID/mamparas'
			},
			{
				imgSrc: '/test2.jpg',
				imgMargin: '-50px 0px 0px -20px',
				imgWidth: '200%',
				title: 'Mamparas',
				description: 'Distribución de contenido en mamparas.'
			}
		];
	} else {
		obj.title = 'ERROR';
		obj.imgSrc = '/TLRIID/books.jpg';
		obj.specificProjects = [];
	}
	return obj;
}
