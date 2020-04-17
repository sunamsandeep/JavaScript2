const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]


const book = {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
};

function print({title, rating}){
    console.log(`${title}====>${rating}`);
}


const btn = document.querySelector("#clicker");

btn.addEventListener('click',function(){alert('i am too good')});
btn.addEventListener('mouseover',function(){
    btn.innerHTML = "You haven't clicked";
});
btn.addEventListener('mouseout',function(){
    btn.innerHTML = "Click Me";
});



const colors = [
    'red',
    'orange',
    'blue',
    'green',
    'pink',
    'violet',
    'purple',
    'indigo',
    'yellow',
    'grey'
];

const section = document.createElement('section');
document.body.appendChild(section);

const header = document.createElement('h1');
header.innerText="Pick Color";
section.prepend(header);


const onColorClick = function(){
    header.style.color = this.style.backgroundColor;
}


for(let color of colors){
    const div = document.createElement('div');
    div.innerText=color;
    div.style.backgroundColor=color;
    div.classList.add('box');
    div.addEventListener('click',onColorClick);
    section.appendChild(div);
}

function onElementClick(e){
    console.log(e);
}


const myItem = document.querySelector("#item");
myItem.addEventListener("keypress",function(e){
    if(e.key==='Enter'){
       const val = myItem.value;
       const myLI = document.createElement('li');
       myLI.innerText=val;
       myLI.addEventListener("click",onElementClick);
       document.querySelector('#myUL').appendChild(myLI);
       myItem.value='';

    }
})







