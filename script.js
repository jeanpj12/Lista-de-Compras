const removedItem = document.querySelector(".removedItem")
const closeNotificationButton = document.querySelector("#closenNotification")
let checkbox = document.querySelectorAll(".check")
const input = document.querySelector("#inputNewItem")
const form = document.querySelector("form")
const listItens = document.querySelector(".listItens")

closeNotificationButton.onclick = () => {
  removedItem.classList.toggle("hide");
};

form.onsubmit = (e) => {
  e.preventDefault()
  newItem = createHtmlItem(input.value)
  listItens.prepend(newItem)
  checkbox = document.querySelectorAll(".check")
}

checkbox.forEach(checkbox => {
checkbox.onclick = () => {
  checkbox.classList.toggle('checkbox')
  checkbox.classList.toggle('checked')
}})

function createHtmlItem(Item){
  const newItem = document.createElement('div')
  newItem.classList.add('item', 'flex-row')
  newItem.innerHTML = `
          <div class="flex-row">
          <div class="checkbox  check"></div>
          <span class="nameItem label">${Item}</span>
          </div>
          <button class="removeItem"><i class="fi fi-rr-trash"></i></button>`
  return newItem
}