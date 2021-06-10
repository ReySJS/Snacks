const menu = [
  { id: 1, product: "Cachorro Quente", price: 4.00 },
  { id: 2, product: "X Salada", price: 4.50 },
  { id: 3, product: "X Bacon", price: 5.00 },
  { id: 4, product: "Torrada Simples", price: 2.00 },
  { id: 5, product: "Refrigerante", price: 1.50 }
];

var resultsfield = [];

function listitem() {
  for (let cont = 0; cont < menu.length; cont++) {
    document.getElementById('corpodatabela').innerHTML += `
      <tr>
        <td> ${menu[cont].product} </td>
        <td>R$ ${menu[cont].price.toFixed(2)}</td>
        <td><input type="button" value="-" class="minusbutton" onclick="decrease(${cont})" />
            <input type="number" id="amountInput${cont}" class="amount" min="0" value="0" />
            <input type="button" value="+"  class="plusbutton" onclick="increase(${cont})" />
        </td>
      <td><output id="cost${cont}" class="result">R$ 0,00</output></td>
      </tr>`
    resultsfield.push(0)
  }
}

listitem();

function increase(cont) {
  let amount = document.getElementById(`amountInput${cont}`);
  amount.value++
  document.getElementById(`cost${cont}`).value = `R$ ${(menu[cont].price * amount.value).toFixed(2)}`;
  resultsfield[cont] = parseFloat(menu[cont].price * amount.value);
  somar();
}

function decrease(cont) {
  let amount = document.getElementById(`amountInput${cont}`);
  if (amount.value > 0) {
    amount.value--
    document.getElementById(`cost${cont}`).value = `R$ ${(menu[cont].price * amount.value).toFixed(2)}`;
    resultsfield[cont] = parseFloat(menu[cont].price * amount.value);
    somar();
  }
}

function somar() {
  document.getElementById('totalorder').textContent = resultsfield.reduce((total, num) => total + num, 0).toFixed(2);
}