const calculator = document.querySelector('.container')
const keys = calculator.querySelector('.buttons')

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        console.log(e.target.innerText)
    }
})