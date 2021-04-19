export const checkInput = (e) => {
        let inputField = document.querySelector("#taskInputField").value;
        if (inputField == "") {
            let error = document.querySelector("#error");
            error.innerHTML = "What do you want to add to your list?";
            if (error.value != "") {
                error.style.display = 'block';
            }
            e.preventDefault();
    }
};

export const deleteError = () => {
    let inputField = document.querySelector("#taskInputField").value;
    if (inputField != "") {
        let elem = document.querySelector("#error");
        elem.style.display = 'none';
    }
}