<script>
  import Router from 'svelte-spa-router';
  import Home from "./pages/Home.svelte";
  import Education from "./pages/Education.svelte";

  const routes = {
    "/": Home,
    "/education": Education
  }
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
    min-height: 100vh;
    width: 100%;
    color: white;
    font-family: "vt323";
    justify-content: center;
    align-items: center;
    border: 10px solid grey;
  }
</style>
