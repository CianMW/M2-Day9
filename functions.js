let buttonLocation = document.querySelectorAll("button.btn.btn-danger")

    for (let i = 0; i < buttonLocation.length; i++) {
        const element = buttonLocation[i];
        element.addEventListener("click", e=>{
        document.querySelectorAll("tr:last-of-type")[1].remove()
        })
    }
    