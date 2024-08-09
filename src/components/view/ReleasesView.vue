<script setup>
import { songs_list } from "@/data.js";
import { useMusicStore } from "@/store/musicStore";
import { ref, computed } from "vue";

import { tailChase } from "ldrs";

tailChase.register();

// Default values shown

const musicStore = useMusicStore();
const isPlaying = computed(() => musicStore.isPlaying);
const actualIndex = ref(null);

function playSong(url) {
  //musicStore.setAudioUrl(url);
  musicStore.playAudio();
}

function pauseSong() {
  musicStore.pauseAudio();
}

const changeStatePlayer = (index, name, artist, image, url, links) => {
  if (actualIndex.value === index) {
    if (!isPlaying.value) {
      musicStore.changeState();
      musicStore.playController(url);
      musicStore.changeHide();
    } else {
      musicStore.changeState();
      musicStore.changeHide();
      pauseSong();
    }
  } else {
    musicStore.setInfo(name, artist, image, links);
    musicStore.playController(url);
    actualIndex.value = index;
    if (!isPlaying.value) {
      musicStore.changeHide();
      musicStore.changeState();
    }
  }
};
</script>

<template>
  <div class="rel-container">
    <div class="rel-title">
      <div class="title">RELEASES</div>
      <span class="hr"></span>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_icon_2.jpg?alt=media&token=02d6adc5-c2e7-49da-a61e-4bcf0369655c"
        alt=""
        class="img"
      />
    </div>
    <div class="rel-txt chakra-petch-regular">
      Los beats más duros que han salido de mi estudio. Deja que el fuego te
      envuelva 🔥.
    </div>
    <div class="rel-songs-container">
      <div class="rel-songs" v-for="(song, index) in songs_list" :key="index">
        <div>
          <img :src="song.image" alt="" class="img" />
        </div>
        <div style="display: flex; justify-content: space-between; width: 100%">
          <div class="content-song">
            <div class="name-song chakra-petch-bold">{{ song.name }}</div>
            <div class="artists chakra-petch-regular">{{ song.artist }}</div>
          </div>
          <div
            class="play-button"
            @click="
              changeStatePlayer(
                index,
                song.name,
                song.artist,
                song.image,
                song.audio,
                song.links
              )
            "
          >
            <div class="icon">
              <span
                v-if="isPlaying && actualIndex == index"
                class="mdi mdi-pause"
              ></span>
              <span v-else class="mdi mdi-play"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.rel-container {
  width: 100%;
  min-height: fit-content;
  color: rgb(225, 225, 225);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  .rel-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-family: "Chakra Petch", sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 24px;
    }
    .hr {
      width: 100%;
      height: 1px;
      margin: 0 20px;
      background-color: white;
    }
    .img {
      height: 35px;
    }
  }
  .rel-txt {
    width: 100%;
    font-size: 14px;
    margin: 20px 0;
  }
  .rel-songs-container {
    width: 100%;
    .rel-songs {
      display: flex;
      box-sizing: border-box;
      .img {
        height: 40px;
      }
      .content-song {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
        margin-bottom: 20px;
        .name-song {
          font-size: 16px;
        }
        .artists {
          font-size: 14px;
          color: gray;
        }
      }
      .play-button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        box-sizing: border-box;
        border-radius: 100px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent; /* Deshabilita el color de resaltado en dispositivos móviles */

        transition: all ease-in-out 0.4s;
        .icon {
          font-size: 25px;
          transition: all ease-in-out 0.4s;
        }
      }
      .play-button:hover {
        background-color: rgb(27, 27, 27);
        .icon {
          font-size: 30px;
        }
      }
      .play-button:active {
        background-color: rgb(74, 74, 74);
      }
    }
  }
}

@media (min-width: 760px) {
  .rel-container {
    /*
    .rel-title {
      .title {
      }
      .hr {
      }
      .img {
      }
    }
      */
    .rel-txt {
      width: 70%;
    }
    .rel-songs-container {
      width: 70%;
    }
    /*
    .rel-songs {
      .img {
      }
      .content-song {
        .name-song {
        }
        .artists {
        }
      }
      .button-icon {
      }
    }
      */
  }
}
</style>
