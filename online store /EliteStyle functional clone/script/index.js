let bagItems;
onLoad();
function onLoad(){
    let bagItemStr = localStorage.getItem("bagItems")
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsOnHomePage();
    displayBagItems();
}



function addTOBag(itemId){
    bagItems.push(itemId)
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagItems()
};
function displayBagItems(){
    let bagElement = document.querySelector('.bag-items');
    if (bagItems.length > 0){
        bagElement.style.visibility = 'visible';
        bagElement.innerText = bagItems.length;
    }else{
        bagElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }

    let innerHTML = '';
    items.forEach (item => {
        innerHTML += 
        `
        <div class="item-container">

            <img class="item-imageS" src="${item.image}" alt="item image">
            <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
            <div class="camp-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>

            <div class="price">

                <span class="current-price">RS${item.current_price}</span>
                <span class="original-price"> RS ${item.original_price}</span>
                <span class="discount">[${item.discount_percentage}% OFF]</span>
            </div>

            <button class="btn-add-bag" onclick ="addTOBag(${item.id})">Add To Bag</button>
            
        </div>`;
})



itemsContainerElement.innerHTML= innerHTML;
}

