import CyrillicToTranslit from "cyrillic-to-translit-js";
const cyrillicToTranslit = new CyrillicToTranslit();

export const getLatinFromCyrillic = (word) => {
  if (word !== null) {
    return cyrillicToTranslit.transform(word, "").toLowerCase();
  }
};
