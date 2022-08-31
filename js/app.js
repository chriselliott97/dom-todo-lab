// ----------------------cached elements-------------------------//
const btn = document.getElementById('submit-button')
// console.dir(btn)
const input = document.querySelector('input')
// console.dir(input)
const ul = document.getElementById('todo-list')
// console.dir(ul)

// --------------------------------------------------------------//
// create <li> element
// access the text from the input & store the text in the <li>
// add the <li> to the <ul> in the HTML with the text included

btn.addEventListener('click', function(evt) {
  const li = document.createElement('li')
  li.textContent = input.value
  document.querySelector('ul').appendChild(li)
  input.value = ''
})