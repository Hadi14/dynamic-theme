const btn = document.querySelectorAll('.btn');


btn.forEach(element => {
    element.addEventListener('click', (event) => {
        document.documentElement.style.setProperty("--theme-color", event.target.dataset.color);
    })
})