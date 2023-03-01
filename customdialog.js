export function alertDialog() {
    var modal = document.getElementById("modal");

    modal.style.display = "block";
    document.querySelector("h3").innerHTML = "Alert pressed!";
    document.getElementById("ok").addEventListener("click", closeModal, false);
}

export function closeModal() {
    var modal = document.getElementById("modal");

    var modalContent = document.getElementById("modal-content");

    modal.style.display = "none";
    modalContent.innerHTML = '<h3></h3>\
    <label for="input">Enter your name</label>\
    <input type="text" name="input" id="input">\
    <button id="ok">OK</button>\
    <button id="cancel">Cancel</button>';
}

export function trueConfirm() {
    var modal = document.getElementById("modal");

    var modalContent = document.getElementById("modal-content");

    modal.style.display = "none";
    modalContent.innerHTML = '<h3></h3>\
    <label for="input">Enter your name</label>\
    <input type="text" name="input" id="input">\
    <button id="ok">OK</button>\
    <button id="cancel">Cancel</button>';

    document.getElementById("output").innerHTML = "Confirm result: true";
    document.getElementById("ok").removeEventListener("click", trueConfirm, false);
    document.getElementById("cancel").removeEventListener("click", falseConfirm, false);
}

export function falseConfirm() {
    var modal = document.getElementById("modal");

    var modalContent = document.getElementById("modal-content");

    modal.style.display = "none";
    document.getElementById("cancel").style.display = "none";
    modalContent.innerHTML = '<h3></h3>\
    <label for="input">Enter your name</label>\
    <input type="text" name="input" id="input">\
    <button id="ok">OK</button>\
    <button id="cancel">Cancel</button>';

    document.getElementById("output").innerHTML = "Confirm result: false";
    document.getElementById("ok").removeEventListener("click", trueConfirm, false);
    document.getElementById("cancel").removeEventListener("click", falseConfirm, false);
}

export function confirmWindow() {
    var modal = document.getElementById("modal");

    modal.style.display = "block";
    document.querySelector("h3").innerHTML = "Do you confirm?";
    document.getElementById("ok").addEventListener("click", trueConfirm, false);
    document.getElementById("cancel").innerHTML = "Cancel";
    document.getElementById("cancel").style.display = "block";
    document.getElementById("cancel").addEventListener("click", falseConfirm, false);
}

export function confirmInput() {
    var name = DOMPurify.sanitize(document.getElementById("input").value);
    if (name === "" || name === null) {
        document.getElementById("output").innerHTML = "User did not enter properly.";
    } else {
        document.getElementById("output").innerHTML = `Your name is ${name}`;
    }

    var modal = document.getElementById("modal");

    var modalContent = document.getElementById("modal-content");

    var cancelBtn = document.getElementById("cancel");
    var inputVal = document.getElementById("input");
    inputVal.style.display = "none";
    cancelBtn.style.display = "none";

    modal.style.display = "none";
    modalContent.innerHTML = '<h3></h3>\
    <label for="input">Enter your name</label>\
    <input type="text" name="input" id="input">\
    <button id="ok">OK</button>\
    <button id="cancel">Cancel</button>';
    document.getElementById("ok").removeEventListener("click", confirmInput, false);
    document.getElementById("cancel").removeEventListener("click", cancelInput, false);
}

export function cancelInput() {
    var modal = document.getElementById("modal");
    var modalContent = document.getElementById("modal-content");

    var cancelBtn = document.getElementById("cancel");
    var inputVal = document.getElementById("input");
    inputVal.style.display = "none";
    cancelBtn.style.display = "none";

    modal.style.display = "none";

    modalContent.innerHTML = '<h3></h3>\
    <label for="input">Enter your name</label>\
    <input type="text" name="input" id="input">\
    <button id="ok">OK</button>\
    <button id="cancel">Cancel</button>';
    document.getElementById("output").value = 'User input nothing.';
    document.getElementById("ok").removeEventListener("click", confirmInput, false);
    document.getElementById("cancel").removeEventListener("click", cancelInput, false);
}

export function promptWindow() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    var cancelBtn = document.getElementById("cancel");
    cancelBtn.style.display = "block";
    var inputVal = document.getElementById("input");
    inputVal.style.display = "block";
    
    document.querySelector("h3").innerHTML = "Enter your name";
    document.getElementById("ok").addEventListener("click", confirmInput, false);
    document.getElementById("cancel").addEventListener("click", cancelInput, false);
}