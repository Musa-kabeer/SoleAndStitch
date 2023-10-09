'use strict';
const productsContainer = document.querySelector('.products__lists');
const filterProduct = document.querySelector('.products__header--select');

// GLOBAL VARIABLE
let localProduct;

const products = [
 {
  id: 1,
  name: 'Casual Board Shoes',
  type: 'sneakers',
  image:
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBdvzKQR1Ab92zI6nSLq6ark0xlxebXovzOHpH0trDJUbR9x69iwKSuRU9A3Au94RUMU&usqp=CAU',
  price: '£4119.32',
  reviews: 1000,
 },

 {
  id: 2,
  name: "Women's Combat BootBlack Leather",
  type: 'boots',
  image:
   'https://thursdayboots.com/cdn/shop/products/1024x1024-Women-Dynasty-Black-021022-1.jpg?v=1644877666',
  price: '£4874.39',
  reviews: 700,
 },

 {
  id: 3,
  name: 'Lace-Up Sneaker',
  type: 'sneakers',
  image:
   'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/C/Q/82233_1574806415.jpg',
  price: '£4934.75',
  reviews: 400,
 },

 {
  id: 4,
  name: 'Classic Unisex Sneakers',
  type: 'sneakers',
  image:
   'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/42/928787/1.jpg?3329',
  price: '£4594.76',
  reviews: 1700,
 },
 {
  id: 5,
  name: 'Best Hiking Sandals of 2023',
  type: 'sandals',
  image:
   'https://www.switchbacktravel.com/sites/default/files/articles%20/Sports%20sandals%20%28hiking%20over%20log%20on%20beach%20in%20Chaco%20sandals%20-%20m%29.jpg',
  price: '£2244.83',
  reviews: 1200,
 },
 {
  id: 6,
  name: "Valacci Men's Loafers",
  type: 'loafers',
  image:
   'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/E/R/64684_1641457149.jpg',
  price: '£4306.96',
  reviews: 200,
 },
 {
  id: 7,
  name: 'Unisex Rubber Sneakers',
  type: 'sneakers',
  image:
   'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/H/189583_1632404675.jpg',
  price: '£4397.84',
  reviews: 1100,
 },
 {
  id: 8,
  name: "Women's Lincoln Peak Sandals",
  type: 'sandals',
  image:
   'https://images.timberland.com/is/image/timberland/A5XD8231-ALT1?wid=650&hei=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0',
  price: '£2780.18',
  reviews: 50,
 },
 {
  id: 9,
  name: 'Fashion Pocket Boots For Men',
  type: 'boots',
  image:
   'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/5280911/1.jpg?6845',
  price: '£2322.47',
  reviews: 1400,
 },
 {
  id: 10,
  name: 'Unisex Sports Sneakers',
  type: 'sneakers',
  image:
   'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/Y/193145_1634209977.jpg',
  price: '£2455.35',
  reviews: 600,
 },
 {
  id: 11,
  name: 'High Heel Sandals - Gold ',
  type: 'heels',
  image:
   'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/8341611/1.jpg?6310',
  price: '£4432.00',
  reviews: 200,
 },
 {
  id: 12,
  name: "Men's Leather Casual Penny Loafers Slip-On",
  type: 'loafers',
  image:
   'https://www.seli.com.ng/sites/default/files/seller-images/clarks%20loafers.jpg',
  price: '£4411.33',
  reviews: 800,
 },
 {
  id: 13,
  name: 'Oppression Heel',
  type: 'heels',
  image:
   'https://hips.hearstapps.com/hmg-prod/images/how-to-stop-heels-rubbing-1639156256.jpg?crop=1.00xw:0.753xh;0,0&resize=640:*',
  price: '£2413.03',
  reviews: 90,
 },
 {
  id: 14,
  name: 'Versace',
  type: 'sneakers',
  image:
   'https://www.cartrollers.com/wp-content/uploads/2022/08/HIGH-QUALITY-CLASSIC-LUXURY-SNEAKERS.jpeg',
  price: '£3218.45',
  reviews: 2000,
 },
 {
  id: 15,
  name: 'Leather platform penny loafers Women',
  type: 'loafers',
  image:
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtLw66JzRlRi__pwxMosvv4LcYunGfCPcNQ&usqp=CAU',
  price: '£2380.44',
  reviews: 1360,
 },
 {
  id: 16,
  name: 'Arthur Low Sandals',
  type: 'sandals',
  image:
   'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/x8yioolqjn40gnhguxts.jpg',
  price: '£4830.06',
  reviews: 970,
 },
 {
  id: 17,
  name: 'Chunky Buckle Gladiator Sandals - Black ',
  type: 'sandals',
  image:
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiUzkwJRYSy4_7dCr1l7sYRZ7yb6pTTwgpw&usqp=CAU',
  price: '£4852.97',
  reviews: 1230,
 },
 {
  id: 18,
  name: 'Black Canvas Ladies Pencil Heels',
  type: 'heels',
  image:
   'https://5.imimg.com/data5/SELLER/Default/2021/3/PI/FY/LD/88152488/ladies-pencil-heels-500x500.jpg',
  price: '£3256.61',
  reviews: 1330,
 },
 {
  id: 19,
  name: 'Bobbies - Moccasins',
  type: 'loafers',
  image:
   'https://www.bobbies.com/87078-large_portrait/raphaelle-noir-vinyl.jpg?vcache=1696584600',
  price: '£3916.06',
  reviews: 650,
 },
 {
  id: 20,
  name: "Women's Loafers & Slip-ons",
  type: 'loafers',
  image:
   'https://img.kwcdn.com/product/1d14c6c132a/ec91aa5f-76f0-421c-b8db-7fe285720057_1200x1200.jpeg?imageView2/2/w/400/q/80/format/webp',
  price: '£3769.03',
  reviews: 1140,
 },
];

// FILTER
filterProduct.addEventListener('change', (e) => {
 const currentFilter = e.target.value;

 let currentProducts;

 if (!currentFilter) {
  currentProducts = products;
 }

 if (currentFilter) {
  currentProducts = products.filter(
   (product) => product.type === currentFilter
  );
 }

 displayProducts(currentProducts);
});

// DISPLAY LISTS OF PRODUCTS
const displayProducts = (products) => {
 productsContainer.innerHTML = '';

 products.forEach((product, i) => {
  localProduct = JSON.parse(localStorage.getItem('soleandstitch--products'));

  const get = localProduct.find((local) => local.id === product.id);

  const markup = `
    <div class="products__lists--product" data-position="${product.id}">
     <div class="products__lists--product--top">
      <img src="${product.image}" alt="${product.name}"  />
       <div class="heart">
       <i class="fa-regular fa-heart active-heart"></i>
      
       <i class="fa-solid fa-heart active-heart-onClick ${
        get?.id === product.id ? '' : 'heart-hidden'
       }"></i>
       </div>
      </div>

     <div class="products__lists--product--bottom">
      <div class="products__lists--product--bottom--top">
       <div>
        <h3>${product.name}</h3>

        <div class="ratings">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <span>(${product.reviews})</span>
        </div>
       </div>

       <h2>${product.price}</h2>
      </div>

      <div class="products__lists--product--bottom--bottom">
       <button class="product__list--cta-add add_cart">Add to cart</button>
       <button class="product__list--cta-buy">Buy Now</button>
      </div>
     </div>
    </div>
  `;

  productsContainer.insertAdjacentHTML('afterbegin', markup);
 });
};

displayProducts(products);

// ON DOM FULLY LOADED
document.addEventListener('DOMContentLoaded', () => {
 addToCart();
 likeProduct();
});

// LIKE AND DISLIKE
const likeProduct = () => {
 const heart = document.querySelectorAll('.heart');

 heart.forEach((h) =>
  h.addEventListener('click', (e) => {
   const target = e.target;
   const productEl = target.closest('.products__lists--product');
   localProduct = JSON.parse(localStorage.getItem('soleandstitch--products'));

   const check = target.classList.contains('active-heart');

   if (check) {
    //  1) REMOVE HIDDEN CLASS
    target.nextElementSibling.classList.remove('heart-hidden');

    //  2) ADD TO LOCAL STORAGE
    const product = products.find(
     (product) => product.id === +productEl.dataset.position
    );

    //  3) SET NEW LIKE TO LOCAL STORAGE
    const newLike = localProduct ? [...localProduct, product] : [product];
    localStorage.setItem('soleandstitch--products', JSON.stringify(newLike));
   }

   if (!check) {
    // 1) REMOVE ACTIVE STYLING
    target.classList.add('heart-hidden');

    //  2) ADD TO LOCAL STORAGE
    const product = products.find(
     (product) => product.id === +productEl.dataset.position
    );

    //  3) SET NEW LIKE TO LOCAL STORAGE
    const newLike = localProduct.filter((local) => local.id !== product.id);
    localStorage.setItem('soleandstitch--products', JSON.stringify(newLike));
   }
  })
 );
};

// ADD TO CART
const addToCart = () => {
 const addToCartBtn = [...document.querySelectorAll('.add_cart')];

 addToCartBtn.forEach((btn) =>
  btn.addEventListener('click', (e) => {
   const position = e.target.closest('.products__lists--product').dataset
    .position;

   const product = products.find((product) => product.id === +position);

   const ls = JSON.parse(localStorage.getItem('soleandstitch--carts'));

   const currentCart = ls ? ls : [];

   const cart = [...currentCart, product];

   //  UPDATE CART DOM
   document.querySelector('.cart__button--value').textContent = cart.length;

   //  UPDATE LOCAL STORAGE
   localStorage.setItem('soleandstitch--carts', JSON.stringify(cart));
  })
 );
};
