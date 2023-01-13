const listItems = categories.querySelectorAll('.item');
//const listItems = document.querySelector('#categories').children;
console.log(`Number of categories: ${listItems.length}`);

const listItemsDetails = listItems.forEach((item) => {
        const listItemsHeading = item.firstElementChild.textContent;
        console.log(`Category: ${listItemsHeading}`);
        const listItemsEl = item.lastElementChild.children;
        console.log(`Elements: ${listItemsEl.length}`);
    })
