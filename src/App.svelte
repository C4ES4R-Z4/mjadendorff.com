<script>
  import Router from 'svelte-spa-router';
  import routes from "./routes";
</script>

<main>
  <div>Start</div>
  <Router {routes} />
  <div>End</div>
</main>

<style>
</style>
