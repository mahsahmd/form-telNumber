const inputForm = document.querySelector('#inputForm');
const validateForm = document.querySelector('#validateForm');



function UserNumber (number,code){
    this.number = number;
    this.code = code;
}

let newUser;

inputForm.addEventListener('submit',function(event){
    event.preventDefault();
    const code=Math.floor(Math.random()*90000) + 10000;
    newUser = new UserNumber (event.target[0].value,code);
    console.log(newUser);
    inputForm.style.display='none';
    validateForm.style.display='block';

});
validateForm.addEventListener('submit',function(event){
    event.preventDefault();
    if(newUser.code == event.target[0].value){
        alert('valid code');
    }
    else{
        alert('invalid code');
    }
    
});

