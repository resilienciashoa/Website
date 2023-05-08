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
				imgSrc: '/TLRIID/8.png',
				imgMargin: '-20px 0px 0px -80px',
				imgWidth: '180%',
				description: 'Biografías y reseñas de sus obras.',
				url: '/TLRIID/mamparas'
			},
            {
				title: 'Para que Escribir',
				imgSrc: '/TLRIID/14.png',
				imgMargin: '-20px 0px 0px -80px',
				imgWidth: '180%',
				description: '¿Cuál es la intención de los autores al escribir? <br> ¿La literatura es denuncia o testimonio?',
				url: '/TLRIID/mamparas'
			},
               {
				title: 'Géneros Utilizados',
				imgSrc: '/TLRIID/19.png',
				imgMargin: '-10px 0px 0px -30px',
				imgWidth: '180%',
				description: '¿Cuál fue el género más utilizado? ¿Por qué?',
				url: '/TLRIID/mamparas'
			},
            {
				title: 'Autores tras el Holocausto',
				imgSrc: '/TLRIID/22.png',
				imgMargin: '-20px 0px 0px -40px',
				imgWidth: '180%',
				description: '¿Cuál fue el género más utilizado? ¿Por qué?',
				url: '/TLRIID/mamparas'
			},
              {
				title: 'Artistas relacionados al Holocausto',
				imgSrc: '/TLRIID/Artistas.jpg',
				imgMargin: '-20px 0px 0px -50px',
				imgWidth: '150%',
				description: 'Líneas del tiempo e Infografías sobre diferentes tipos de artistas relacionados al Holocausto',
				url: '/TLRIID/mamparas'
			},
		];
	} else {
		obj.title = 'ERROR';
		obj.imgSrc = '/TLRIID/books.jpg';
		obj.specificProjects = [];
	}
	return obj;
}

