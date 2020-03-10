
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (e) {

    e.preventDefault();

    fetch('https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us', {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            name: name.value,
            email: email.value ,
            subject: subject.value,
            message:message.value,
        })
  
    }).then(function (response) {
        return response.json();
    }).then(function (result) {
        // console.log(text);
        console.log(result);
    }).catch(function (error) {
        console.log(error);
    })

})
// const form={

//   submit: document.getElementById('btn')
// }

// // console.log(form);



// form.submit.addEventListener('click',()=>{
//     const request= new XMLHttpRequest();
//     request.onload=()=>{
//         let responseObject=null;
//         try{
//             responseObject=JSON.parse(request.response);            
//         } catch(e){
//             console.error('could not parse jason');
//         }
//         if(responseObject){
//             handleResponse(responseObject);
//         }
//     }


// const requestData=`name=${form.name.value}& email=${form.email.value} & subject=${form.subject.value}
//                     & message=${form.message.value}`

// console.log(requestData);
// request.open('POST','https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us');

// // request.setRequestHeader('content-type','application/json');
// request.send(requestData);

// function handleResponse(responseObject){
//     console.log(responseObject);
// };
// })







