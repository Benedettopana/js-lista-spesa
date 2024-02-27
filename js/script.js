const myList = [
  'Uova',
  'Latte',
  'Pasta',
  'Carne',
  'Shampoo',
  'Salsa',
  'Verdure',
  'Acqua',
  'Patatine',
  'Crocchette per cani',
  'Snack',
]

let c = 0;
const limit = myList.length;

const listElement = document.getElementById('element');

while(c < limit){
  listElement.innerHTML +=`
  <div>
    <span>
      -${myList[c]}
    </span>

  </div>
  `;
  c++;
}