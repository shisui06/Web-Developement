
const data = ['Élément 1', 'Élément 2', 'Élément 3', 'Élément 4', 'Élément 5'];



let dLen = data.length;

let text = "<div>";
for (let i = 0; i < dLen; i++) {
  text += "<div>" + data[i] + "</div>";
}
text += "<div>";

document.getElementById("container").innerHTML = text;
document.getElementById("container").style.color = '#333';
document.getElementById("container").style.border = "1px";
document.getElementById("container").style.padding = "10px";
document.getElementById("container").style.margin = "5px 0";



function changeCouleur(div){
  div.style.color = "red";
}
