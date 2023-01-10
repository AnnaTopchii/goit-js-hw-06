const listItems = categories.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`);

const listItemsDetails = listItems.forEach((item) => {
        const listItemsHeading = item.querySelector('h2').textContent;
        console.log(`Category: ${listItemsHeading}`);
        const listItemsEl = item.querySelectorAll('li');
        console.log(`Elements: ${listItemsEl.length}`);
    })
