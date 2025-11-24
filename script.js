function calculate() {
    let FirstName = document.getElementById("firstname").value.toLowerCase().trim().split("");
    let SecondName = document.getElementById("lastname").value.toLowerCase().trim().split("");
    let n1 = document.getElementById("firstname").value;
    let n2 = document.getElementById("lastname").value;
    let answer = document.getElementById("Answer");
    console.log(n1)
    if (n1 === "" || n2 === "") {
        alert("Enter the Names 🤦‍♂️");
        return;
    }
    
    for(let i=0;i<n1.length;i++){
        if(n1[i]===" "){
            continue;
        }
        if(!isNaN(n1[i])){
            alert("Don't Enter the Numbers 🤦‍♂️")
            return;
        }
    }
    for(let i=0;i<n2.length;i++){
        if(n2[i]===" "){
            continue;
        }
        if(!isNaN(n2[i])){
            alert("Don't Enter the Numbers 🤦‍♂️")
            return;
        }
    }
    for (let i = 0; i < FirstName.length; i++) {
        if (FirstName[i] == " ") {
            FirstName.splice(i, 1);
        }
    }
    for (let i = 0; i < SecondName.length; i++) {
        if (SecondName[i] == " ") {
            SecondName.splice(i, 1);
        }
    }
    for (let i = 0; i < FirstName.length; i++) {
        for (let j = 0; j < SecondName.length; j++) {
            if (FirstName[i] == SecondName[j]) {
                FirstName.splice(i, 1);
                SecondName.splice(j, 1);
                i--;
                break;
            }
        }
    }
    let original = [...FirstName, ...SecondName].length;
    let flame = ["F", "L", "A", "M", "E", "S"];
    let meaning = ["Friends", "Love", "Affection", "Marriage", "Enemies", "Sister"];

    let index = 0;
    let removedLetters = [];

    while (flame.length > 1) {
        index = (index + original - 1) % flame.length;
        removedLetters.push(flame[index]);
        flame.splice(index, 1);
    }

    let finalLetter = flame[0];
    let flamesMap = { F: 0, L: 1, A: 2, M: 3, E: 4, S: 5 };
    let finalMeaning = meaning[flamesMap[finalLetter]];

    removedLetters.forEach(letter => {
        let block = Array.from(document.querySelectorAll(".flm"))
            .find(div => div.textContent.trim().startsWith(letter));

        if (block) {
            block.querySelector("span").style.display = "block";
        }
    });

    let finalBlock = Array.from(document.querySelectorAll(".flm"))
        .find(div => div.textContent.trim().startsWith(finalLetter));

    if (finalBlock) {
        finalBlock.querySelector("span").style.display = "none";
    }
    answer.innerHTML = `The FLAMES between "${n1}" and "${n2}" is ${finalMeaning} `;
    console.log(`The FLAMES between "${n1}" and "${n2}" is ${finalMeaning} `)
}
