var allCurrency = ["$ USD", "€ EURO", "$ CAD", ">₹ INR", "¥ CNY", "৳ BDT"];

var allLanguages = ["English", "Español", "Filipino", "Français", "العربية", "हिन्दी", "বাংলা"];

var allShoppingList = [
    {
        img: "assets/images/header/cart-items/item1",
        name: "Apple Watch Series 6",
        quantity: [1],
        price: 99.0,
    },

    {
        img: "assets/images/header/cart-items/item2",
        name: "Wi-Fi Smart Camera",
        quantity: [1],
        price: 35.0,
    },
];

var allNavCategories = ["Electronics","accessories","Televisions","best selling","top 100 offer","sunglass","watch","man’s product","Home Audio & Theater","Computers & Tablets","Video Games","Home Appliances"];

var sideProducts = {
    img: "assets/images/hero/slider-bnr.jpg",
    title: "New line required",
    name: "iPhone 12 Pro Max",
    price: 259.99,
};


var allSaleProducts = {
    trends: [
        {
            img: "assets/images/products/product-",
            category: "Watches",
            name: "Xiaomi Mi Band 5",
            point: 4.0,
            price: 199.0,
        },

        {
            img: "assets/images/products/product-",
            category: "Speaker",
            name: "Big Power Sound Speaker",
            point: 5.0,
            tag: 25,
            price: 300.0,
        },

        {
            img: "assets/images/products/product-",
            category: "Camera",
            name: "WiFi Security Camera",
            point: 5.0,
            price: 399.0,
        },

        {
            img: "assets/images/products/product-",
            category: "Phones",
            name: "Iphone 6X Plus",
            point: 5.0,
            tag: "New",
            price: 400.0,
        },

        {
            img: "assets/images/products/product-",
            category: "Headphones",
            name: "Wireless Headphones",
            point: 5.0,
            price: 350.0,
        },

        {
            img: "assets/images/products/product-",
            category: "Speaker",
            name: "Mini Bluetooth Speaker",
            point: 4.0,
            price: 70.0,
        },

        {
            img: "assets/images/products/product-",
            category: "Headphones",
            name: "PX7 Wireless Headphones",
            point: 4.0,
            tag: 50,
            price: 200.0,
        },

        {
            img: "assets/images/products/product-",
            category: "Laptop",
            name: "Apple MacBook Air",
            point: 5.0,
            price: 899.0,
        },
    ],

    others: [
        {
            img: "assets/images/banner/banner-",
            name: "Smart Watch 2.0",
            desc: "Space Gray Aluminum Case with" + "<br>" + "Black/Volt Real Sport Band",
            action: "View Details",
        },

        {
            img: "assets/images/banner/banner-",
            name: "Smart Headphone",
            desc: "Lorem ipsum dolor sit amet," +"<br>" +"eiusmod tempor incididunt ut labore.",
            action: "Shop Now",
        },
    ],
};

function LoadDataOnPage() {
    
    var dvPreLoader = document.getElementById("preLoader");
    var scltCurreny = document.getElementById("select4");
    var scltLanguage = document.getElementById("select5");
    var ulCart = document.getElementById("shopping-list");
    var ulCategories = document.getElementById("sub-category");
    var dvSideFeatures = document.getElementsByClassName("hero-banner");
    var dvTrends = document.getElementById("all-trend-product");
    var dvOthers = document.getElementById("other-products");

    if (dvPreLoader.innerHTML !== undefined) {
        dvPreLoader.className = "d-none";
    }

    if (dvPreLoader.className === "d-none") {
        if (allCurrency.length !== 0) {
            GenerateOptionElem(allCurrency, scltCurreny, "<option>");
        }

        if (allLanguages.length !== 0) {
            GenerateOptionElem(allLanguages, scltLanguage, "<option>");
        }

        if (allShoppingList.length !== 0) {
            GenerateShopListItem(allShoppingList, ulCart, "<li>");
        }

        if (allNavCategories.length !== 0) {
            GenerateNavElem(allNavCategories, ulCategories, "<li>");
        }

        if (sideProducts.length !== 0) {
            GenerateSideProduct(sideProducts, dvSideFeatures);
        }

        if (allSaleProducts.trends.length !== 0) {
            GenerateTrendProduct(allSaleProducts.trends, dvTrends, "<div class='col-lg-3 col-md-6 col-12'>");
        }

        if (allSaleProducts.others.length !== 0) {
            GenerateOtherProduct(allSaleProducts.others, dvOthers, "<div class='col-lg-6 col-md-6 col-12'>");
        }
    }
}

function GenerateOptionElem(allDataList, parentElem, childElem){
    allDataList.forEach((data) => {
        parentElem.innerHTML += childElem + data;
    });
}

function GenerateShopListItem(allShoppingList, parentElem, childElem){
    var productCountItems = document.getElementById("total-product-items");
    var totalPrice = document.getElementById("total-amount");
    var spanTotalCard = document.getElementById("total-product");
    var removeProduct = '<a href="javascript:void(0)" class="remove" title="Remove this item"><i class="lni lni-close"></i></a>';

    spanTotalCard.innerText = CountProductList(allShoppingList);
    productCountItems.innerText = CountProductList(allShoppingList);
    totalPrice.innerText = TotalProductListPrice(allShoppingList);
    
    allShoppingList.forEach((item) => {
        parentElem.innerHTML += childElem + removeProduct +'<div class="cart-img-head">' +'<a class="cart-img" href="#">' +'<img src="' + item.img +'.jpg">' +"</a>" +"</div>" +'<div class="content"><h4><a href="#">' + item.name + "</a></h4>" +'<p class="quantity">' + TotalQuantityValue(item.quantity) + "x" +"- " +"$" +'<span class="price">' + item.price +".00</span></p></div>";
    });
}

function GenerateNavElem(allCategoryList, parentElem, childElem){
    allCategoryList.forEach((item) => {
        parentElem.innerHTML += childElem + '<a href="#">' + item + "</a>";
    });
}

function GenerateSideProduct(sideProductData, parentElem){
    parentElem[0].innerHTML = "<h2>" +"<span>" + sideProductData.title +"</span>" + sideProductData.name +"</h2>" +"<h3>" + sideProductData.price +"</h3>";
}

function GenerateTrendProduct(allSaleProductList, parentElem, childElem){
    allSaleProductList.forEach((product, index) => {

        if(product.tag){
            if(product.tag !== "New"){
                parentElem.innerHTML += childElem + '<div class="single-product"><div class="product-image">' +'<img src="' + product.img + index +'.jpg">' +'<span class="sale-tag">' +"-" + product.tag +"%" +"</span>" +'<div class="button add-to-cart" id="' + index +'" onclick="AddToCart(' + index +');">' +'<a class="btn"><i class="lni lni-cart"></i> Add to Cart</a></div></div>' +'<div class="product-info"><span class="category">' + product.category +"</span>" +'<h4 class="title"><a href="#">' + product.name +'</a></h4><ul class="review">' + GenerateReviewElem(product.point) +"</ul>" +'<div class="price">' +"<span>" +"$" +(product.price - (product.price * product.tag) / 100) +".00" +"</span>" +'<span class="discount-price">' + "$" + product.price +".00" +"</span></div></div></div>";
            }
            else {
                parentElem.innerHTML += childElem + '<div class="single-product"><div class="product-image">' +'<img src="' + product.img + index +'.jpg">' +'<span class="new-tag">' + product.tag + "</span>" +'<div class="button add-to-cart" id="' + index +'" onclick="AddToCart(' + index +');">' +'<a class="btn"><i class="lni lni-cart"></i> Add to Cart</a></div></div>' +'<div class="product-info"><span class="category">' + product.category +"</span>" +'<h4 class="title"><a href="#">' + product.name +'</a></h4><ul class="review">' + GenerateReviewElem(product.point) +"</ul>" +'<div class="price">' +"<span>" +"$" + product.price +".00" +"</span></div></div></div>";
            }
        }

        else {
            parentElem.innerHTML += childElem + '<div class="single-product"><div class="product-image">' +'<img src="' + product.img + index +'.jpg">' + '<div class="button add-to-cart" id="' + index +'" onclick="AddToCart(' + index +');">' +'<a class="btn"><i class="lni lni-cart"></i> Add to Cart</a></div></div>' +'<div class="product-info"><span class="category">' + product.category +"</span>" +'<h4 class="title"><a href="#">' + product.name +'</a></h4><ul class="review">' + GenerateReviewElem(product.point) +"</ul>" +'<div class="price">' +"<span>" +"$" + product.price +".00" +"</span></div></div></div>";
        }
    });
}

function GenerateOtherProduct(allOtherList, parentElem, childElem){
    allOtherList.forEach((product, index) => {
        parentElem.innerHTML += childElem + `<div class="single-banner" style="background-image: url(assets/images/banner/banner-${index}-bg.jpg)"><div class="content"><h2> ${product.name} </h2><p> ${product.desc} </p><div class="button"><a class="btn"> ${product.action} </a></div></div></div>`;
    });
}

function TotalQuantityValue(quantity) {
    var result = 0;

    for (let i = 0; i < quantity.length; i++) {
        result += quantity[i];
    }

    return result;
}

function CountProductList(data) {
    var result = 0;

    for (let i = 0; i < data.length; i++) {
        result += data[i].quantity.length;
    }

    return result;
}

function TotalProductListPrice(data) {
    var result = 0;

    for (let i = 0; i < data.length; i++) {
        result += data[i].quantity.length * data[i].price;
    }

    return result;
}

function AddToCart(index) {
    var addToProduct;
    var ulCartList = document.getElementById("shopping-list");
    ulCartList.innerHTML = "";

    if (allSaleProducts.trends[index].tag && allSaleProducts.trends[index].tag !== "New") {
        
        addToProduct = 
        {
            img: allSaleProducts.trends[index].img + index,
            name: allSaleProducts.trends[index].name,
            price: allSaleProducts.trends[index].price - (allSaleProducts.trends[index].price * allSaleProducts.trends[index].tag) / 100,
            quantity: [1],
        };

    } 
    else {
        addToProduct = {
            img: allSaleProducts.trends[index].img + index,
            name: allSaleProducts.trends[index].name,
            price: allSaleProducts.trends[index].price,
            quantity: [1],
        };
    }

    if (IsThereProduct(addToProduct)) {        
        GenerateShopListItem(allShoppingList, ulCartList, "<li>");
        return;

    } 
    else {
        allShoppingList.push(addToProduct);
        GenerateShopListItem(allShoppingList, ulCartList, "<li>");
    }
}

function IsThereProduct(addToProduct) {
    
    var result = false;

    allShoppingList.forEach((product) => {
        
        if ( product.img === addToProduct.img && product.name === addToProduct.name && product.price === addToProduct.price ) {
            
            product.quantity.push(1);
            result = true;
        }
    });

    return result;
}

function GenerateReviewElem(point) {
    
    var review;

    if (point === 5) {
        
        review = '<li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><span>' + point + ".0 Review(s)</span></li>";
    } 
    else if (point === 4) {
        
        review = ' <li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star-filled"></i></li><li><i class="lni lni-star"></i></li><li><span>' + point + ".0 Review(s)</span></li>";
    }

    return review;
}

function UserSıgnInView() {
    
    document.getElementById("sign-in").className = "sign-in";
    document.getElementById("eCommerceApp").style.overflow = "hidden";
}

function UserRegisterView() {
    
    document.getElementById("register").className = "register";
    document.getElementById("eCommerceApp").style.overflow = "hidden";
}

function SıgnIn(event) {
    
    var users = {
        name: "",
        surname: "",
        mail: "",
        password: "",
    };

    var iName = document.getElementById("s-name");
    var iSurname = document.getElementById("s-surname");
    var iMail = document.getElementById("s-email");
    var iPassword = document.getElementById("s-password");
    var iRePassword = document.getElementById("s-re-password");

    event.preventDefault();

    if (IsEmptyUserData(iName.value, iSurname.value, iMail.value, iPassword.value, iRePassword.value)) {
        return;
    }

    users.name = iName.value;
    users.surname = iSurname.value;
    users.mail = iMail.value;
    users.password = iPassword.value;

    allUsers.push(users);
    iName.value = "";
    iSurname.value = "";
    iMail.value = "";
    iPassword.value = "";
    iRePassword.value = "";

    alert("You Registered!");

    Exit();
}

function IsEmptyUserData(iName, iSurname, iMail, iPassword, iRePassword) {
    
    var result = false;
    var messageDisplay = document.getElementById("s-msg-sign-in");
    var message = document.getElementById("s-message");

    if ( iName === "" || iSurname === "" || iMail === "" || iPassword === "" || iRePassword === "" ) {
        
        messageDisplay.className = "message";
        message.innerText = "Fill The Informations!";
        result = true;
    } 
    else if (iPassword !== iRePassword) {
        
        messageDisplay.className = "message";
        message.innerText = "Password Do Not Match!";
        result = true;
    }

    allUsers.forEach((user) => {
        if (user.mail === iMail) {
            messageDisplay.className = "message";
            message.innerText = "You Have Already Registered!";
            result = true;
        }
    });

    return result;
}

function Register(event) {
    
    var iMail = document.getElementById("r-email");
    var iPassword = document.getElementById("r-password");
    var messageDisplay = document.getElementById("r-msg-sign-in");
    var message = document.getElementById("r-message");

    event.preventDefault();

    if ( iMail.value === "" || iPassword.value === "" ) {
        
        messageDisplay.className = "message";
        message.innerText = "Fill The Informations!";
        return;
    }

    allUsers.forEach((user) => {
        
        if (user.mail === iMail.value) {
            if ( user.password === iPassword.value ) {
                
                alert("You Logged In!");
                Exit();
                document.getElementById("user-login").className += " d-none";
                document.getElementById("user-name").innerText = user.name;

            } 
            else {
                
                messageDisplay.className = "message";
                message.innerText = "Did You Forgot Password?";
            }
        }
        else {
            
            messageDisplay.className = "message";
            message.innerText = "You Are Not Registered!";
        }
    });
}

function Exit() {
    
    var dvUserSıgnIn = document.getElementById("sign-in");
    var dvUserRegister = document.getElementById("register");

    if (dvUserSıgnIn.className === "sign-in") {
        dvUserSıgnIn.className += " d-none";
    } 
    
    else if (dvUserRegister.className === "register") {
        dvUserRegister.className += " d-none";
    }
    
    document.getElementById("eCommerceApp").style.overflow = "auto";
}
