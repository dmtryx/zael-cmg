<script setup>
import { ref } from "vue";
import MaskedInput from "vue-the-mask";

const isMail = ref(true);
const waiting = ref(false);

const setContactMode = () => {
  isMail.value = !isMail.value;
  toggleInputType();
};

const inputType = ref("text"); // Por defecto, es 'text'

const toggleInputType = () => {
  if (inputType.value === "text") {
    inputType.value = "number"; // Cambia a 'number' para solo números
  } else {
    inputType.value = "text"; // Cambia a 'text' para permitir correos electrónicos
  }
};
</script>
<template>
  <div class="contact-container">
    <div class="form-contact">
      <div class="title-cont">
        <div class="fs-line">
          <div class="title-form chakra-petch-bold">CONTÁCTAME</div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fcontact_image_4.jpg?alt=media&token=86cabca6-47f5-4dea-bc19-23e45257e2ca"
            alt=""
            class="img"
          />
        </div>
        <div class="sc-line">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fcontact_image_1.jpg?alt=media&token=4e7aa09d-b3a1-4a3d-94ae-b9bf3a576d12"
            alt=""
            class="img"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fcontact_image_2.jpg?alt=media&token=3b44816c-84fd-4ec0-8eb6-e75d88bc2450"
            alt=""
            class="img"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fcontact_image_3.jpg?alt=media&token=e2ba489b-047f-4f12-bd8e-4183cf14c4b2"
            alt=""
            class="img"
          />
        </div>
      </div>
      <div class="form-cont">
        <div class="mode">
          <div class="buttons chakra-petch-bold">
            <div
              class="email"
              :class="isMail ? 'active-option' : ''"
              @click="setContactMode"
            >
              Correo
            </div>
            <div
              class="phone"
              :class="!isMail ? 'active-option' : ''"
              @click="setContactMode"
            >
              Celular
            </div>
          </div>
          <input class="input" :type="inputType" />
          <div class="adv chakra-petch-regular">
            Enviaremos un mensaje o celular a tu correo
          </div>
        </div>
        <div class="msg">
          <div class="subtitle chakra-petch-bold">Mensaje</div>
          <textarea class="input"></textarea>
        </div>
        <div class="button-submit chakra-petch-bold">ENVIAR</div>
      </div>
      <div class="txt-cont chakra-petch-bold">
        <div class="hr"></div>
        <div class="msg">ó si prefieres escribeme</div>
        <div class="hr"></div>
      </div>
      <div class="whatsapp-cont chakra-petch-bold">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zael-cmg.appspot.com/o/public%2Fimages%2Fwhatsapp_icon.svg?alt=media&token=62c51fff-5001-4b20-ac5a-82c3c9ff2525"
          class="icon"
        />
        <div class="txt">WHATSAPP -></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/contact.scss";
</style>
