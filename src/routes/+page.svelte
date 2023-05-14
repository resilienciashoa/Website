<script>
	export let data;
	import Header from './Header.svelte';
	import Subject from './Subject.svelte';
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
<a href="/Museo/CEM">Visita al Museo &rarr;</a>
{#each data.subjects as subject}
	<Subject {...subject} />
{/each}

<style>
	a:link,
	a:visited {
		text-align: center;
		display: block;
		color: #d9480f;
		/* background-color: #f2f2f2; */
		font-size: 2rem;
		text-decoration: none;
		/* border-bottom: 1px solid currentColor; */
		/* padding-bottom: 2px; */
		transition: all 0.3s;
	}
	a:hover,
	a:active {
		color: #000;
	}
</style>
