document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('item-list');

    data.forEach(item => {
        const listItem = document.createElement('li');
        const itemCover = document.createElement('img');
        // const itemTitle = document.createElement('h3');
        const itemStatus = document.createElement('p');

        itemCover.classList.add('cover');
        itemCover.src = "./images/covers/" + item.cover + ".jpg";
        itemCover.alt = item.title + " cover";

        // itemTitle.textContent = item.title;
        itemStatus.textContent = item.status;

        listItem.appendChild(itemCover);
        //listItem.appendChild(itemTitle);
        listItem.appendChild(itemStatus);
        itemList.appendChild(listItem);
    });
});