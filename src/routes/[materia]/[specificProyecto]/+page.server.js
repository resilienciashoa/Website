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
				src: `/TLRIID/${i + 4}.png`,
				thumbSrc: `/TLRIID/${i + 4}.png`
			}));
			/* obj.images = [
				{ src: '/masada.jpg', thumbSrc: '/masada.jpg' },
				{
					src: '/test2.jpg',
					thumbSrc: '/test2thumb.jpg',
					thumbImgMargin: '-50px 0px 0px -20px',
					thumbImgWidth: '200%'
				}
			]; */
		}
	}
	return obj;
}
