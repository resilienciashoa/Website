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
	} else if (materia === 'Química') {
		obj.title = 'Química';
		obj.imgSrc = '/Química/background.jfif';
		obj.hoverColor = '#ae3ec9';
		obj.specificProjects = [
			{
				title: 'La alimentación en los campos de concentración',
				imgSrc: '/Química/3.png',
				imgMargin: '-7% 0px 0px -3%',
				imgWidth: '160%',
				description: 'Proceso químico de la alimentación.',
				url: '/Química/La-alimentacion-en-los-campos-de-concentracion'
			},
			{
				title: 'Vías Metabólicas',
				imgSrc: '/Química/Vias-Metabolicas.jpg',
				imgMargin: '-15% 0px 0px -15%',
				imgWidth: '160%',
				description: 'Glucolisis.',
				url: '/Química/Vias-Metabolicas'
			},
			{
				title: 'Macronutrientes y micronutrientes',
				imgSrc: '/Química/MacronutrientesCover.png',
				imgMargin: '-42% 0px 0px 0%',
				imgWidth: '100%',
				description: 'Investigación introductoria.',
				url: '/Química/Macronutrientes-y-micronutrientes'
			},
			{
				title: 'Hidrocarburos',
				imgSrc: '/Química/HidrocarburosCover.jfif',
				imgMargin: '0% 0px 0px 0%',
				imgWidth: '100%',
				description: 'Alcanos, alquenos y alquinos.',
				url: '/Química/Hidrocarburos'
			}
		];
	} else if (materia === 'Inglés') {
		obj.title = 'Inglés';
		obj.imgSrc = '/Inglés/Map.jpg';
		obj.hoverColor = '#ae3ec9';
		obj.specificProjects = [
			{
				title: 'Poema Inicial',
				imgSrc: '/Inglés/Why-we-must/16.png',
				imgMargin: '0% 0px 0px 0%',
				imgWidth: '100%',
				description: 'Why we must remember - Jim Yerman.',
				url: '/Inglés/Poema-Inicial'
			},
			{
				title: 'Prólogo',
				imgSrc: '/Inglés/IntroJustification/18.png',
				imgMargin: '0% 0px 0px 0%',
				imgWidth: '100%',
				description: 'Introducción y Justificación.',
				url: '/Inglés/Prólogo'
			},
			{
				title: 'Palabras de Torá',
				imgSrc: '/Inglés/Tora.png',
				imgMargin: '0% 0px 0px -15%',
				imgWidth: '130%',
				description: 'Pequeño discurso post-introductorio.',
				url: '/Inglés/Palabras-de-Torá'
			},
			{
				title: 'Conclusión',
				imgSrc: '/Inglés/Conclusiones.jpg',
				imgMargin: '-10% 0px 0px -15%',
				imgWidth: '130%',
				description:
					'Palabras de cierre basadas en todo el aprendizaje obtenido durante el proyecto.',
				url: '/Inglés/Conclusión'
			},
			{
				title: 'Ejemplos de Resiliencia',
				imgSrc: '/Inglés/Examples-of-Resilience.jpg',
				imgMargin: '-10% 0px 0px -15%',
				imgWidth: '130%',
				description: 'Diferentes personajes del holocausto',
				url: '/Inglés/Ejemplos-de-Resiliencia'
			},
			{
				title: 'Cordinación General',
				imgSrc: '/Inglés/Cordinación/1.png',
				imgMargin: '0% 0px 0px 0%',
				imgWidth: '100%',
				description: 'Dirección y organización de todas las áreas del proyecto.',
				url: '/Inglés/Cordinación-General'
			},
			{
				title: 'Interpretación de Testimonios',
				imgSrc: '/Inglés/Interpretación/1.png',
				imgMargin: '0% 0px 0px 0%',
				imgWidth: '100%',
				description: '“Performance” en Inglés.',
				url: '/Inglés/Interpretación-de-Testimonios'
			}
		];
	} else {
		obj.title = 'ERROR';
		obj.imgSrc = '/TLRIID/books.jpg';
		obj.specificProjects = [];
	}
	return obj;
}
