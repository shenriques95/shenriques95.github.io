document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('item-list');

    // Define your custom sorting order with the new categories and emojis
    const statusOrder = {
        'Now Playing 🎮': 1,
        '100% 🏆': 2,
        'Beat ✅': 3,
        'Backlog 🗃️': 4,
        'Wishlist 🎁': 5
    };

    // Sort the data array based on the custom order
    data.sort((a, b) => {
        const statusA = a.status;
        const statusB = b.status;

        // Get the numerical order for each status
        // Use a default high number (e.g., 99) for any status not found in your defined order,
        // which will place them at the end.
        const orderA = statusOrder[statusA] || 99;
        const orderB = statusOrder[statusB] || 99;

        return orderA - orderB;
    });

    // Loop through the now sorted data and append items to the list
    data.forEach(item => {
        const listItem = document.createElement('li');
        const itemCover = document.createElement('img');
        const itemStatus = document.createElement('p');

        itemCover.classList.add('cover');
        itemCover.src = "./images/covers/" + item.cover + ".jpg";
        itemCover.alt = item.title + " cover";

        itemStatus.textContent = item.status;
        itemStatus.classList.add('item-status'); // Good for styling or further JS manipulation

        listItem.appendChild(itemCover);
        listItem.appendChild(itemStatus);
        itemList.appendChild(listItem);
    });
});