let pr = prompt('Ism kiriting !')
let body = document.querySelector('body')

let ReadPrompt = () => {
    let ism = document.createElement('p')
    ism.innerHTML = pr
    body.appendChild(ism)
}

ReadPrompt()