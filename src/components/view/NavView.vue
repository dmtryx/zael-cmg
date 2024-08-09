<script setup></script>
<template>
  <nav class="nav-container">
    <div class="nav-figures">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_icon.png?alt=media&token=096e31cb-060b-40dc-bfa3-866a6ff8bcd2"
        alt="fig_a"
        class="img"
      />
      <div class="f1"></div>
      <div class="f2">
        <div class="f2-1"></div>
        <div class="f2-2"></div>
      </div>
    </div>
    <div class="nav-txt">
      <h1 class="title">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_title.svg?alt=media&token=03a74c31-1f5c-42a2-96b5-d281efbad8c4"
          alt=""
        />
      </h1>
      <p class="msg">
        I'm out my mind, see fear in your eyes I'm sick, I despise myself again
      </p>
      <div class="f-txt"></div>
    </div>
  </nav>
</template>

<style lang="scss">
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin: 20px 20px 0 20px;

  .nav-figures {
    .img {
      height: 60px;
    }
    .f1 {
      content: "";
      background-color: black;
      height: 1px;
      width: 100%;
    }
    .f2 {
      display: flex;
      justify-content: space-between;
      margin-top: 4px;
      .f2-1 {
        content: "";
        background-color: black;
        height: 3px;
        width: 5%;
      }
      .f2-2 {
        content: "";
        background-color: black;
        height: 3px;
        width: 85%;
      }
    }
  }
  .nav-txt {
    display: flex;
    align-items: end;
    flex-direction: column;
    margin-left: 4px;
    .msg {
      font-family: "Chakra Petch", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 12px;
      text-align: end;
      margin-top: -5px;
    }
    .f-txt {
      content: "";
      background-color: black;
      height: 1px;
      width: 100%;
    }
  }
}
</style>
