import TLRIID from './TLRIID.json';
export function load({ params }) {
	const obj = {};
	if (params.materia === 'TLRIID') {
		obj.materia = 'TLRIID';
		obj.materiaImgSrc = '/TLRIID/books.jpg';
		if (params.specificProyecto === 'Autores-en-el-Holocausto') {
			obj.title = 'Autores en el Holocausto';
			obj.description = TLRIID['Autores-en-el-Holocausto'];
			obj.images = new Array(8).fill(undefined).map((_, i) => ({
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
		if (params.specificProyecto === 'Generos-Utilizados') {
			obj.title = 'Géneros Utilizados';
			obj.description = TLRIID['Generos-Utilizados'];
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
}
