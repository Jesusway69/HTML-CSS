const pageTitle = document.getElementById("pageTitle")
const itemInput = document.getElementById("itemInput")
const addButton = document.querySelector(".addButton")
const dynamicList = document.querySelector(".dynamicList")
const filterInput = document.getElementById("filterInput")
const list = document.getElementsByTagName("ul")


addButton.addEventListener("click", () => {
    if (itemInput.value !== "") {
        let newElement = document.createElement("li")
        newElement.innerText = itemInput.value
        pageTitle.innerText = "Aprendiendo el DOM"
        dynamicList.appendChild(newElement)
        itemInput.value = ""
    }

})

filterInput.addEventListener("keyup", () => {
    const indexFind = filterInput.value.toLowerCase()
    const items = document.getElementsByTagName("li")

    Array.from(items).forEach(function (item) {
        if (item.textContent.toLowerCase().indexOf(indexFind) !== -1) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
})