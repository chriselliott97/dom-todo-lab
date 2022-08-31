// ----------------------cached elements-------------------------//
const btn = document.getElementById('submit-button')
// console.dir(btn)
const input = document.querySelector('input')
// console.dir(input)
const ul = document.getElementById('todo-list')
// console.dir(ul)
const resBtn = document.getElementById('reset-button')
// console.dir(resBtn)




// -----------------------Event Listeners-----------------------//
// create <li> element
// access the text from the input & store the text in the <li>
// add the <li> to the <ul> in the HTML with the text included

btn.addEventListener('click', function(evt) {
  const li = document.createElement('li')
  li.textContent = input.value
  if (input.value === ''){
    alert("You cannot add nothing to a to-do list. Don't be lazy!")
  }else document.querySelector('ul').appendChild(li)
  input.value = ''
})

// create a button that will reset the ul to be empty

resBtn.addEventListener('click', function(event) {
  ul.innerHTML = ''
  input.value = ''
})