<script>
	import Header from './Header.svelte';
    import Subject from './Subject.svelte'
	import Popup from './Popup.svelte';

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
	const modal = writable(null);
	const showModal = (obj) => modal.set(bind(Popup, obj));

	let socket;
	let host = 'https://proyectomyserver.itzjakmeirmoss.repl.co';
	/*onMount(async () => {
		//socket = io(host);
		let obj = { modal, socket, host };
		showModal(obj);

		socket.on('connect', () => {
			console.log('connected');
		});
		socket.on('disconnect', () => {
			console.log('disconnected');
		});
		socket.on('showModal', () => {
			showModal(obj);
		});
	});*/
</script>

<svelte:head>
	<script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>
</svelte:head>
<Modal closeOnEsc={false} closeOnOuterClick={false} closeButton={false} show={$modal} />
<Header />
<Subject backgroundColor='#f2f2f2' iconName='feather' color='#37b24d' title='TLRIID' description="Investigación sobre los principales autores y obras acerca del Holocausto, ademas de un análisis de los géneros literarios y las motivaciones al escribir. <br> Tambien un pequeño estudio sobre el debate acerca de la ficcion historica en el Holocausto y reseñas sobre los libros leídos en clase."/>
<Subject iconName='hash' color='#1c7ed6' title='Matemáticas' description="Investigación sobre los principales autores y obras acerca del holocausto, ademas de un análisis sobre los géneros literarios y las motivaciones al escribir. <br> Tambien un pequeño estudio sobre el debate acerca de la ficcion historica en el holocausto y reseñas sobre los libros leídos en clase."/>
<Subject backgroundColor='#f2f2f2' iconName='book' color='#f59f00' title='Historia' description="Investigación sobre los principales autores y obras acerca del holocausto, ademas de un análisis sobre los géneros literarios y las motivaciones al escribir. <br> Tambien un pequeño estudio sobre el debate acerca de la ficcion historica en el holocausto y reseñas sobre los libros leídos en clase."/>
<style>
</style>
