const colors = ['#ff0048','rgba(135, 9, 246, 1)', 'green', 'blue', 'greenyellow', '#f6e30e', 'lightblue', 'tomato', '#f1f5f8' ];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', (e) =>{
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

