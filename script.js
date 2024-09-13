const removedItem = document.querySelector(".removedItem");
const closeNotificationButton = document.querySelector("#closenNotification");
let checkbox = document.querySelectorAll(".check");
const input = document.querySelector("#inputNewItem");
const form = document.querySelector("form");
const listItens = document.querySelector(".listItens");

let itens = [
  {
    complete: true,
    name: "Pão de forma",
  },
  {
    complete: false,
    name: "Bolacha",
  },
  {
    complete: false,
    name: "Café Preto",
  },
];

loadItens(itens);

form.onsubmit = (e) => {
  e.preventDefault();
  itens.push({complete: false, name: input.value})
  console.log(itens)
  update()
  input.value = ''
};

function loadItens(itens) {
  itens.forEach((item, index) => {
    listItens.append(createItem(item, index));
  });
}

closeNotificationButton.onclick = () => {
  removedItem.classList.toggle("hide");
};

function checkItem(index) {
  if (index < 0 || index >= itens.length) {
    console.error('Índice fora dos limites:', index);
    return;
  }
  itens[index].complete = !itens[index].complete;
  update();
}

function createItem(Item,index) {

  if (!Item) return

  const newItem = document.createElement("div");
  const check = Item.complete ? "checked" : "";

  newItem.classList.add("item", "flex-row");
  newItem.innerHTML = `
          <div class="flex-row">
          <div class="checkbox ${check}" data-index="${index}"></div>
          <span class="nameItem label">${Item.name}</span>
          </div>
          <button class="removeItem"><i class="fi fi-rr-trash"></i></button>`;

  newItem.querySelector('.checkbox').onclick = (event) => {
    const checkbox = event.target
    const itemIndex = parseInt(checkbox.getAttribute('data-index'), 10)
    checkItem(itemIndex)
    console.log(itemIndex)
    checkbox.classList.toggle('checked')
  }

  newItem.querySelector('.removeItem i').onclick = () => {
    itens.splice(index, 1)
    update()
    removedItem.classList.remove('hide')
  }

  return newItem;
}

function deleteItem(index){
  console.log("Deletar: " + itens.index)
}

function removeAll() {
  listItens.querySelectorAll("div .item").forEach((item) => {
    item.remove();
  });
}

function update() {
  removeAll();
  loadItens(itens)
}