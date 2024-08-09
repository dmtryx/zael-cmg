// store.js usando Pinia y la sintaxis setup
import { defineStore } from "pinia";
import { ref } from "vue";

export const useImageStore = defineStore("imageStore", () => {
  // Estado
  const imageDictionary = ref({
    logo: "ruta-de-tu-logo.jpg",
    banner: "ruta-de-tu-banner.jpg",
    avatar: "ruta-de-tu-avatar.jpg",
  });

  const loadedImages = ref({});

  // Acciones
  const preloadImages = () => {
    Object.values(imageDictionary.value).forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages.value[url] = true;
      };
    });

    console.log(loadedImages);
  };

  const isImageLoaded = (imageKey) => {
    const url = imageDictionary.value[imageKey];
    return !!loadedImages.value[url];
  };

  return {
    imageDictionary,
    loadedImages,
    preloadImages,
    isImageLoaded,
  };
});
