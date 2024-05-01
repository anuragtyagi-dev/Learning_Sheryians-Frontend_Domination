let add = document.querySelector('#add')
let rem = document.querySelector('#remove')
let inp1 = document.querySelector('input')
let err = document.querySelector('h3')
let mylist = document.querySelector('ul')

var li;

add.addEventListener("click", () => {
    if (inp1.value === '') err.textContent = " No Item to be added "

    else {
        err.textContent = '';
        li = document.createElement('li')
        li.textContent = inp1.value
        mylist.appendChild(li)
        inp1.value = '';
    }

})
