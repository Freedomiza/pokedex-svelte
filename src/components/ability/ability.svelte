<script lang="ts">
	import { onMount } from 'svelte';
	import Modal from 'svelte-simple-modal';

	import type { Ability2 } from 'src/models/pokemon';

	import AbilityButton from './ability_button.svelte';

	export let ability: Ability2;
	export let isHidden: boolean;

	onMount(async () => {
		console.log(ability);
	});
</script>

<Modal>
	<AbilityButton {ability} {isHidden} />
</Modal>
