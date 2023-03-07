const productElements = document.querySelectorAll('.row.no-margin.main-info');
const myItems = [];

productElements.forEach(element => {
  const name = element.querySelector('.product-title').textContent;
  const imageSrc = element.querySelector('.product-large-image.lazyloaded').getAttribute('src');
  const priceString = element.querySelector('.basket-discount, .advanced-price').textContent;
  const price = parseFloat(priceString.replace(/[^0-9\.]/g, ''));
  const productUrl = document.URL;
  const item = { name, imageSrc, price, productUrl };
  myItems.push(item);
});

const personalLocalStoragePrefix = 'local_storage_';
let storedMyItems = JSON.parse(localStorage.getItem(personalLocalStoragePrefix + 'myItems')) || [];

const allItems = [...storedMyItems, ...myItems];

localStorage.setItem(personalLocalStoragePrefix + 'myItems', JSON.stringify(allItems));

if (allItems.length >= 3) {
  const campaignElement = document.createElement('button');
  campaignElement.textContent = '!';
  campaignElement.style.fontSize = '25px';
  campaignElement.style.color = 'yellow';
  campaignElement.style.background = 'purple';
  campaignElement.style.borderRadius = '50%';
  campaignElement.style.width = '40px';
  campaignElement.style.height = '40px';
  campaignElement.style.cursor = 'pointer';
  document.body.appendChild(campaignElement);

  const closeButton = document.createElement('button');
  closeButton.style.display = 'none';
  closeButton.textContent = 'x';
  closeButton.style.position = 'relative';
  closeButton.style.right = '-420px';
  closeButton.style.top = '-35px';
  closeButton.style.width = '25px';
  closeButton.style.height = '25px';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '50%';
  closeButton.style.background = 'white';
  closeButton.style.color = 'black';
  closeButton.style.cursor = 'pointer';
  closeButton.style.alignContent = 'center';
  campaignElement.appendChild(closeButton);

  const last3MyItems = allItems.slice(-3);
  const productListElement = document.createElement('ul');
  productListElement.display = 'none';
  productListElement.style.width = '450px';

  last3MyItems.forEach(item => {
    const listItemElement = document.createElement('li');

    listItemElement.style.width = '450px';
    listItemElement.style.textDecorationColor = 'red';
    listItemElement.style.backgroundColor = 'whitesmoke';

    const itemLinkElement = document.createElement('a');

    itemLinkElement.href = item.productUrl;
    itemLinkElement.style.display = 'flex';
    itemLinkElement.style.alignItems = 'center';

    const itemImageElement = document.createElement('img');

    itemImageElement.src = item.imageSrc;
    itemImageElement.alt = item.name;
    itemImageElement.style.width = '50px';
    itemLinkElement.appendChild(itemImageElement);

    const itemNameElement = document.createElement('span');

    itemNameElement.textContent = item.name;
    itemNameElement.style.marginLeft = '10px';
    itemLinkElement.appendChild(itemNameElement);

    const itemPriceElement = document.createElement('span');

    itemPriceElement.textContent = String(item.price).slice(0,-2) + ',' + String(item.price).slice(-2) + 'TL';
    itemPriceElement.style.marginLeft = 'auto';
    itemLinkElement.appendChild(itemPriceElement);
    listItemElement.appendChild(itemLinkElement);
    productListElement.appendChild(listItemElement);

    itemLinkElement.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = item.productUrl;
    });
  });

  campaignElement.addEventListener('click', function() {
    productListElement.style.display = (productListElement.style.display === 'none') ? 'block' : 'none';
    closeButton.style.display = (productListElement.style.display === 'none') ? 'none' : 'block';
  });

  closeButton.addEventListener('click', function() {
    closeButton.style.display = 'none';
    campaignElement.style.display = 'none';
    console.log('Closed')
  });

  document.body.appendChild(productListElement);
  productListElement.style.display = (productListElement.style.display === 'none') ? 'block' : 'none';

  console.log(allItems);
}
