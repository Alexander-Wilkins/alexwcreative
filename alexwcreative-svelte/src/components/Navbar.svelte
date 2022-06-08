<script></script>

<nav class="box navbar-style flex-h">
  <div class="navbar-logo">
    <a href="#">
      <img
        class="awlogo"
        src="/assets/image/awcreative-logo.png"
        alt="alex w creative logo"
      />
    </a>
  </div>
  <div class="hamburger-menu tooltip">
    <i class="fa-solid fa-burger nav-burger-icon" />
    <span class="tooltiptext">Coming Soon!</span>
  </div>
</nav>

<style lang="scss">
  $white-color: #fff;

  .flex-h {
    display: flex;
  }

  .navbar-style {
    background-color: black;
    color: $white-color;
    font-weight: 700;
  }

  .awlogo {
    filter: brightness(0) invert(1);
    height: 40px;
    display: inline-block;
    transform: rotate(354deg);

    &:hover {
      transform: rotate(360deg);
      cursor: pointer;
    }
  }

  //tooltip stuff 👇🏻👇🏻👇🏻

  .tooltip {
    position: relative;
    display: inline-block;

    /* tooltip box */
    & .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: rgb(255, 0, 0);
      color: #fff;
      text-align: center;
      border-radius: 3px;
      padding: 3px 0;
      position: absolute;
      z-index: 1;
      //positioning
      top: 4px;
      right: 125%;
      font-size: 16px;
    }
    /* tiny tooltip right arrow */
    & .tooltiptext::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 100%;
      margin-top: -7px;
      border-width: 7px;
      border-style: solid;
      border-color: transparent transparent transparent rgb(255, 0, 0);
    }
    &.tooltip:hover .tooltiptext {
      visibility: visible;
    }
  }

  .hamburger-menu {
    font-size: 30px;
    margin-left: auto;
    margin-right: 0;
    border: 2px solid rgba(255, 255, 255, 0.418);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 238, 0, 0.493);
    }

    .nav-burger-icon {
      padding: 0 4px;
      display: inline-block;
      transform: rotate(7deg);
    }
  }
</style>
