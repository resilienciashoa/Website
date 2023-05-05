export function load({ params }) {
	const obj = {};
	if (params.materia === 'TLRIID') {
		obj.materia = 'TLRIID';
		obj.materiaImgSrc = '/TLRIID/books.jpg';
		if (params.specificProyecto === 'mamparas') {
			obj.title = 'Mamparas';
			obj.description =
				'Pequeño museo a la entrada y a la salida de la presentación mostrando todo el trabajo fisico realizado durante el proyecto.';
			obj.images = [
				{ src: '/masada.jpg', thumbSrc: '/masada.jpg' },
				{
					src: '/test2.jpg',
					thumbSrc: '/test2thumb.jpg',
					thumbImgMargin: '-50px 0px 0px -20px',
					thumbImgWidth: '200%'
				}
			];
		}
	}
	return obj;
}
