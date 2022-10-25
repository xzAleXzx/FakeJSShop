// 3 Объекта для структуризации
// Классы: классы позволяют точно описать предметную область
// и сразу ограничить возможные ошибки и непонятные поведение
// по сути, программирование в стиле ООП - это очень просто: просто берёшь
// объекты внешнего мира, которые принимают участие в бизнесе и описываешь
// их в виде классов. Далее выстраиваешь их взаимодействие
const productService = new ProductService(data);
const cartService = new CartService();
const htmlService = new HTMLService();

// Test
// cartService.add(productService.get(1))
// cartService.add(productService.get(1))
// cartService.add(productService.get(2))
// cartService.add(productService.get(3))
// cartService.add(productService.get(12))
// cartService.add(productService.get(12))

// cartService.remove(productService.get(12).id)
//
// cartService.clear()
//
// console.log(productService.getById(5));
//
// console.log(productService.filterBy('pla'));
//
// console.log(cartService.getInfo());

// Связывание с представлением

const productContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');
const filterInput = document.getElementById('filter');

// console.log(productContainer);

filterInput.addEventListener('input', (event) => {
  const value = event.target.value;
  // Сделать фильтр и в рендер отправить
  //   console.log('value: ', value);

  const filteredProducts = productService.filterBy(value);

  renderProducts(filteredProducts);
});

productContainer.addEventListener('click', (event) => {
  // console.log(event.target.dataset.id);
  const id = event.target.dataset.id
    ? event.target.dataset.id
    : event.target.closest('li')?.dataset.id;

  if (id) {
    cartService.add(productService.getById(+id));
  }
  renderCart();
});

cartContainer.addEventListener('click', (event) => {
  const type = event.target?.dataset.type;
  const id = event.target?.dataset.id;

  switch (type) {
    case 'clear':
      cartService.clear();
      renderCart();
      break;
    case 'remove':
      cartService.remove(id);
      renderCart();
      break;
  }
});

function renderProducts(products) {
  // productContainer.innerHTML = productService.toHTML()
  productContainer.innerHTML = htmlService.paintProducts(products);
}

function renderCart() {
  cartContainer.innerHTML = htmlService.paintCart(cartService.getInfo());
}

renderCart();
renderProducts(productService.products);

// концепт делегирования событий: 1 событие на продукты
