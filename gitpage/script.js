let key = document.getElementById('key')
let search = document.getElementById('search')
let card = document.getElementById('card')
let setting = document.getElementById('setting')

let saver ;

search.addEventListener('click', result)

function result() {
    setting.classList.remove('hider')
    search.classList.add('hider')
    key.classList.add('hider')
}