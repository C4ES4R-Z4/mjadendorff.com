<script>
  import Router from 'svelte-spa-router';
  import routes from "./routes";
</script>

<main>
  <div class="container">
    <Router {routes} />
  </div>
</main>

<style>
  .container {
    background-color: black;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    color: white;
    font-family: "vt323";
    justify-content: center;
    align-items: center;
    border: 10px solid grey;
  }
</style>
