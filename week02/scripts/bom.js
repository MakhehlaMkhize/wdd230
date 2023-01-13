const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

btn.addEventListener("click", ()=>{
    if (input.value != ""){
        const listItem = document.createElement("li");
        const deleteBtn = document.createElement("button");
        
        listItem.textContent = input.value;
        deleteBtn.textContent = "❌";
        list.appendChild(listItem);
        listItem.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () =>{
            listItem.remove();
        })
        input.focus();
        input.value ="";
    }
})