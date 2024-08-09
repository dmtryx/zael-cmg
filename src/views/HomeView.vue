<script setup>
import LandView from "@/components/view/LandView.vue";
import ReleasesView from "@/components/view/ReleasesView.vue";
import AlbumsView from "@/components/view/AlbumsView.vue";
import ChannelsView from "@/components/view/ChannelsView.vue";
import AboutView from "@/components/view/AboutView.vue";
import ContactView from "@/components/view/ContactView.vue";
import BackgroundVideo from "@/components/BackgroundVideo.vue";
import ImgBackground from "@/components/ImgBackground.vue";
import AudioPlayer from "@/components/AudioPlayer.vue";
</script>

<template>
  <main class="home-main">
    <div class="land-items">
      <LandView style="" class="figure-main" />
      <div class="land-info">
        <ReleasesView />
        <AlbumsView />
      </div>
    </div>
    <div class="channels-items">
      <ChannelsView />
      <BackgroundVideo class="hide-video" />
    </div>
    <AboutView />
    <div class="footer-class">
      <ContactView />
      <ImgBackground class="figure-footer" />
    </div>
    <div class="floating-div">
      <AudioPlayer />
    </div>
  </main>
</template>

<style lang="scss">
.home-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .land-items {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    .figure-main {
      width: 100%;
      height: 70vh;
    }
    .land-info {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-evenly;
    }
  }
  .channels-items {
    display: flex;
    margin: 80px 0;
    .hide-video {
      display: none;
    }
  }

  .footer-class {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    .figure-footer {
      display: none;
    }
  }

  .floating-div {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 100;
    right: 0;
    bottom: 0;
  }
}

@media (min-width: 760px) {
  .home-main {
    .land-items {
      flex-direction: row;
      .figure-main {
        height: 100vh;
      }
      .land-info {
        display: flex;
        align-items: center;
      }
    }
    .channels-items {
      margin: 0;

      .hide-video {
        display: block;
      }
    }
    .footer-class {
      flex-direction: row;
      height: 100vh;
      .figure-footer {
        display: block;
      }
    }
    .floating-div {
      justify-content: end;
      margin-right: 2%;
    }
  }
}
</style>
