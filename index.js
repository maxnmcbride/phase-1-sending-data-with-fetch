// Add your code here
const docBody = document.querySelector('body');

function submitData(){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        },
        body: JSON.stringify({
            name: 'Steve',
            email: 'steve@steve.com'
        }),
    })
        .then(response => response.json())
        .then((users) =>{
            docBody.innerText = users.id;
        })
        .catch(function(error){
            alert('Something went wrong!');
            docBody.textContent = error.message;
        });
}

submitData();