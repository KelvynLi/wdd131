const visitsdisplay = document.querySelector("#visits");
const input = document.querySelector('#favchap');
const button = document.querySelector("button");
const list = document.querySelector("#list");

let numvisits =  number(window.localStorage.getItem("numvisits-ls")) || 0;

let chaptersarray = getchapterlist() || [];
 
if (numvisits !== 0) {
    visitsdisplay.textContent = numvisits;

}

else {
    visitsdisplay.textContent = `This is your first visit. 🥳 Welcome!`;

        chaptersarray.foreach(chapter => {displaylist(chapter)});

        if (input.value !== "") {
            displaylist(input.value);
            chaptersarray.push(input.value)
            
            setchapterlist();
            input.value = "";
        input.focus();
    }
}
        
