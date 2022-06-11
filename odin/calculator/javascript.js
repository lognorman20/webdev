let bigContainer = document.getElementById("calculator-buttons-container");
for (let i = 0; i < 15; i++){
    const div = document.createElement('button');
    div.style.color = 'blue';
    div.classList.add('button'); 
    const button = document.createElement("BUTTON");
    button.innerHTML = i;
    div.appendChild(button);
    bigContainer.appendChild(div);
}

bigContainer = bigContainer.children;
for (let i = 0; i < 15; i++){
    console.log(bigContainer[i].innerHTML);
}