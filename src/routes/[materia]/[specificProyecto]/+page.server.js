import TLRIID from './TLRIID.json';
import Quimica from './Quimica.json';
import Ingles from './Ingles.json';
import Historia from './Historia.json';
import Matematicas from './Matematicas.json';
export function load({ params }) {
	const obj = {};
	if (params.materia === 'TLRIID') {
		obj.materia = 'TLRIID';
		obj.materiaImgSrc = '/TLRIID/books.jpg';
		if (params.specificProyecto === 'Autores-en-el-Holocausto') {
			obj.title = 'Autores en el Holocausto';
			obj.description = TLRIID['Autores-en-el-Holocausto'];
			obj.images = new Array(9).fill(undefined).map((_, i) => ({
				src: `/TLRIID/${i + 3}.png`
			}));
		}
		if (params.specificProyecto === 'Para-que-escribir') {
			obj.title = '¿Para qué escribir?';
			obj.description = TLRIID['Para-que-escribir'];
			obj.images = new Array(5).fill(undefined).map((_, i) => ({
				src: `/TLRIID/${i + 12}.png`
			}));
		}
		if (params.specificProyecto === 'Generos-utilizados') {
			obj.title = 'Géneros utilizados';
			obj.description = TLRIID['Generos-utilizados'];
			obj.images = new Array(2).fill(undefined).map((_, i) => ({
				src: `/TLRIID/${i + 17}.png`
			}));
		}
		if (params.specificProyecto === 'Autores-tras-el-Holocausto') {
			obj.title = 'Autores tras el Holocausto';
			obj.description = TLRIID['Autores-tras-el-Holocausto'];
			obj.images = new Array(3).fill(undefined).map((_, i) => ({
				src: `/TLRIID/${i + 19}.png`
			}));
		}
		if (params.specificProyecto === 'Artistas-relacionados-al-Holocausto') {
			obj.title = 'Artistas relacionados al Holocausto';
			obj.description = TLRIID['Artistas-relacionados-al-Holocausto'];
			obj.images = [{ src: '/TLRIID/Artistas.jpg' }, { src: '/TLRIID/Artistas2.png' }];
		}
		return obj;
	}
	if (params.materia === 'Química') {
		obj.materia = 'Química';
		obj.materiaImgSrc = '/Química/background.jfif';
		if (params.specificProyecto === 'La-alimentacion-en-los-campos-de-concentracion') {
			obj.title = 'La alimentación en los campos de concentración';
			obj.description = Quimica['La-alimentacion-en-los-campos-de-concentracion'];
			obj.images = new Array(10).fill(undefined).map((_, i) => ({
				src: `/Química/${i + 1}.png`
			}));
		}
		if (params.specificProyecto === 'Vias-metabólicas') {
			obj.title = 'Vías metabólicas';
			obj.description = Quimica['Vias-metabólicas'];
			obj.images = [
				{
					src: `/Química/Vias-Metabolicas.jpg`,
					thumbSrc: `/Química/Vias-Metabolicas-Thumb.jpg`,
					thumbImgWidth: '250px'
				}
			];
		}
		if (params.specificProyecto === 'Macronutrientes-y-micronutrientes') {
			obj.title = 'Macronutrientes y micronutrientes';
			obj.description = Quimica['Macronutrientes-y-micronutrientes'];
			obj.images = [
				{
					src: `/Química/Macronutrientes1.jpg`,
					thumbSrc: `/Química/Macronutrientes1-Thumb.jpg`,
					thumbImgWidth: '100px'
				},
				{
					src: `/Química/Macronutrientes2.jpg`,
					thumbSrc: `/Química/Macronutrientes2-Thumb.jpg`,
					thumbImgWidth: '100px'
				}
			];
		}
		if (params.specificProyecto === 'Hidrocarburos') {
			obj.title = 'Hidrocarburos';
			obj.description = Quimica['Hidrocarburos'];
			obj.images = [
				{
					src: `/Química/Hidro1.jpg`
				},
				{
					src: `/Química/Hidro2.jpg`
				},
				{
					src: `/Química/Hidro3.jpg`
				},
				{
					src: `/Química/Hidro4.jpg`
				}
			];
		}
		return obj;
	}
	if (params.materia === 'Inglés') {
		obj.materia = 'Inglés';
		obj.materiaImgSrc = '/Inglés/Map.jpg';
		if (params.specificProyecto === 'Poema-Inicial') {
			obj.title = 'Poema Inicial';
			obj.description = Ingles['Poema-Inicial'];
			obj.images = new Array(16).fill(undefined).map((_, i) => ({
				src: `/Inglés/Why-we-must/${i + 2}.png`
			}));
			obj.images.unshift({ src: '/Inglés/Why-we-must.jpg' });
		}
		if (params.specificProyecto === 'Prólogo') {
			obj.title = 'Prólogo';
			obj.description = Ingles['Prólogo'];
			obj.images = new Array(11).fill(undefined).map((_, i) => ({
				src: `/Inglés/IntroJustification/${i + 18}.png`
			}));
			obj.images.unshift({ src: '/Inglés/IntroJustification.jpg' });
		}
		if (params.specificProyecto === 'Palabras-de-Torá') {
			obj.title = 'Palabras de Torá';
			obj.description = Ingles['Palabras-de-Torá'];
			obj.images = [{ src: '/Inglés/Tora.png' }, { src: '/Inglés/Discurso.jpg' }];
		}
		if (params.specificProyecto === 'Conclusión') {
			obj.title = 'Conclusión';
			obj.description = Ingles['Conclusión'];
			obj.images = [
				{
					src: '/Inglés/Conclusiones.jpg',
					thumbSrc: `/Inglés/Conclusiones-Thumb.jpg`,
					thumbImgWidth: '250px'
				}
			];
		}
		if (params.specificProyecto === 'Ejemplos-de-resiliencia') {
			obj.title = 'Ejemplos de resiliencia';
			obj.description = Ingles['Ejemplos-de-resiliencia'];
			obj.images = [
				{
					src: '/Inglés/Examples-of-Resilience.jpg',
					thumbSrc: `/Inglés/Examples-of-Resilience-Thumb.jpg`,
					thumbImgWidth: '250px'
				}
			];
		}
		if (params.specificProyecto === 'Cordinación-general') {
			obj.title = 'Cordinación general';
			obj.description = Ingles['Cordinación-general'];
			obj.images = new Array(3).fill(undefined).map((_, i) => ({
				src: `/Inglés/Cordinación/${i + 2}.jpg`
			}));
			obj.images.unshift({ src: '/Inglés/Cordinación/1.png' });
		}
		if (params.specificProyecto === 'Interpretación-de-testimonios') {
			obj.title = 'Interpretación de testimonios';
			obj.description = Ingles['Interpretación-de-testimonios'];
			obj.images = [
				{ src: '/Inglés/Interpretación/1.png' },
				{ src: '/Inglés/Interpretación/2.png' },
				{ src: '/Inglés/Interpretación/3.jpg' },
				{ src: '/Inglés/Interpretación/4.jpg' }
			];
		}

		return obj;
	}
	if (params.materia === 'Historia') {
		obj.materia = 'Historia';
		obj.materiaImgSrc = '/Historia/Background.jfif';
		if (params.specificProyecto === 'Video') {
			obj.title = 'Video';
			obj.description = Historia['Video'];
			obj.images = [{ html: '<video controls src="/Historia/video.mp4"></video>' }];
			obj.hideControls = true;
		}
		if (params.specificProyecto === 'Diálogo') {
			obj.title = 'Diálogo';
			obj.description = Historia['Diálogo'];
			obj.images = [{ src: '/Historia/Dialogos1.jpg' }, { src: '/Historia/Dialogos2.jpg' }];
		}

		return obj;
	}
	if (params.materia === 'Museo') {
		obj.materia = 'CEM';
		obj.materiaImgSrc = '/CEM/72.jpg';
		if (params.specificProyecto === 'CEM') {
			obj.title = 'Visita al Museo';
			obj.description =
				'<p>Salida de Campo al Centro de Estudios Multisensorial Sobre el Holocausto ubicado en la Sefaradi.</p>';
			obj.images = new Array(91).fill(undefined).map((_, i) => ({
				src: `/CEM/${i + 1}.jpg`
			}));
			obj.backUrl = '/';
		}
		return obj;
	}
	if (params.materia === 'Matemáticas') {
		obj.materia = 'Matemáticas';
		obj.materiaImgSrc = '/Matemáticas/Background.jpg';
		if (params.specificProyecto === 'Cálculos-y-estadísticas') {
			obj.title = 'Cálculos y estadísticas';
			obj.description = Matematicas['Cálculos-y-estadísticas'];
			obj.images = new Array(10).fill(undefined).map((_, i) => ({
				src: `/Matemáticas/${i + 1}.png`
			}));
		}
		if (params.specificProyecto === 'Modelo-3D') {
			obj.title = 'Modelo 3D';
			obj.description = Matematicas['Modelo-3D'];
			obj.images = [{ html: '<video controls src="/Matemáticas/3D.mp4"></video>' }];
			obj.hideControls = true;
		}

		return obj;
	}
	if (params.materia === 'Computación') {
		obj.materia = 'Computación';
		obj.materiaImgSrc = '/Computación/Background.jfif';
		if (params.specificProyecto === 'Modelo-3D') {
			obj.title = 'Modelo 3D';
			obj.description = Matematicas['Modelo-3D'];
			obj.images = [{ html: '<video controls src="/Matemáticas/3D.mp4"></video>' }];
			obj.hideControls = true;
		}
		if (params.specificProyecto === 'Palabras-de-resiliencia') {
			obj.title = 'Palabras de resiliencia';
			obj.description = '';
			obj.images = [{ html: '<video controls src="/Computación/intro.mp4"></video>' }];
			obj.hideControls = true;
		}

		return obj;
	}
}
