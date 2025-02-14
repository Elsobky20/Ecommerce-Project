var currrentimage=1;
function Slider()
{ 
    if(currrentimage==3)
    {
        currrentimage=0
    }
    var image=document.getElementById("imgnow")
    image.setAttribute("style", 'background-image: url("../imgs/banner'+(++currrentimage)+'.jpg")')
    
} 

setInterval(Slider,3000)

function Clothes()
{
    var clothes=document.querySelector('.product .all-clothes')
    var bags=document.querySelector('.product .all-bags')
    var phones=document.querySelector('.product .all-phones')
    var footwear=document.querySelector('.product .all-footwear')
    clothes.style.display="block"
    bags.style.display="none"
    phones.style.display="none"
    footwear.style.display="none"
    
}
function Bags()
{
    var clothes=document.querySelector('.product .all-clothes')
    var bags=document.querySelector('.product .all-bags')
    var phones=document.querySelector('.product .all-phones')
    var footwear=document.querySelector('.product .all-footwear')
    clothes.style.display="none"
    bags.style.display="block"
    phones.style.display="none"
    footwear.style.display="none"
}
function Phones()
{
    var clothes=document.querySelector('.product .all-clothes')
    var bags=document.querySelector('.product .all-bags')
    var phones=document.querySelector('.product .all-phones')
    var footwear=document.querySelector('.product .all-footwear')
    clothes.style.display="none"
    bags.style.display="none"
    phones.style.display="block"
    footwear.style.display="none"
}
function Footwear()
{
    var clothes=document.querySelector('.product .all-clothes')
    var bags=document.querySelector('.product .all-bags')
    var phones=document.querySelector('.product .all-phones')
    var footwear=document.querySelector('.product .all-footwear')
    clothes.style.display="none"
    bags.style.display="none"
    phones.style.display="none"
    footwear.style.display="block"
}



function Login() {
    let isValid = true;  
    var validName = document.getElementById("name");
    var regName = /^[a-zA-Z ]{2,30}$/;
    if (!String(validName.value).match(regName)) {
        document.getElementById("validname").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("validname").style.display = "none";
    }

   
    var validEmail = document.getElementById("email");
    var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!String(validEmail.value).match(emailPattern)) {
        document.getElementById("validemail").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("validemail").style.display = "none";
    }

    var validPassword = document.getElementById("password");
    if (validPassword.value === '' || validPassword.value.trim() === '' || validPassword.value.length < 6) {
        document.getElementById("validpassword").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("validpassword").style.display = "none";
    }

    var validConfirmPassword = document.getElementById("confirm");
    if (validConfirmPassword.value === '' || validConfirmPassword.value.trim() === '' || validConfirmPassword.value.length < 6 || validConfirmPassword.value !== validPassword.value) {
        document.getElementById("validconfirmpassword").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("validconfirmpassword").style.display = "none";
    }

   
    if (isValid) {
        // const userData = {
        //     name: validName.value,
        //     email: validEmail.value,
        //     password: validPassword.value,
        // };
        // localStorage.setItem("user", JSON.stringify(userData));
        // Swal.fire({
        //     icon: "success",
        //     title: "Registration Successful",
        //     text: "Your account has been created successfully.",
        // });

       
        window.location.href = "../html/index.html";
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please check the highlighted fields and correct the errors.",
        });
    }
}

var counter = 0;
function addToCart(e) {
    e.preventDefault();
    var cartNum = document.getElementById("idnum");
    cartNum.innerHTML = ++counter;

    

    let cartElement = e.target.closest('.cart'); 
    let productName = cartElement.dataset.name;
    let productPrice = parseFloat(cartElement.dataset.price); 
    let productImg = cartElement.dataset.img;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: `${productName} quantity increased in your cart.`,
    });

    let productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex > -1) {

        cart[productIndex].quantity += 1;
    } else {
        let product = {
            name: productName,
            price: productPrice,
            img: productImg,
            quantity: 1 
        };
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    populateCart();
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}