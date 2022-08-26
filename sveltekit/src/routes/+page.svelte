<script>
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>


    
<h1 class="text-3xl font-bold underline m-4">
    Hello world!
</h1>

<ul class="m-4">
	{#each cats as { id, name }, i}
		<li>
			<a target="_blank" href="https://www.youtube.com/watch?v={id}">
				{i + 1}: {name}
			</a>
		</li>
	{/each}
</ul>
