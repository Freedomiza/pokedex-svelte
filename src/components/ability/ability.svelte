<script lang="ts">
	import { onMount, getContext } from 'svelte';
	import Modal from 'svelte-simple-modal';
	import colorHash from 'color-hash';

	import type { Ability2 } from 'src/models/pokemon';

	import AbilityButton from './ability_button.svelte';

	export let ability: Ability2;

	onMount(async () => {
		console.log(ability);
	});
</script>

<Modal>
	<AbilityButton {ability} />
</Modal>
