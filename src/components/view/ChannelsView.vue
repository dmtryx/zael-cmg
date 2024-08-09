<script setup>
import { ref, onMounted, computed } from "vue";

const image1 =
  "https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fchannel_sp.svg?alt=media&token=a19f7460-16df-4bd1-9012-b51490dd899b";

const isImageLoaded = ref(false);
const imageSrc =
  "https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fchannel_sp.svg?alt=media&token=a19f7460-16df-4bd1-9012-b51490dd899b";

onMounted(() => {
  const img = new Image();
  img.src = imageSrc;
  img.onload = () => {
    isImageLoaded.value = true;
  };
});
</script>

<template>
  <div class="channel-container">
    <div class="cnn-title chakra-petch-bold">PLATAFORMAS</div>
    <div class="cnn-container">
      <section class="main">
        <div class="content">
          <div class="first-content">
            <div class="chanels iconss">
              <img v-if="isImage1Loaded" :src="image1" alt="Imagen 1" />

              <a class="item sp_class" href="https://www.google.com">
                <img
                  src="@\assets\figures\channel_sp.svg"
                  alt=""
                  style="width: 100%; height: 100%"
                />
              </a>
              <a class="item yt_class" href="https://www.google.com">
                <img
                  src="@\assets\figures\channel_yt.svg"
                  alt=""
                  style="width: 100%; height: 100%"
                />
              </a>
              <a class="item ig_class" href="https://www.google.com">
                <img
                  src="@\assets\figures\channel_ig.svg"
                  alt=""
                  style="width: 100%; height: 100%"
                />
              </a>
              <a class="item fb_class" href="https://www.google.com">
                <img
                  src="@\assets\figures\channel_fb.svg"
                  alt=""
                  style="width: 100%; height: 100%"
                />
              </a>
            </div>
            <div class="info">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fchannel_image_1.jpeg?alt=media&token=a55fadd1-5bbe-425f-bf94-d4c081b0188e"
                class="img"
                alt=""
              />
              <div class="txt chakra-petch-light">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
                <br /><br />Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quaerat voluptatem.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="cnn-footer">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fchannel_image_2.jpg?alt=media&token=8b4b0db2-e75c-4744-ae9c-ce2542de6ff5"
        class="vectors"
        alt=""
      />
      <div class="txt chakra-petch-regular">
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.channel-container {
  margin: 0 20px;
  width: 100%;
  .cnn-title {
    padding: 5px;
    font-size: 24px;
    color: white;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid white;
    text-align: center;
    box-sizing: border-box;
  }

  .cnn-container {
    display: flex;

    .main {
      .content {
        display: flex;
        flex-direction: column;
        .first-content {
          width: 100%;
          display: flex;

          .chanels {
            display: flex;
            flex-direction: column;
            align-items: start;
            row-gap: 20px;
            width: 50%;
            .item {
              width: 80%;
              display: flex;
            }
          }
          .info {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 20px;
            color: white;
            .img {
              width: 100%;
            }
            .txt {
              font-size: 5px;
              text-align: justify;
            }
          }
        }
        .scnd-content {
          margin-top: 10px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 5px;
          border: 1px solid white;
          color: white;
          box-sizing: border-box;

          .vectors {
            height: 10px;
            object-fit: cover;
          }
          .txt {
            font-size: 6px;
          }
        }
      }
    }
  }

  .cnn-footer {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px;
    border: 1px solid white;
    color: white;
    box-sizing: border-box;

    .vectors {
      height: 10px;
      object-fit: cover;
    }
    .txt {
      font-size: 6px;
    }
  }
}

@media (min-width: 760px) {
  .channel-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0;
    width: 100%;

    /*
    .cnn-title {
    }
*/
    .cnn-container {
      /*
      .v-line {
      }
      */
      .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /*
        .h-line {
        }
        */
        .content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .first-content {
            .chanels {
              justify-content: space-evenly;
              .item {
                width: 70%;
              }
            }
            .info {
              .img {
                width: 70%;
              }
              .txt {
                width: 70%;
                font-size: 10px;
              }
            }
          }

          .scnd-content {
            width: 100%;
            /*
            .vectors {
            }
            .txt {
            }
            */
          }
        }
      }
    }

    .cnn-footer {
      .vectors {
      }
      .txt {
      }
    }
  }
}

.svg-color {
  mask-image: url("/path/to/svgprueba.svg");
  background-color: red;
  -webkit-mask-image: url("/path/to/svgprueba.svg"); /* Para compatibilidad con WebKit */
}

.iconss {
  //SPOTIFY
  .sp_class {
    background-color: white;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .sp_class:hover {
    background-color: #1db954 !important;
    scale: 1.05;
  }

  .sp_class:active {
    background-color: red;
  }

  //YOUTUBE
  .yt_class {
    background-color: white;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .yt_class:hover {
    background-color: #ff0000;
    scale: 1.05;
  }

  .yt_class:active {
    background-color: red;
  }

  //INSTAGRAM
  .ig_class {
    background-color: white;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .ig_class:hover {
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    scale: 1.05;
  }

  .ig_class:active {
    background-color: red;
  }

  //FACEBOOK
  .fb_class {
    background-color: white;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .fb_class:hover {
    background-color: #1877f2;
    scale: 1.03;
  }

  .fb_class:active {
    background-color: red;
  }
}
</style>
