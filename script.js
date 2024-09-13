const removedItem = document.querySelector(".removedItem")
const closeNotificationButton = document.querySelector("#closenNotification")
let checkbox = document.querySelectorAll(".check")
const input = document.querySelector("#inputNewItem")
const form = document.querySelector("form")
const listItens = document.querySelector(".listItens")

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
]

loadItens(itens)

form.onsubmit = (e) => {
  e.preventDefault()
  newItem = createHtmlItem(input.value)
  listItens.prepend(newItem)
}

function loadItens(itens) {
  itens.forEach(item => {
    listItens.append(createHtmlItem(item))

  })
}

closeNotificationButton.onclick = () => {
  removedItem.classList.toggle("hide");
};

checkbox.forEach(checkbox => {
checkbox.onclick = () => {
  checkbox.classList.toggle('checkbox')
  checkbox.classList.toggle('checked')
}})

function createHtmlItem(Item){
  const newItem = document.createElement('div')
  const check = Item.complete ? 'checked' : ''
  console.log(Item.complete + check)
  newItem.classList.add('item', 'flex-row')
  newItem.innerHTML = `
          <div class="flex-row">
          <div class="checkbox ${check}"></div>
          <span class="nameItem label">${Item.name}</span>
          </div>
          <button class="removeItem"><i class="fi fi-rr-trash"></i></button>`
  return newItem
}