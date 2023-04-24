<script>
	import { onDestroy } from 'svelte';
	export let modal;
	export let socket;
	export let host;
	let audio;
	let buttonText = 'Start';
	let buttonDisabled = false;
	let showForm = true;
	let seatNumberForm;
	let nameForm;
	socket.on('ding', (data) => {
		playAudio();
	});
	socket.on('hideModal', (data) => {
		modal.set(null);
	});
	const silence = `${host}/1-minute-of-silence.mp3`;
	function startAudioEngine() {
		audio = new Audio(silence);
		console.log(audio);
		audio.autoplay = true;
		playSilence();
		audio.addEventListener('play', (e) => {
			buttonText = 'Ready';
			buttonDisabled = true;
			socket.emit('seatNumber', seatNumberForm);
			socket.emit('personalName', nameForm);
			showForm = false;
		});
		audio.addEventListener('pause', (e) => {
			buttonText = 'Start';
			buttonDisabled = false;
		});
	}
	function playSilence() {
		audio.loop = true;
		audio.src = silence;
		buttonText = 'Ready';
	}
	function playAudio() {
		buttonText = 'Playing';
		audio.loop = false;
		audio.src = `${host}/ding.mp3`;
		audio.addEventListener('ended', () => {
			playSilence();
		});
	}
	onDestroy(() => {
		audio.pause();
		audio.src = '';
		audio.load();
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<form on:click|preventDefault>
	<!-- Seat Number -->
	{#if showForm}
		<label for="seatNumber">Numero de Asiento:</label>
		<input
			class="seat"
			type="number"
			name="seatNumber"
			id="seatNumber"
			bind:value={seatNumberForm}
		/>

		<!-- Name -->
		<label for="name">Nombre:</label>
		<input class="name" type="text" name="name" id="name" bind:value={nameForm} />
	{/if}
	<button on:click={startAudioEngine} disabled={buttonDisabled}>{buttonText}</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}
	.seat {
		padding: 0.5rem;
		/* square size*/
		width: 25%;
		height: 25%;
		border: 1px solid #333;
	}
	.name {
		padding: 0.5rem;
		width: 50%;
	}
	button {
		padding: 0.5rem;
		background-color: #333;
		color: #fff;
		border: none;
		border-radius: 0.25rem;
		font-size: 1rem;
		font-weight: 600;
	}
</style>
