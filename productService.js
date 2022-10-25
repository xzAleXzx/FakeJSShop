// console.log(data);

// function toHTML() {
//   //todo 1 способ
//
//   // let template = '';
//   //
//   // data.forEach(product => {
//   //   template += `<div>${product.title}</div>`
//   // });
//   // return template;
//
//   // todo 2 способ
//   // const template = data.map(product => {
//   //   return `<div>${product.title}</div>`;
//   // }).join('');
//   // return template;
//
//   // todo 3 способ оптимизация
//   const toHTMLCard = product => `<div>${product.title}</div>`;
//   return data.map(toHTMLCard).join('')
//
// }

// этот объект будет отвечать только за функционал работая именно с продуктами
class ProductService {
  constructor(products = []) {
    this.products = products;
  }

  filterBy(search = '') {
    if (!search.trim()) return this.products;

    return this.products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  //getByIndex
  get(index) {
    return this.products[index];
  }

  getById(id) {
    return this.products.find((product) => {
      return product.id === id;
    });
  }

  // to HTML не уместен, потому что замешивает отображение в бизнес логику
}
