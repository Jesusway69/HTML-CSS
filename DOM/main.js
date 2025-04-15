let pageTitle = document.getElementById("pageTitle")
let itemInput = document.getElementById("itemInput")
let addButton = document.querySelector(".addButton")
let dynamicList = document.querySelector(".dynamicList")



addButton.addEventListener("click", function () {
    if (itemInput.value !== ""){
        let newElement = document.createElement("li")
        newElement.innerText = itemInput.value
        pageTitle.innerText = "Aprendiendo el DOM"
        dynamicList.appendChild(newElement)
        itemInput.value = ""
    }
    
})

