export const addWithEnter = (e) => {
   // let button = document.querySelector("#addToList");
   // button.addEventListener("keyup", (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            document.querySelector("#addToList").click();
        }
    
}