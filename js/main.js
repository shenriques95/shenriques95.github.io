document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('item-list');

    data.forEach(item => {
        const listItem = document.createElement('li');
        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;
        const itemPlatform = document.createElement('p');
        itemPlatform.textContent = item.platform;
        listItem.appendChild(itemTitle);
        listItem.appendChild(itemPlatform);
        itemList.appendChild(listItem);
    });
});