/*В index.html є лише порожній контейнер: <ul id="catalog" class="catalog"></ul>. 
Усю розмітку карток створюєш через JS. Масив клади в data.js, руками його не змінюй.
Напиши функцію createProductCard(product). Вона приймає один об'єкт і повертає готовий <li>. 
У картці мають бути зображення, назва, категорія, ціна, рейтинг, теги і статус наявності.*/

const products = [
{ id: 1, title: 'Механічна клавіатура Keychron K2', category: 'keyboards', price: 3899, discount: 15, inStock: true, rating: 4.8, image: 'https://picsum.photos/seed/k2/300/200', tags: ['bluetooth', 'hot-swap'] },
{ id: 2, title: 'Миша Logitech MX Master 3S', category: 'mice', price: 4299, discount: null, inStock: true, rating: 4.9, image: 'https://picsum.photos/seed/mx/300/200', tags: ['wireless'] },
{ id: 3, title: 'Монітор Dell U2723QE', category: 'monitors', price: 24999, discount: 10, inStock: false, rating: 4.7, image: 'https://picsum.photos/seed/dell/300/200', tags: ['4k', 'usb-c', 'ips'] },
{ id: 4, title: 'Навушники Sony WH-1000XM5', category: 'audio', price: 13499, discount: null, inStock: true, rating: 4.6, image: null, tags: [] },
{ id: 5, title: 'Вебкамера Logitech C920', category: 'video', price: 2799, discount: 5, inStock: false, rating: 4.3, image: 'https://picsum.photos/seed/c920/300/200', tags: ['full-hd'] },
{ id: 6, title: 'Килимок для миші XXL', category: 'mice', price: 599, discount: null, inStock: true, rating: 3.9, image: null, tags: ['xxl'] },
];

const list = document.querySelector("#catalog");

const createProductCard = (product) => {

    const item = document.createElement("li"); 
    item.classList.add("product");
    item.id = product.id;   //<li class="product" id="${product.id}">
    const image = product.image;

    const getFinalPrice = (price, discount) => {
        if (discount === null || discount === undefined) {
            return price;
        } 
        let discountAmount = price * discount / 100;
        return price - discountAmount;
    };

    item.innerHTML = `
    <div>
        <h5 class="product__title">${product.title}</h5>
        <h6 class="product__category">${product.category}</h6>
        <div class="product__price">${getFinalPrice(product.price, product.discount)} грн.</div>
        <div class="product__inStock">${product.inStock? "В наявності": "Немає в наявності"}</div>
        <span class="product__rating">Рейтинг: ${product.rating}</span><br>
        <span class="product__tags">${product.tags.length ? `Характеристики: ${product.tags}` : "Характеристики відсутні"}</span>
    </div>
    <div class="product__image">
        ${image ? `<img src="${image}" alt="${product.title}">` : `<div>Зображення відсутнє</div>` }
    </div>`;
    
    return item;
    
}

products.forEach((product) => {
    const card = createProductCard(product);
    list.append(card);
    console.log(card);
});