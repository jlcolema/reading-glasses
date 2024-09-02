const addTracking = () => {
  const atcButtons = document.querySelectorAll('.btn--add-to-cart');
  const brandLink = document.querySelector('.product-meta__brand-link');
  if (atcButtons.length) {
    atcButtons.forEach(atcButton => {
      atcButton.addEventListener('click', () => {
        gtag('event', 'pdp_add_to_cart', {
          vwo_test_dimension: 'Variation'
        });
      })
    })
  }
  if (brandLink) {
    brandLink.addEventListener('click', () => {
      gtag('event', 'pdp_brand_name_click', {
        vwo_test_dimension: 'Variation'
      });
    })
  }
};
var onDocumentLoad = function () {
  console.log(222);
  // Locate elements to work with
  const productBrand = document.querySelector('.product-meta__brand-link');
  const productPrice = document.querySelector('.product__price');
  const productComparison = document.querySelector('.product__sale-comparison');
  const productForm = document.querySelector('.product-form');
  // Create the `.product__price-container` that will contain both the
  // `.product__price` and `.product__sale-comparison`
  const productPriceContainer = document.createElement('div');
  productPriceContainer.classList.add('product__price-container');
  // Add the `.product__price-container`
  if (productPrice && productComparison) {
    // If both `.product__price` and `.product__sale-comparison` exist
    productPrice.parentNode.insertBefore(productPriceContainer, productPrice);
    productPriceContainer.appendChild(productPrice);
    productPriceContainer.appendChild(productComparison);
    // If only `.product__price` exists
  } else if (productPrice) {
    productPrice.parentNode.insertBefore(productPriceContainer, productPrice);
    productPriceContainer.appendChild(productPrice);
  }
  // Create the `.product__price-brand-container` that will contain both the
  // `.product-meta__brand-link` and `.product__price-container`
  const productPriceBrandContainer = document.createElement('div');
  productPriceBrandContainer.classList.add('product__price-brand-container');
  // Wrap `.product__price-container` with `.product__price-brand-container`
  productPriceContainer.parentNode.insertBefore(productPriceBrandContainer, productPriceContainer);
  productPriceBrandContainer.appendChild(productPriceContainer);
  // Move `.product-meta__brand-link` into `.product__price-brand-container`
  productPriceBrandContainer.insertBefore(productBrand, productPriceContainer);
  addTracking();
};
try {
  // ensures code runs when content is loaded
  if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    onDocumentLoad();
  } else {
    document.addEventListener("DOMContentLoaded", onDocumentLoad);
  }
} catch (err) {
  console.log(err);
}
