<script context="module">
  import { todaysDate } from "../../scripts/dom-manip";
</script>

<script>
  let author = "Alex Wilkins";
  console.log("Post has been posted...🐠");
</script>

<div id="post" class="box">
  <h1 class="title-box">
    The <span class="tilted-m">M</span>isadventures of a Self-Taught
    <br />
    Web Developer
  </h1>
  <div class="post-data">
    <em>{author} / date - created / read - time</em>
  </div>
  <p class="description-p">
    Hello, my name is <strong>Alex Wilkins</strong>. Today's date is
    <strong id="displayDateTime"><em>{todaysDate}</em></strong>. This is an
    interation of my personal website,
    <a href="#" class="links">AlexWCreative.com</a>! An ever growing project
    where I continually log my progress as a web developer with the goal of one
    day becoming a full stack developer.
  </p>
</div>

<style lang="scss">
  $base-color: black;
  $link-color: hsl(35, 90%, 49%);
  $gray-color: rgba(0, 0, 0, 0.45);

  .tilted-m {
    display: inline-block;
    transform: rotate(353deg);

    &:hover {
      transform: rotate(360deg);
      cursor: pointer;
    }
    //   color: red;
  }
  .title-box {
    color: $base-color;
    margin-bottom: 12px;
    font-size: 27pt;
    font-weight: 900;
  }

  .post-data {
    margin-bottom: 10px;
    color: $gray-color;
  }

  .description-p {
    color: $base-color;
  }

  .links {
    font-weight: 700;
    color: $base-color;
    text-decoration: none;
    background: linear-gradient(
        to right,
        rgba(100, 200, 200, 1),
        rgb(100, 140, 200)
      ),
      linear-gradient(
        to right,
        rgba(255, 0, 0, 1),
        rgba(255, 0, 180, 1),
        rgba(0, 100, 200, 1)
      );
    background-size: 100% 3px, 0 3px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;

    &:hover {
      background-size: 0 3px, 100% 3px;
      // color: white;
      transition: background-size 400ms ease-in-out;
    }
  }
</style>
