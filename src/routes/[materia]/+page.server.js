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
				title: 'Géneros utilizados',
				imgSrc: '/TLRIID/18.png',
				imgMargin: '-5.2% 0px 0px -15%',
				imgWidth: '180%',
				description: '¿Cuál fue el género más utilizado? ¿Por qué?',
				url: '/TLRIID/Generos-utilizados'
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
					'Líneas del tiempo e infografías sobre diferentes tipos de artistas relacionados al Holocausto',
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
				title: 'Vías metabólicas',
				imgSrc: '/Química/Vias-Metabolicas.jpg',
				imgMargin: '-15% 0px 0px -15%',
				imgWidth: '160%',
				description: 'Glucolisis.',
				url: '/Química/Vias-metabólicas'
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
				title: 'Cordinación general',
				imgSrc: '/Inglés/Cordinación/1.png',
				imgMargin: '0% 0px 0px 0%',
				imgWidth: '100%',
				description: 'Dirección y organización de todas las áreas del proyecto.',
				url: '/Inglés/Cordinación-general'
			},
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
				description: 'Introducción y justificación.',
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
				title: 'Ejemplos de resiliencia',
				imgSrc: '/Inglés/Examples-of-Resilience.jpg',
				imgMargin: '-10% 0px 0px -15%',
				imgWidth: '130%',
				description: 'Diferentes personajes del Holocausto',
				url: '/Inglés/Ejemplos-de-resiliencia'
			},
			{
				title: 'Interpretación de testimonios',
				imgSrc: '/Inglés/Interpretación/1.png',
				imgMargin: '0% 0px 0px 0%',
				imgWidth: '100%',
				description: '“Performance” en Inglés.',
				url: '/Inglés/Interpretación-de-testimonios'
			},
			{
				title: 'Conclusión',
				imgSrc: '/Inglés/Conclusiones.jpg',
				imgMargin: '-10% 0px 0px -15%',
				imgWidth: '130%',
				description:
					'Palabras de cierre basadas en todo el aprendizaje obtenido durante el proyecto.',
				url: '/Inglés/Conclusión'
			}
		];
	} else if (materia === 'Museo') {
		obj.title = 'Museo';
		obj.imgSrc = '/CEM/72.jpg';
		obj.hoverColor = '#000';
		obj.specificProjects = [
			{
				title: 'CEM',
				imgSrc: '/CEM/2.jpg',
				imgMargin: '-12% 0px 0px 0%',
				imgWidth: '110%',
				description: 'Centro de Estudios Multisensorial Sobre el Holocausto',
				url: '/Museo/CEM'
			}
		];
	} else if (materia === 'Historia') {
		obj.title = 'Historia';
		obj.imgSrc = '/Historia/Background.jfif';
		obj.hoverColor = '#f59f00';
		obj.specificProjects = [
			{
				title: 'Video',
				imgSrc: '/Historia/VideoThumbnail.png',
				imgMargin: '0% 0px 0px 0%',
				imgWidth: '100%',
				description: 'Sobre el contexto histórico del Holocausto.',
				url: '/Historia/Video'
			},
			{
				title: 'Diálogo',
				imgSrc: '/Historia/Dialogos1.jpg',
				imgMargin: '-12% 0px 0px 0%',
				imgWidth: '110%',
				description: '“Conversación” entre sobrevivientes del Holocausto.',
				url: '/Historia/Diálogo'
			}
		];
	} else if (materia === 'Matemáticas') {
		obj.title = 'Matemáticas';
		obj.imgSrc = '/Matemáticas/Background.jpg';
		obj.hoverColor = '#1c7ed6';
		obj.specificProjects = [
			{
				title: 'Cálculos y estadísticas',
				imgSrc: '/Matemáticas/9.png',
				imgMargin: '0% 0px 0px 0%',
				imgWidth: '100%',
				description: 'Gráficos con información sobre el Holocausto en general.',
				url: '/Matemáticas/Cálculos-y-estadísticas'
			},
			{
				title: 'Modelo 3D',
				imgSrc: '/Matemáticas/3D-thumbnail.png',
				imgMargin: '-5% 0px 0px 0%',
				imgWidth: '120%',
				description: 'De un escondite.',
				url: '/Matemáticas/Modelo-3D'
			}
		];
	} else if (materia === 'Computación') {
		obj.title = 'Computación';
		obj.imgSrc = '/Computación/Background.jfif';
		obj.hoverColor = '#4263eb';
		obj.specificProjects = [
			{
				title: 'Modelo 3D',
				imgSrc: '/Matemáticas/3D-thumbnail.png',
				imgMargin: '-5% 0px 0px 0%',
				imgWidth: '120%',
				description: 'De un escondite.',
				url: '/Computación/Modelo-3D'
			},
			{
				title: 'Palabras de resiliencia',
				imgSrc: '/Computación/intro-thumbnail.png',
				imgMargin: '0% 0px 0px 0%',
				imgWidth: '100%',
				description: '',
				url: '/Computación/Palabras-de-resiliencia'
			}
		];
	} else {
		obj.title = 'ERROR';
		obj.imgSrc = '/TLRIID/books.jpg';
		obj.specificProjects = [];
	}
	return obj;
}
