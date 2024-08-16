import { defineStore } from "pinia";
import { ref } from "vue";

export const useMusicStore = defineStore("music", () => {
  const audioUrl = ref("");
  const audioName = ref("");
  const audioArtists = ref("");
  const audioImage = ref("");
  const audioLinks = ref([""]);
  const hide = ref(true);
  const isAlbum = ref(false);
  const isSong = ref(true);
  const isPlaying = ref(false);
  let audioElement = null;

  function setAudioUrl(url) {
    audioUrl.value = url;
    if (audioElement) {
      audioElement.src = url; // Actualizar la fuente del audioElement
    }
  }

  function setHide(value) {
    hide.value = value;
  }

  function setIsSong(value) {
    isSong.value = value;
  }

  function setInfo(tp, name, artists, image, links) {
    isSong.value = tp;
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

  //  function playController(url, "tr") {
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
    isSong,
    isPlaying,
    isAlbum,
    setAudioUrl,
    setIsSong,
    setInfo,
    playAudio,
    playController,
    pauseAudio,
    setAudioElement,
    changeState,
    setHide,
    getState,
  };
});
