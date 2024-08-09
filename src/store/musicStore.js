import { defineStore } from "pinia";
import { ref } from "vue";

export const useMusicStore = defineStore("music", () => {
  const audioUrl = ref("");
  const audioName = ref("");
  const audioArtists = ref("");
  const audioImage = ref("");
  const audioLinks = ref([""]);
  const hide = ref(true);

  const isPlaying = ref(false);
  let audioElement = null;

  function setAudioUrl(url) {
    audioUrl.value = url;
    if (audioElement) {
      audioElement.src = url; // Actualizar la fuente del audioElement
    }
  }

  function changeHide() {
    hide.value = !hide.value;
  }

  function setInfo(name, artists, image, links) {
    audioName.value = name;
    audioArtists.value = artists;
    audioImage.value = image;
    audioLinks.value = links;
  }

  function playAudio() {
    if (audioElement) {
      audioElement.play();
    } else "f";
  }

  function playController(url) {
    if (url === audioUrl.value) {
      audioElement.play();
    } else {
      setAudioUrl(url);
      playAudio();
    }
  }

  function pauseAudio() {
    if (audioElement) {
      audioElement.pause();
    }
  }

  function setAudioElement(element) {
    audioElement = element;
  }

  function changeState() {
    isPlaying.value = !isPlaying.value;
  }

  function getState() {
    return isPlaying.value;
  }

  return {
    audioUrl,
    audioName,
    audioArtists,
    audioImage,
    audioLinks,
    hide,
    isPlaying,
    setAudioUrl,
    setInfo,
    playAudio,
    playController,
    pauseAudio,
    setAudioElement,
    changeState,
    changeHide,
    getState,
  };
});
