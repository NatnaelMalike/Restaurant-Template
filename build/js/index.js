document.addEventListener("DOMContentLoaded", function () {
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

    let index = 0;
    let activeCatagory = 'breakfast';
    let hasNext = index < foods[activeCatagory].length -1;
    let hasPrev = index > 0;

    const tabInit = document.querySelector('[aria-controls="breakfast"]')
    tabInit.classList.add('active')
    renderCategory('breakfast')
    mobileRender('breakfast')

    const tabs = document.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => {
        tab.addEventListener("click", function(){
            const foodCategory = this.getAttribute("aria-controls");
            activeCatagory = foodCategory
            tabs.forEach((tab) => {
                tab.classList.remove('active');
            })
            tab.classList.add('active')
            index = 0
            renderCategory(foodCategory);
            mobileRender(foodCategory)
        });
    });
 
    function mobileRender(foodCategory) {
        let menu = foods[foodCategory];
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
            hasNext = index < foods[foodCategory].length -1;
            hasPrev = index > 0;
    }

    function renderCategory(category) {
        const foodList = foods[category];
        const menuContainer = document.getElementById("food-container");
        menuContainer.innerHTML = "";
        foodList.forEach((food) => {
            const foodItem = document.createElement("article");
            foodItem.classList.add(
                "flex",
                "flex-col",
                "gap-y-4",
                "p-4",
                "bg-tertiary"
            );
            foodItem.innerHTML = `
          <img
                        src=${food.imgAddress}
                        alt="" />
                    <h2 class="text-white text-xl">
                        ${food.title}
                    </h2>
                    <p class="text-secondary">
                        ${food.ingredients}
                    </p>
                    <div class="flex justify-between border-t pt-4">
                        <p class="text-white">${food.price} ETB</p>
                        <button>
                            <i
                                class="fa-solid fa-cart-shopping text-white"></i>
                        </button>
                    </div>
          `;
            menuContainer.appendChild(foodItem);
        });
    }


    nextBtn.addEventListener("click", handleNextClick);
    prevBtn.addEventListener("click", handlePrevClick);

    function handleNextClick() {
        if (hasNext) {
            index++;
            mobileRender(activeCatagory);
        }
    }

    function handlePrevClick() {
        if (hasPrev) {
            index--;
            mobileRender(activeCatagory);
        }
    }

})
