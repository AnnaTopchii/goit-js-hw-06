const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Variant 1
//const makeGallery = images => {
//  return images.map(image => {
//    const listItem = document.createElement('li');
//    const listItemImage = document.createElement('img');
//    listItem.append(listItemImage);
//    listItemImage.src = image.url;
//    listItemImage.alt = image.alt;
//   listItemImage.width = 320;
//    return listItem
//  })
//}

//const listEl = makeGallery(images);
//const galleryEl = document.querySelector(".gallery");
//galleryEl.append(...listEl)


//Variant 2

const galleryEl = document.querySelector(".gallery");

const imageEl = images
  .map((image) =>
    { return `<li><img width="320" src="${image.url}"" alt="${image.alt}"/> </li>`})
  .join("");

galleryEl.insertAdjacentHTML("beforeend", imageEl)