let v1
let v2
let v3



v1 =  parseFloat(window.prompt("Entrez des numéros entier svp ?:", "")) ;
v2 =  parseFloat(window.prompt("Entrez des numéros entier svp ?:", "")) ;
v3 =  parseFloat(window.prompt("Entrez des numéros entier svp ?:", "")) ;

if (v1===v2 && v2 === v3) {
	window.alert("Les trois nombres sont identiques") ;
} else  if( v1 === v2 || v2 === v3 || v3===v1){
	window.alert("Deux des nombres sont identiques");
} else {
  window.alert("Aucun nombres est identiques") ;
}
	