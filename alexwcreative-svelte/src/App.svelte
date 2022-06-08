<script>
  import Navbar from "./components/Navbar.svelte";
  import Post from "./components/Post.svelte";
</script>

<Navbar />
<main>
  <Post />
  <Post />
  <Post />
  <Post />
  <Post />
</main>

<style lang="scss">
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
