<script>
	export let count;
</script>

<div>
<button on:click={() => count -= 1}>-</button>
<span>{ count }</span>
<button on:click={() => count += 1}>+</button>
</div>