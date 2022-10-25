// фича по обрезанию слишком длинных строк с заменой на ... ellipsis - многоточие (с англ.)
function ellipsis(string = '', maxLength) {
  if (string.length > 30) {
    return string.substring(0, maxLength) + '...';
  }
  return string;
}

class HTMLService {
  product;
  paintProduct(product) {
    return `
    <li data-id="${product.id}">
      <img src="${product.image}" title="${product.title}">
      <small>${ellipsis(product.title, 30)}</small>
      <small><strong>${product.price}</strong></small>
    </li>
  `;
  }

  paintProducts(products = []) {
    return products.map(this.paintProduct).join('');
  }

  paintCartItem(item) {
    // console.log(item);
    return `
      <li data-type="remove" data-id="${item.id}">
        (${item.amount})
        ${item.title}
        <strong>$${item.price}</strong>
      </li>
    `;
  }

  // Деструктуризация {}
  paintCart({ items, totalPrice }) {
    if (items.length === 0) {
      return `<p>В корзине пока ничего нет</p>`;
    }
    return `
    <ul class="cart-list" data-type="remove">
      ${items.map(this.paintCartItem).join('')}
    </ul>
    <hr />
    <p class="info">
      <span>Общая цена:<strong>$${totalPrice.toFixed(2)}</strong></span>
      <button class="clear" data-type="clear">Очистить</button>
    </p>
    `;
  }
}
