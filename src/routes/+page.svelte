<script>
	import Header from './Header.svelte';
	import Popup from './Popup.svelte';

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
	const modal = writable(null);
	const showModal = (obj) => modal.set(bind(Popup, obj));

	let socket;
	let host = 'http://192.168.1.109:3000';
	onMount(async () => {
		socket = io(host);
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
	});
</script>

<svelte:head>
	<script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>
</svelte:head>
<Header />
<Modal closeOnEsc={false} closeOnOuterClick={false} closeButton={false} show={$modal} />

<style>
</style>
