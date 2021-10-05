<script>
  import Counter from "../../components/Counter.svelte";
</script>
<div>
<h1>Hello world!</h1>
<Counter hydrate-client={{ count: 0 }} />
</div>
