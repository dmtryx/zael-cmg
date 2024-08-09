<template>
  <div
    class="ap-container"
    :style="hide ? { marginBottom: '-132px' } : { marginBottom: '0px' }"
  >
    <audio ref="audioElement" @timeupdate="updateProgress">
      <source :src="audioUrl" type="audio/mpeg" />
    </audio>
    <div class="top-side">
      <div class="main-container">
        <div class="top-line">
          <div class="line"></div>
          <img src="../assets/figures/15.png" alt="" class="img" />
        </div>
        <div class="song-container">
          <img :src="audioImage" class="song-icon" alt="" />
          <div class="song-info">
            <div class="name chakra-petch-bold">{{ audioName }}</div>
            <div class="chakra-petch-regular artists">{{ audioArtists }}</div>
            <div class="advance">
              <div class="black" :style="{ width: currentTime + '%' }"></div>
              <div class="gray"></div>
            </div>
          </div>
        </div>
        <div class="bottom-line"></div>
      </div>

      <div class="play-button" @click="changeStatePlayer">
        <div class="icon">
          <span v-if="isPlaying" class="mdi mdi-pause"></span>
          <span v-else class="mdi mdi-play"></span>
        </div>
      </div>
    </div>
    <div class="bottom-side">
      <div class="txt chakra-petch-bold">ESCUCHALA COMPLETA AQUI -></div>
      <div class="pltf-container">
        <div class="button">
          <img src="../assets/figures/sp_icon.svg" class="icon" alt="" />
        </div>
        <div class="button">
          <img src="../assets/figures/yt_icon.svg" class="icon" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// :style="hide ? { marginBottom: '-130px' } : { marginBottom: '0px' }"
import { ref, onMounted, computed, onUnmounted } from "vue";
import { useMusicStore } from "@/store/musicStore";

//store
const musicStore = useMusicStore();
const audioElement = ref(null);

// Ref
const currentTime = ref(0);
const duration = ref(0);
const statePlayer = musicStore.isPlaying;
const audioUrl = computed(() => musicStore.audioUrl);
const isPlaying = computed(() => musicStore.isPlaying);
const audioName = computed(() => musicStore.audioName);
const audioArtists = computed(() => musicStore.audioArtists);
const audioImage = computed(() => musicStore.audioImage);
const audioLinks = computed(() => musicStore.audioLinks);
const hide = computed(() => musicStore.hide);

// Methods

// Update progress bar
const updateProgress = () => {
  currentTime.value = (audioElement.value.currentTime / duration.value) * 100;
  if (currentTime.value === 100) {
    musicStore.changeState();
  }
};

const changeStatePlayer = () => {
  musicStore.changeState();
  if (isPlaying.value) {
    musicStore.playAudio();
  } else {
    musicStore.pauseAudio();
  }
};

const handleScroll = () => {
  if (!isPlaying.value && !hide.value) {
    musicStore.changeHide();
  }
};

// Ensure the ref is correctly set and get the duration

onMounted(() => {
  audioElement.value.addEventListener("loadedmetadata", () => {
    duration.value = audioElement.value.duration;
  });
  //asociar el elemento audio a la store en cuanto se monte
  musicStore.setAudioElement(audioElement.value);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
@import "@/assets/styles/audioplayer.scss";

/*
1. ESPACIO
2. LEONARDO DICAPRIO
3. BRADPID
4. FUTURO


*/
</style>
