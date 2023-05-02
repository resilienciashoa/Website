export function load({ params }) {
	const obj = {};
	if (params.materia === 'TLRIID') {
		obj.materia = 'TLRIID';
		obj.materiaImgSrc = '/TLRIID/books.jpg';
		if (params.specificProyecto === 'mamparas') {
			obj.title = 'Mamparas';
		}
	}
	return obj;
}
