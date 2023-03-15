const promise1=Promise.resolve("helloWorld");
const promise2=10;
const promis3=new Promise((resolve,reject)=>
    setTimeout(resolve,2000,'GOODBYE')
);
Promise.all([promise1,promise2,promis3]).then(values=>console.log(values))