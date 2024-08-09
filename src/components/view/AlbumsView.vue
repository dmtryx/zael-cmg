<script setup></script>
<template>
  <div class="alb-container">
    <div class="v-line" />
    <section class="main">
      <div class="h-line" />
      <div class="alb-title chakra-petch-bold">ALBUMS</div>
      <div class="alb-content">
        <div class="figure">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fland_icon3.jpg?alt=media&token=11389b19-e04d-47d8-af8a-7f680ef5d82a"
            alt=""
            class="img"
          />
          <p class="txt">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus, eligendi ipsa. Distinctio cum beatae minus expedita
            eveniet aut iusto corrupti dolorem quos neque eius quae, dolor,
            blanditiis perspiciatis nostrum a eum.
          </p>
        </div>
        <div class="aa">
          <div class="albums">
            <div class="item">
              <img
                src="../../assets/test/album.png"
                alt=""
                style="width: 100%; object-fit: cover"
              />
            </div>
            <div class="item">
              <img
                src="../../assets/test/album.png"
                alt=""
                style="width: 100%; object-fit: cover"
              />
            </div>
            <div class="item">
              <img
                src="../../assets/test/album.png"
                alt=""
                style="width: 100%; object-fit: cover"
              />
            </div>
            <div class="item">
              <img
                src="../../assets/test/album.png"
                alt=""
                style="width: 100%; object-fit: cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.alb-container {
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  padding-bottom: 20px;
  .v-line {
    height: 90px;
    width: 1px;
    background-color: white;
  }

  .main {
    .h-line {
      height: 1px;
      width: 20%;
      background-color: white;
    }
    .alb-title {
      padding: 5px;
      font-size: 24px;
      color: white;
      width: 100%;
      margin-bottom: 20px;
    }
    .alb-content {
      display: flex;
      .figure {
        width: 150px;
        margin: 0 20px;
        color: white;
        .img {
          width: 100%;
        }
        .txt {
          color: white;
          font-size: 5px;
          text-align: justify;
        }
      }
      .aa {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .albums {
          width: fit-content;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          row-gap: 20px;
          .item {
            width: 100px;
          }
        }
      }
    }
  }
}

@media (min-width: 760px) {
  .alb-container {
    width: 100%;
    padding: 20px;
    display: flex;
    .v-line {
      height: 180px;
    }
    .main {
      width: 100%;
      //.h-line {
      // }
      //.alb-title {
      //}
      .alb-content {
        .figure {
          width: 300px;
          //.img {
          //}
          //.txt {
          //}
        }
        .aa {
          .albums {
            row-gap: 20px;
            column-gap: 20px;
            justify-content: center;
            .item {
              border: 1px solid gray;
              border-left: 2px solid gray;
              width: 150px;
            }
          }
        }
      }
    }
  }
}
</style>
