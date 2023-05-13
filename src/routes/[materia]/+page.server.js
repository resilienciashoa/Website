export function load({ params }) {
	const materia = params.materia;
	const obj = {};

	if (materia === 'TLRIID') {
		obj.title = 'TLRIID';
		obj.imgSrc = '/TLRIID/books.jpg';
		obj.hoverColor = '#37b24d';
		obj.specificProjects = [
			{
				title: 'Autores en el Holocausto',
				imgSrc: '/TLRIID/7.png',
				imgMargin: '-7% 0px 0px -40%',
				imgWidth: '180%',
				description: 'Biografías y reseñas de sus obras.',
				url: '/TLRIID/Autores-en-el-Holocausto'
			},
			{
				title: '¿Para qué escribir?',
				imgSrc: '/TLRIID/13.png',
				imgMargin: '-10% 0px 0px -38%',
				imgWidth: '180%',
				description:
					'¿Cuál es la intención de los autores al escribir? <br> ¿La literatura es denuncia o testimonio?',
				url: '/TLRIID/Para-que-escribir'
			},
			{
				title: 'Géneros Utilizados',
				imgSrc: '/TLRIID/18.png',
				imgMargin: '-5.2% 0px 0px -15%',
				imgWidth: '180%',
				description: '¿Cuál fue el género más utilizado? ¿Por qué?',
				url: '/TLRIID/Generos-Utilizados'
			},
			{
				title: 'Autores tras el Holocausto',
				imgSrc: '/TLRIID/21.png',
				imgMargin: '-9% 0px 0px -27%',
				imgWidth: '160%',
				description: '¿Cuál fue el género más utilizado? ¿Por qué?',
				url: '/TLRIID/Autores-tras-el-Holocausto'
			},
			{
				title: 'Artistas relacionados al Holocausto',
				imgSrc: '/TLRIID/Artistas.jpg',
				imgMargin: '-14% 0px 0px -24.7%',
				imgWidth: '150%',
				description:
					'Líneas del tiempo e Infografías sobre diferentes tipos de artistas relacionados al Holocausto',
				url: '/TLRIID/Artistas-relacionados-al-Holocausto'
			}
		];
	} else {
		obj.title = 'ERROR';
		obj.imgSrc = '/TLRIID/books.jpg';
		obj.specificProjects = [];
	}
	return obj;
}
