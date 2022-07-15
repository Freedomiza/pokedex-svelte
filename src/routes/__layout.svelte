<div class="container">
	<slot />
</div>

<style lang="scss" global>
	@use '../app.scss';
	.container {
		width: 100%;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
</style>
