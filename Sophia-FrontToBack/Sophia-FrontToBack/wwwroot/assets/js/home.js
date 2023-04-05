"use strict"

//Currency drop-down

let currency = document.querySelector("header .up .currency-language .currency .flex");
let currencyDD = document.querySelector("header .up .currency-language .currency .drop-down");

currency.addEventListener("click", function () {
    if (currencyDD.style.opacity == "1") {
        currencyDD.style.opacity = "0";
        currencyDD.style.pointerEvents = "none";
    }

    else {
        currencyDD.style.opacity = "1";
        currencyDD.style.pointerEvents = "unset";
    }
})

for (const button of currencyDD.children) {
    button.addEventListener("click", function () {
        currency.firstElementChild.innerText = this.firstElementChild.innerText;
        currencyDD.style.opacity = "0";
        currencyDD.style.pointerEvents = "none";
    })
}

document.addEventListener("click", function (event) {
    if (event.target.closest("header .up .currency-language .currency")) return;
    currencyDD.style.opacity = "0";
    currencyDD.style.pointerEvents = "none";
})



//Language drop-down

let language = document.querySelector("header .up .currency-language .language .flex");
let languageDD = document.querySelector("header .up .currency-language .language .drop-down");

language.addEventListener("click", function () {
    if (languageDD.style.opacity == "1") {
        languageDD.style.opacity = "0";
        languageDD.style.pointerEvents = "none";
    }

    else {
        languageDD.style.opacity = "1";
        languageDD.style.pointerEvents = "unset";
    }
})

for (const button of languageDD.children) {
    button.addEventListener("click", function () {
        language.firstElementChild.setAttribute("src", this.firstElementChild.getAttribute("src"));
        language.children[1].innerText = this.lastElementChild.innerText;
        languageDD.style.opacity = "0";
        languageDD.style.pointerEvents = "none";
    })
}

document.addEventListener("click", function (event) {
    if (event.target.closest("header .up .currency-language .language")) return;
    languageDD.style.opacity = "0";
    languageDD.style.pointerEvents = "none";
})



//Cart preview

let cart = document.querySelector("header .down .cart .total");
let previewEmpty = document.querySelector("header .down .cart .preview-empty");
let preview = document.querySelector("header .down .cart .preview");

cart.addEventListener("click", function () {
    if (JSON.parse(localStorage.getItem("cart")) != null && JSON.parse(localStorage.getItem("cart")).length != 0) {
        if (preview.classList.contains("deactive")) {
            preview.classList.remove("deactive");

            preview.firstElementChild.firstElementChild.lastElementChild.innerText = `${JSON.parse(localStorage.getItem("cart")).length} ITEM`
            preview.firstElementChild.children[2].innerHTML = "";

            for (const product of JSON.parse(localStorage.getItem("cart"))) {
                preview.firstElementChild.children[2].innerHTML += `<div data-id="${product.id}" class="item">
                <div class="name-action">
                    <h4>${product.name}</h4>
                    <i class="fa-solid fa-trash"></i>
                </div>

                <div class="count-price">
                    <span>${product.count}</span>
                    <span>X</span>
                    <span>${product.price}</span>
                </div>
            </div>`
            }

            preview.firstElementChild.lastElementChild.lastElementChild.innerText = `$${totalPrice()}`;

            deleteProduct(document.querySelectorAll("header .down .cart .preview .items .item .name-action i"));
        }

        else {
            preview.classList.add("deactive");
        }
    }

    else {
        if (previewEmpty.classList.contains("deactive")) {
            previewEmpty.classList.remove("deactive");
        }

        else {
            previewEmpty.classList.add("deactive");
        }
    }
})

document.addEventListener("click", function (event) {
    if (event.target.closest("header .down .total")) return;
    previewEmpty.classList.add("deactive");
    preview.classList.add("deactive");
})



//Pages drop-down

let pages = document.querySelector("header nav ul li .drop-down").previousElementSibling;
let pagesDD = document.querySelector("header nav ul li .drop-down");

pages.addEventListener("click", function (event) {
    event.preventDefault();

    if (pagesDD.style.opacity == "1") {
        pagesDD.style.opacity = "0";
        pagesDD.style.pointerEvents = "none";
    }

    else {
        pagesDD.style.opacity = "1";
        pagesDD.style.pointerEvents = "unset";
    }
})

pagesDD.addEventListener("click", function () {
    pagesDD.style.opacity = "0";
    pagesDD.style.pointerEvents = "none";
})


document.addEventListener("click", function (event) {
    if (event.target.closest("header nav ul li")) return;
    pagesDD.style.opacity = "0";
    pagesDD.style.pointerEvents = "none";
})



//Main slider

$(document).ready(function () {
    $("main #main-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        dots: true,
        infinite: true
    });

    $("main #main-slider .slick-dots").on("click", function () {
        $("main #main-slider").slick("slickPlay");
    });

    $("main #main-slider").on("mouseover", function () {
        $("main #main-slider").slick("slickPlay");
    });
})



// Products tab-menu & carousel

let products = document.querySelectorAll("main #products .items .item");

for (const product of products) {
    product.addEventListener("mouseover", function () {
        this.lastElementChild.style.opacity = "1";
        this.lastElementChild.style.pointerEvents = "unset";
    })

    product.addEventListener("mouseout", function () {
        this.lastElementChild.style.opacity = "0";
        this.lastElementChild.style.pointerEvents = "none";
    })
}

$(document).ready(function () {
    $("main #products .items").slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
        prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    });
})

let tMButton = document.querySelectorAll("main #products .tab-menu button");
let productLists = document.querySelectorAll("main #products .items");

for (const button of tMButton) {
    button.addEventListener("click", function () {
        document.querySelector("main #products .tab-menu .active").classList.remove("active");
        this.classList.add("active");

        for (const products of productLists) {
            if (button.getAttribute("data-id") == products.getAttribute("data-id")) {
                products.style.display = "block";
            }

            else {
                products.style.display = "none";
            }
        }
    })
}



// Products' modal

let modal = document.querySelector("main #products .modal .modal-content");

for (const product of products) {
    product.lastElementChild.children[1].addEventListener("click", function () {
        modal.setAttribute("data-id", product.getAttribute("data-id"));
        modal.firstElementChild.firstElementChild.setAttribute("src", product.firstElementChild.firstElementChild.getAttribute("src"));
        modal.children[1].firstElementChild.innerText = product.children[2].innerText;
        modal.children[1].children[2].innerText = product.children[3].lastElementChild.firstElementChild.innerText + product.children[3].lastElementChild.lastElementChild.innerText;
        modal.children[1].children[6].firstElementChild.children[1].disabled = true;
        modal.parentNode.style.opacity = "1";
        modal.parentNode.style.pointerEvents = "unset";
        modal.parentNode.style.backgroundColor = "rgba(0, 0, 0, 0.3)";

        if (JSON.parse(localStorage.getItem("cart")) != null && JSON.parse(localStorage.getItem("cart")).length != 0) {
            if (JSON.parse(localStorage.getItem("cart")).find(p => p.id == product.getAttribute("data-id")) != undefined) {
                modal.lastElementChild.lastElementChild.previousElementSibling.firstElementChild.children[1].value = JSON.parse(localStorage.getItem("cart")).find(p => p.id == product.getAttribute("data-id")).count;
                modal.children[1].children[6].firstElementChild.children[1].disabled = false;
            }

            else {
                modal.lastElementChild.lastElementChild.previousElementSibling.firstElementChild.children[1].value = 1;
            }
        }

        else {
            modal.lastElementChild.lastElementChild.previousElementSibling.firstElementChild.children[1].value = 1;
        }

        document.querySelector("body").style.overflow = "hidden";
    })
}

modal.children[1].children[6].firstElementChild.lastElementChild.addEventListener("click", function () {
    let updatedProducts = JSON.parse(localStorage.getItem("cart"));

    if (updatedProducts.find(p => p.id == modal.getAttribute("data-id")) != undefined) {
        let count = parseInt(modal.children[1].children[6].firstElementChild.children[1].value) + 1;
        modal.children[1].children[6].firstElementChild.children[1].value = count;

        updatedProducts.find(p => p.id == modal.getAttribute("data-id")).count = modal.children[1].children[6].firstElementChild.children[1].value;
        localStorage.setItem("cart", JSON.stringify(updatedProducts));
    }
})

modal.children[1].children[6].firstElementChild.firstElementChild.addEventListener("click", function () {
    if (parseInt(modal.children[1].children[6].firstElementChild.children[1].value) > 1) {
        let updatedProducts = JSON.parse(localStorage.getItem("cart"));

        if (updatedProducts.find(p => p.id == modal.getAttribute("data-id")) != undefined) {
            let count = parseInt(modal.children[1].children[6].firstElementChild.children[1].value) - 1;
            modal.children[1].children[6].firstElementChild.children[1].removeAttribute("disabled");

            modal.children[1].children[6].firstElementChild.children[1].value = count;

            updatedProducts.find(p => p.id == modal.getAttribute("data-id")).count = modal.children[1].children[6].firstElementChild.children[1].value;
            localStorage.setItem("cart", JSON.stringify(updatedProducts));
        }
    }
})

modal.children[1].children[7].addEventListener("click", function () {
    modal.parentNode.style.opacity = "0";
    modal.parentNode.style.pointerEvents = "none";
    modal.parentNode.style.backgroundColor = "unset";
    document.querySelector("body").style.overflow = "unset";
})

window.addEventListener("click", function (event) {
    if (event.target == modal.parentNode) {
        modal.parentNode.style.opacity = "0";
        modal.parentNode.style.pointerEvents = "none";
        modal.parentNode.style.backgroundColor = "unset";
        document.querySelector("body").style.overflow = "unset";
    }
})



// Cart

let productsCart = [];
let addToCart = document.querySelectorAll("main #products .items .item .center button");
let productsCountInCart = document.querySelector("header .down .cart .total").children[1];

if (JSON.parse(localStorage.getItem("cart")) != null) {
    productsCart = JSON.parse(localStorage.getItem("cart"));
}

for (const add of addToCart) {
    add.addEventListener("click", function () {
        if (JSON.parse(localStorage.getItem("cart")) != null) {
            productsCart = JSON.parse(localStorage.getItem("cart"));
        }
        
        let productImg = this.parentNode.parentNode.firstElementChild.firstElementChild.getAttribute("src");
        let productName = this.parentNode.parentNode.children[2].innerText;
        let productPrice = parseFloat(this.parentNode.previousElementSibling.lastElementChild.lastElementChild.innerText);
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

        let existProduct = productsCart.find(p => p.id == productId);

        if (existProduct != undefined) {
            existProduct.count++;
        }

        else {
            productsCart.push({
                id: productId,
                imageUrl: productImg,
                name: productName,
                price: productPrice,
                count: 1
            })
        }

        localStorage.setItem("cart", JSON.stringify(productsCart));

        let alert = document.querySelector("main #products .alert");

        alert.firstElementChild.innerText = `${productName} has been added to the cart`;

        alert.style.opacity = "1";
        alert.style.pointerEvents = "unset";

        setInterval(() => {
            alert.style.opacity = "0";
            alert.style.pointerEvents = "none";
        }, 4000);

        if (JSON.parse(localStorage.getItem("cart")) != null && JSON.parse(localStorage.getItem("cart")).length != 0) {
            productsCountInCart.innerText = productsCart.length;
            productsCountInCart.nextElementSibling.nextElementSibling.innerText = totalPrice();
        }
    })
}

if (JSON.parse(localStorage.getItem("cart")) != null && JSON.parse(localStorage.getItem("cart")).length != 0) {
    productsCountInCart.innerText = productsCart.length;
    productsCountInCart.nextElementSibling.nextElementSibling.innerText = totalPrice();
}



// Wishlist

let productsWishlist = [];
let addToWishlist = document.querySelectorAll("main #products .items .item .options li:nth-child(1) i");

if (JSON.parse(localStorage.getItem("wishlist")) != null) {
    productsWishlist = JSON.parse(localStorage.getItem("wishlist"));
}

for (const add of addToWishlist) {
    add.addEventListener("click", function () {
        let productImg = this.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.getAttribute("src");
        let productName = this.parentNode.parentNode.parentNode.children[2].innerText;
        let productPrice = parseFloat(this.parentNode.parentNode.previousElementSibling.previousElementSibling.lastElementChild.lastElementChild.innerText);
        let productId = parseInt(this.parentNode.parentNode.parentNode.getAttribute("data-id"));

        let existProduct = productsWishlist.find(p => p.id == productId);

        if (existProduct != undefined) {
            productsWishlist = productsWishlist.filter(p => p.id != productId);
            add.classList.add("fa-regular");
            add.classList.remove("fa-solid");

            let alert = document.querySelector("main #products .alert");

            alert.firstElementChild.innerText = `${productName} has been removed from the wishlist`;

            alert.style.opacity = "1";
            alert.style.pointerEvents = "unset";

            setInterval(() => {
                alert.style.opacity = "0";
                alert.style.pointerEvents = "none";
            }, 4000);
        }

        else {
            productsWishlist.push({
                id: productId,
                imageUrl: productImg,
                name: productName,
                price: productPrice,
            })

            let alert = document.querySelector("main #products .alert");

            alert.firstElementChild.innerText = `${productName} has been added to the wishlist`;

            alert.style.opacity = "1";
            alert.style.pointerEvents = "unset";

            setInterval(() => {
                alert.style.opacity = "0";
                alert.style.pointerEvents = "none";
            }, 4000);

            add.classList.remove("fa-regular");
            add.classList.add("fa-solid");
        }

        localStorage.setItem("wishlist", JSON.stringify(productsWishlist));
    })

    if (productsWishlist.find(p => p.id == parseInt(add.parentNode.parentNode.parentNode.getAttribute("data-id"))) != undefined) {
        add.classList.remove("fa-regular");
        add.classList.add("fa-solid");
    }

    else {
        add.classList.add("fa-regular");
        add.classList.remove("fa-solid");
    }
}

// Product details

let productDetails;
let seeProductsDetails = document.querySelectorAll("main  #products .items .item a");

for (const seeProductDetails of seeProductsDetails) {
    seeProductDetails.addEventListener("click", function() {
        let productImg = this.firstElementChild.getAttribute("src");
        let productName = this.nextElementSibling.nextElementSibling.innerText;
        let productPrice = parseFloat(this.parentNode.children[3].lastElementChild.lastElementChild.innerText);
        let productId = parseInt(this.parentNode.getAttribute("data-id"));

        productDetails = {
            id: productId,
            imageUrl: productImg,
            name: productName,
            price: productPrice
        }

        localStorage.setItem("productDetails", JSON.stringify(productDetails));
    })
}




// Functions

function totalPrice() {
    let totalPriceValue = 0;

    for (const product of JSON.parse(localStorage.getItem("cart"))) {
        totalPriceValue += product.price * product.count;
    }

    return totalPriceValue;
}

function deleteProduct(deleteProductBtns) {
    if (JSON.parse(localStorage.getItem("cart")) != null && JSON.parse(localStorage.getItem("cart")).length != 0) {
        for (const deleteProductBtn of deleteProductBtns) {
            deleteProductBtn.addEventListener("click", function () {
                let productsCart = JSON.parse(localStorage.getItem("cart"));

                productsCart = productsCart.filter(p => p.id != parseInt(this.parentNode.parentNode.getAttribute("data-id")));

                localStorage.setItem("cart", JSON.stringify(productsCart));

                productsCountInCart.innerText = productsCart.length;
                productsCountInCart.nextElementSibling.nextElementSibling.innerText = totalPrice();
            })
        }
    }
}