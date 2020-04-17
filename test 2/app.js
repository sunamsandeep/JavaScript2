/* const form = document.querySelector('form');

const name = document.querySelector('#name');
const password = document.querySelector('#password');
const userType = document.querySelector('#userType');
const acknowledge = document.querySelector('#acknowledge');

const formData = {};

form.addEventListener('submit',function(e){ 
    e.preventDefault();
})

for(let input of [name, password, userType, acknowledge]){
    input.addEventListener('input',({target})=>{
        const {name, type, value, checked} = target;    
        formData[name]= type === 'checkbox'?checked:value;
    })ßßß
} */


fetch('https://sv443.net/jokeapi/categories')
.then((response)=>{
    if(!response.ok){   
        throw new Error(`this status is ${response.status}`);
    }else{
        return response.json();
    }
   
})
.then((res)=>{
    for(let x of res.categories){
        console.log(x);
    }
})
.catch((err)=>{
    console.log('something is not right');
    console.log(err);
});


for(int i=0; i<10; i++){
    setTimeout(console.log(i),1000);
}

