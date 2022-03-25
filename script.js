if (window.navigator.userAgent.toLowerCase().includes("mobi"))
    window.location.href = "/mobile.html";

let options = document.getElementById("options");

let car = document.getElementById("car");
let airplane = document.getElementById("airplane");

let boat = document.createElement("button");
boat.textContent = "Boat";
Object.assign(boat.style, { "color": "#00008b", "margin-right": "25px" });
boat.addEventListener("click", () => selectButton("Boat"));
options.appendChild(boat);


let mansion = document.createElement("button");
mansion.textContent = "Mansion";
mansion.style.color = "#00008b"; // no need for mansion.style.marginRight = "25px";
mansion.addEventListener("click", () => selectButton("Mansion"));
options.appendChild(mansion);

let images = document.querySelectorAll("img");
let remainingText = document.getElementById("remaining");
let hideBtn = document.getElementById("hideBtn");
let nextBtn = document.getElementById("next");

let carSelected = false, airplaneSelected = false, boatSelected = false, mansionSelected = false;
let selectedAll = false;
let buttonsRemaining = ["Car", "Airplane", "Boat", "Mansion"];

function selectButton(selectedText) {
    for (let i = 0; i < options.childElementCount; i++) {
        let button = options.children[i];
        // Don't check the id, because boat and mansion don't have it
        if (button.textContent == selectedText) { // if the button is selected
            button.style.color = "red";
            showImage(button.textContent + "Img");

            if (!selectedAll) {
                if (i == 0 && !carSelected) {
                    carSelected = true;
                    let index = buttonsRemaining.indexOf("Car");
                    buttonsRemaining.splice(index, 1);
                }
                else if (i == 1 && !airplaneSelected) {
                    airplaneSelected = true;
                    let index = buttonsRemaining.indexOf("Airplane");
                    buttonsRemaining.splice(index, 1);
                }
                else if (i == 2 && !boatSelected) {
                    boatSelected = true;
                    let index = buttonsRemaining.indexOf("Boat");
                    buttonsRemaining.splice(index, 1);
                }
                else if (i == 3 && !mansionSelected) {
                    mansionSelected = true;
                    let index = buttonsRemaining.indexOf("Mansion");
                    buttonsRemaining.splice(index, 1);
                }

                selectedAll = carSelected && airplaneSelected && boatSelected && mansionSelected;
                if (selectedAll) {
                    nextBtn.disabled = false;
                    Object.assign(nextBtn.style, { "color": "red", "fontWeight": "bold" });
                    alert("Next page button unlocked!");
                    remainingText.innerHTML = "You can now click this button."
                }
                else {
                    let temp = "";
                    for (let i = 0; i < buttonsRemaining.length; i++) {
                        temp += buttonsRemaining[i];
                        if (i != buttonsRemaining.length - 1) temp += ", ";
                    }

                    remainingText.innerHTML = `(<span style="color:#40E0D0">${temp}</span> Remaining)`;
                }
            }
        }

        else // if the button is not selected
            button.style.color = "#00008b";
    }
    hideBtn.style.display = "";
}

function showImage(imageName) {
    for (let i = 0; i < images.length; i++) {
        if (images[i].id == imageName)
            images[i].style.display = "";

        else
            images[i].style.display = "none";
    }
}

function hide() {
    selectButton("unclickBtn");
    showImage("hideImg");

    hideBtn.style.display = "none";
}