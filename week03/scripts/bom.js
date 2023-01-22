const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");
let chapters = getChapterList() || [];

chapters.forEach(chapter => {
    displayList(chapter);    
});
btn.addEventListener("click", ()=>{
    if (input.value != ""){

        displayList(input.value);
        chapters.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
        
    }
})
function displayList(item){

    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    
    listItem.textContent = item;
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");
    listItem.append(deleteBtn);
    list.append(listItem);
    deleteBtn.addEventListener("click", function(){
        listItem.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
        })
}
function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chapters));
}
function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));

}
function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chapters = chapters.filter((item) => item !== chapter);
    setChapterList();
}