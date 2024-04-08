   document.addEventListener('DOMContentLoaded', function(){
    const cartPage = document.querySelector('#cart')
    let cartPageItems = document.querySelector(".selected-foods-only");
    let cartItems = [];
    let totalQuantityEle = document.querySelector(".total-quantity-number");
    let totalPriceEle = document.querySelector(".total-price-number");
    let cartCloseBtn = document.querySelector('#cart-close')
    let cartBtn = document.querySelector('#cartButton')

    cartBtn.addEventListener('click', ()=>{
        cartPage.classList.remove('hidden')
    })
    cartCloseBtn.addEventListener('click',()=>{
        cartPage.classList.add('hidden')
    })
    function addItem(itemName, itemPrice) {
        const existingItem = cartItems.find(
            (item) => item.itemName === itemName
        );
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ itemName, itemPrice, quantity: 1 });
        }
    }

    function removeItem(index) {
        cartItems.splice(index, 1);
        updateCart();
    }

    function addOne(index) {
        cartItems[index].quantity++;
        updateCart();
    }
    function minusOne(index) {
        if (cartItems[index].quantity === 1) {
            removeItem(index);
        }
        cartItems[index].quantity--;
        updateCart();
    }
    function updateCart() {
        let totalPrice = 0;
        let totalQuantity = 0;
        cartPageItems.innerHTML = "";
        
        cartItems.forEach((item, index) => {
            let cartItems = `<div class="selected-foods flex justify-between items-center border-b border-white py-4 px-2">
            <h4 class="item-title text-white">${item.itemName}</h4>
            <p class="item-price text-white">${item.itemPrice}</p>
            <div class="item-quantity">
            <button class="minus btn-popUp text-secondary" onclick='minusOne(${index})'><i class="fa-solid fa-minus"></i></button>
            <span class="item-quantity-display text-white">${item.quantity}</span>
            <button class="plus btn-popUp text-secondary" onclick='addOne(${index})'><i class="fa-solid fa-plus"></i></button>
            </div>
            <div class="delete-item text-red-500" onclick='removeItem(${index})'><i class="fa-solid fa-trash"></i></div>
        </div>`
             
            totalPrice += parseInt(item.itemPrice) * item.quantity;
            totalQuantity += item.quantity;
        });
        totalQuantityEle.textContent = totalQuantity;
        totalPriceEle.textContent = totalPrice;
    }

    function cartAssign() {
        let addCartBtn = document.querySelectorAll(".addToCart");
        addCartBtn.forEach((btns) => {
            btns.addEventListener("click", function () {
                let itemPrice =
                    this.querySelector(".it-price .value").textContent;
                let itemName =
                    this.parentElement.querySelector(".it-name").textContent;
                addItem(itemName, itemPrice);
                updateCart();
            });
        });
    }
    // cartAssign();
   })
   