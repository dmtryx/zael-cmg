<script setup>
import NavView from "./NavView.vue";
import { ref } from "vue";
import { onMounted } from "vue";
const isImageLoaded = ref(false);
const imageSrc =
  "https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_subject.png?alt=media&token=6e63a923-6155-4e17-94f8-057517d66c63";

onMounted(() => {
  const img = new Image();
  img.src = imageSrc;
  img.onload = () => {
    isImageLoaded.value = true;
  };
});
</script>
<template>
  <main class="land-container">
    <NavView />
    <figure class="land-fig">
      <div class="c-left">
        <div class="c-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_trap_music.svg?alt=media&token=c7645d9f-086c-4cdf-851e-351a637bebc0"
            class="text-left"
            alt=""
          />
        </div>
      </div>
      <div class="c-figure">
        <div class="layer-one">
          <div class="r1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_tc.svg?alt=media&token=cc165fa9-1ccc-481b-965b-d9d330adb6ed"
              alt=""
              style="width: max-content"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_icon_4.svg?alt=media&token=d9eea12e-3bc5-4ea2-a554-4115f5af8aef"
              alt=""
              style="width: max-content"
            />
          </div>
          <div class="r2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_lc.svg?alt=media&token=8c5cb247-8570-4505-8b7f-1fef3cfcaf71"
              alt=""
              style="width: 100%; object-fit: cover"
            />
          </div>
        </div>
        <div class="layer-two">
          <div v-if="!isImageLoaded">espere cansón</div>
          <img v-else :src="imageSrc" alt="" class="img" />
        </div>
        <div class="layer-three">
          <div class="r1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_lc_outline.svg?alt=media&token=584ece30-95b8-4bb7-b31f-a96abbd7e621"
              alt=""
              style="width: 100%; object-fit: cover"
            />
          </div>
        </div>
      </div>
      <div class="c-right">
        <div class="c-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_trap_music.svg?alt=media&token=c7645d9f-086c-4cdf-851e-351a637bebc0"
            class="text-right"
            alt=""
          />
        </div>
      </div>
    </figure>
  </main>
</template>

<style lang="scss">
.land-container {
  display: flex;
  flex-direction: column;
  background-color: white;
  .land-fig {
    display: flex;
    height: 100%; //60vh
    margin: 10px 20px;
    .c-left {
      display: flex;
      align-items: end;
    }
    .c-right {
      display: flex;
      align-items: start;
    }
    .c-item {
      content: "";
      height: fit-content;
      width: 30px;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px 0;
    }
    .text-right {
      width: 10px;
      transform: rotate(180deg);
    }
    .text-left {
      width: 10px;
    }

    .c-figure {
      width: 100%;
      border: 1px solid black;
      margin: 0 -1px;
      position: relative;
      .layer-one {
        position: absolute;
        width: 100%;
        height: 100%;

        content: "";
        top: 0;
        left: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        .r1 {
          display: flex;
          justify-content: space-between;
          margin-bottom: 200px;
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
        }
        .r2 {
          margin-bottom: 200px;
          padding: 0 20px;
          max-width: 300px;
        }
      }
      .layer-two {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: end;
        .img {
          height: 100%;
          margin-bottom: -12px;
        }
      }
      .layer-three {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 3;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        .r1 {
          margin-bottom: 200px;
          padding: 0 20px;
          max-width: 300px;
        }
      }
    }
  }
}

@media (min-width: 760px) {
  .land-container {
    .land-fig {
      height: 100vh;
    }
  }
}
</style>
