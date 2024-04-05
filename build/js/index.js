
document.addEventListener('DOMContentLoaded',function (){
    
    const foods = {
        breakfast: [
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04a2cb50e555f9bdf6ea0_healthy-vegan-salad.png",
                title: "Healthy Vegan Salad",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 112.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04a2cb50e555f9bdf6ea0_healthy-vegan-salad.png",
                title: "Healthy Vegan Salad",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 112.86,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04907b5f34f7415108a6a_chicken-veg-rice-bowl.png",
                title: "Chicken Veg Rice Bowl",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 112.87,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63eda38e387ec16504f371ed_italian-shrimp-pasta.png",
                title: "Italian Shrimp Pasta",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 112.88,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63e3332b2a73c83dda97a803_12.png",
                title: "Spaghetti With Shrimp ",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 112.89,
            },
        ],
        lunch: [
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04a2cb50e555f9bdf6ea0_healthy-vegan-salad.png",
                title: "Healthy Vegan Salad",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 11.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04a2cb50e555f9bdf6ea0_healthy-vegan-salad.png",
                title: "Healthy Vegan Salad",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 11.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04907b5f34f7415108a6a_chicken-veg-rice-bowl.png",
                title: "Chicken Veg Rice Bowl",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 11.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63eda38e387ec16504f371ed_italian-shrimp-pasta.png",
                title: "Italian Shrimp Pasta",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 11.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63e3332b2a73c83dda97a803_12.png",
                title: "Spaghetti With Shrimp ",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 11.85,
            },
        ],
        brunch: [
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04a2cb50e555f9bdf6ea0_healthy-vegan-salad.png",
                title: "Healthy Vegan Salad",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04a2cb50e555f9bdf6ea0_healthy-vegan-salad.png",
                title: "Healthy Vegan Salad",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04907b5f34f7415108a6a_chicken-veg-rice-bowl.png",
                title: "Chicken Veg Rice Bowl",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63eda38e387ec16504f371ed_italian-shrimp-pasta.png",
                title: "Italian Shrimp Pasta",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63e3332b2a73c83dda97a803_12.png",
                title: "Spaghetti With Shrimp ",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
        ],
        dinner: [
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04a2cb50e555f9bdf6ea0_healthy-vegan-salad.png",
                title: "Healthy Vegan Salad",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04a2cb50e555f9bdf6ea0_healthy-vegan-salad.png",
                title: "Healthy Vegan Salad",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04907b5f34f7415108a6a_chicken-veg-rice-bowl.png",
                title: "Chicken Veg Rice Bowl",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63eda38e387ec16504f371ed_italian-shrimp-pasta.png",
                title: "Italian Shrimp Pasta",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63e3332b2a73c83dda97a803_12.png",
                title: "Spaghetti With Shrimp ",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
        ],
        drinks: [
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04a2cb50e555f9bdf6ea0_healthy-vegan-salad.png",
                title: "Healthy Vegan Salad",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04a2cb50e555f9bdf6ea0_healthy-vegan-salad.png",
                title: "Healthy Vegan Salad",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63f04907b5f34f7415108a6a_chicken-veg-rice-bowl.png",
                title: "Chicken Veg Rice Bowl",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63eda38e387ec16504f371ed_italian-shrimp-pasta.png",
                title: "Italian Shrimp Pasta",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
            {
                imgAddress:
                    "https://assets.website-files.com/63d61449103cc0c595394427/63e3332b2a73c83dda97a803_12.png",
                title: "Spaghetti With Shrimp ",
                ingredients:
                    "Rice Spagherri, Latus, Shrimp, Onion Lemon, Garlic, Coriander",
                price: 111.85,
            },
        ],
    };
    
    const nextBtn = document.querySelector("#nextBtn");
    const prevBtn = document.querySelector("#prevBtn");
    const displayedFood = document.querySelector("#displayed-food");
    const foodContainer = document.querySelector("#food-container");
    let screenWidth = 0;
    let index = 0;
    let activeCatagory = null;
    let hasNext = null;
    let hasPrev = null;
    
    function updateViewportSize() {
        screenWidth = window.innerWidth || document.documentElement.clientWidth;
    }
    
    updateViewportSize();
    window.addEventListener("resize", function () {
        updateViewportSize();
    });

    const tabs = document.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => {
        tab.addEventListener("click", handleMenuClick);
    });

    function handleMenuClick(e) {
        const clicked = e.target;
        const foodCategory = clicked.getAttribute('aria-controls');
        activeCatagory = foodCategory;
        if (screenWidth < 640) {
            index = 0;
            changeFoodMobile(activeCatagory);
        } else {
            foodContainer.innerHTML = "";
            renderFoods(activeCatagory);
        }
    }

    function changeFoodMobile(foodCategory) {
        let menu = foods[foodCategory];
        hasNext = index < menu.length - 1;
        hasPrev = index > 0;
        let foodItem = menu[index];
        displayedFood.innerHTML = `
            <article
                class="flex flex-col gap-y-4 p-4 bg-tertiary">
                <img
                    src=${foodItem.imgAddress}
                    alt="" />
                <h2 class="text-white text-xl">
                    ${foodItem.title}
                </h2>
                <p class="text-secondary">
                    ${foodItem.ingredients}
                </p>
                <div class="flex justify-between border-t pt-4">
                    <p class="text-white">${foodItem.price} ETB</p>
                    <button>
                        <i
                            class="fa-solid fa-cart-shopping text-white"></i>
                    </button>
                </div>
            </article>
            `;
    }

    function renderFoods(foodsCategory) {
        const menu = foods[foodsCategory];
        foodContainer.innerHTML = '';
        menu.forEach((foodItem) => {
            foodContainer.innerHTML += `
            <article
                class="flex flex-col gap-y-4 p-4 bg-tertiary">
                <img
                    src=${foodItem.imgAddress}
                    alt="" />
                <h2 class="text-white text-xl">
                    ${foodItem.title}
                </h2>
                <p class="text-secondary">
                    ${foodItem.ingredients}
                </p>
                <div class="flex justify-between border-t pt-4">
                    <p class="text-white">${foodItem.price} ETB</p>
                    <button>
                        <i
                            class="fa-solid fa-cart-shopping text-white"></i>
                    </button>
                </div>
            </article>
            `;
        });
    }

    if (screenWidth < 640) {
        changeFoodMobile('breakfast');
    } else {
        renderFoods('breakfast');
    }

    nextBtn.addEventListener("click", handleNextClick);
    prevBtn.addEventListener("click", handlePrevClick);

    function handleNextClick() {
        if (hasNext) {
            index++;
            changeFoodMobile(activeCatagory);
        }
    }

    function handlePrevClick() {
        if (hasPrev) {
            index--;
            changeFoodMobile(activeCatagory);
        }
    }
});


