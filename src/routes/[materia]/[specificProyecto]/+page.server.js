export function load({ params }) {
	const obj = {};
	if (params.materia === 'TLRIID') {
		if (params.specificProyecto === 'mamparas') {
			obj.title = 'Mamparas';
		}
	}
	return obj;
}
