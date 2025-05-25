


const products = [
 {title: 'Berry' ,id:1}
 {title: 'Banana',id:2}
 {title:'Ananas',id:3}
];

export default function ShoppingList(){

const listItems = products.map(product =>
 
 <li 
 key={product.id}>
  {product.title}
 </li>
);

return(
 <ul>
  {listItems}</ul>
);

}