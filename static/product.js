/* ========== Products Slider =========== */
const swiper = new Swiper('.mySwiper', {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 70,
  pagination: {
    el: '.custom-pagination',
    clickable: true,
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
    },
    996: {
      slidesPerView: 3,
    },
  },
});

/* ========== Fetch the Products =========== */

const getProducts = async () => {
  try {
    const results = await fetch('./data/products.json');
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

const ProductsWrapper = document.getElementById('products');

window.addEventListener('DOMContentLoaded', async function () {
  let products = await getProducts();
  products = products.filter((product) => product.category === 'Dresses');
  displayProductItems(products);
  loadData();
});

/* ========== Display Products =========== */
const displayProductItems = (items) => {
  let displayProduct = items.map(
    (product) => `
                <div class="swiper-slide">
              <div class="product">
                <div class="top d-flex">
                  <img src=${product.url} alt="" />
                  <div class="icon d-flex">
                    <i class="bx bxs-heart"></i>
                  </div>
                </div>
                <div class="bottom">
                  <h4>${product.title}</h4>
                  <div class="d-flex">
                    <div class="price">$${product.price}</div>
                    <div class="rating">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  `
  );

  displayProduct = displayProduct.join('');
  ProductsWrapper.innerHTML = displayProduct;
};

/* ========== Filter Products =========== */
const filters = [...document.querySelectorAll('.filters div')];

filters.forEach((filter) => {
  filters[2].classList.add('active');
  filter.addEventListener('click', async (e) => {
    const id = e.target.getAttribute('data-filter');
    const target = e.target;
    const products = await getProducts();
    filters.forEach((btn) => {
      btn.classList.remove('active');
    });
    target.classList.add('active');

    let menuCategory = products.filter((product) => {
      if (product.category === id) {
        return product;
      }
    });

    displayProductItems(menuCategory);
    swiper.update();
  });
});

/* ========== Categories Products =========== */

const categoriesProducts = document.querySelector('.categories .products');
const loadmore = document.querySelector('.loadmore');

let currentIndex = 0;
async function loadData() {
  let maxResult = 8;
  let products = await getProducts();
  if (currentIndex >= products.length) {
    loadmore.disabled = true;
    loadmore.innerText = 'No More Products';
    return;
  }

  for (var i = 0; i < maxResult; i++) {
    const product = products[i + currentIndex];
    categoriesProducts.insertAdjacentHTML(
      'beforeend',
      `<div class="product">
          <div class="top d-flex">
            <img src=${product.url} alt="" />
            <div class="icon d-flex">
              <i class="bx bxs-heart"></i>
            </div>
          </div>
          <div class="bottom">
            <div class="d-flex">
              <h4>${product.title}</h4>
              <a href="" class="btn cart-btn">Add to Cart</a>
            </div>
            <div class="d-flex">
              <div class="price">$${product.price}</div>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
            </div>
          </div>
        </div>`
    );
  }

  currentIndex += maxResult;
}

loadmore.addEventListener('click', loadData);
