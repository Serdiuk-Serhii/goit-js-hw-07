import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
let instance;

galleryEl.innerHTML = createCards(galleryItems);

galleryEl.addEventListener("click", onElementOfGalleryClick);
document.addEventListener("keydown", onEscBtnClick);

function onElementOfGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
const currentElementDataSource = event.target.getAttribute("data-source");
    instance = basicLightbox.create(
    `<img src="${currentElementDataSource}" width="800" height="600">`
  );
  instance.show();
}

function createCards(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

function onEscBtnClick(event) {
    if (basicLightbox.visible() === true && event.code === "Escape") {
        instance.close();
    };
    
    return;
}
    

