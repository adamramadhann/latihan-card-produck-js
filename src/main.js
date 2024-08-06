import './style.css'

let iconCart = document.querySelector('.icon-cart')
let closeTabCart = document.querySelector('.close')
let body = document.querySelector('body')
let listProductHTML = document.querySelector(".list-product")
let listProducts = [];

iconCart.addEventListener('click', ()=>{
    body.classList.toggle('showCart')
})

closeTabCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

// Get elements
const addButton = document.getElementById('addProduct');
const formContainer = document.getElementById('form-container');
const closeButton = document.getElementById('closeButton');
const blurOverlay = document.getElementById('blurOverlay');

// Show the form and the blur overlay when the "Add" button is clicked
addButton.addEventListener('click', () => {
    formContainer.classList.remove('hidden');
    blurOverlay.classList.remove('hidden');
});

// Hide the form and the blur overlay when the "Close" button is clicked
closeButton.addEventListener('click', () => {
    formContainer.classList.add('hidden');
    blurOverlay.classList.add('hidden');
});




// function add product
document.getElementById('addForm').addEventListener('submit', (e)=>{

})