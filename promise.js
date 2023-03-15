<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

</head>

<body>

    <h1>HELLOW WOrld</h1>

    <script src="promise.js"></script>

</body>

</html>



//javascript code to make the promises

const posts = [
    {name:"post one"},
    {name:"post two"},
    {name:"post three"},
    {name:"post four"}
]


function createPost(post){
    return new Promise((resolve,reject) => {
        posts.push(post)
        resolve(post);
    })
}


function updateUserActivity (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            let lastActivity = new Date()
            console.log(`Last seen : ${lastActivity}`)
            resolve()

        },1000)
    })
}


function printPost(){
    posts.forEach((post) => {
        console.log(post.name)
    })
}


function deletePost(){
    return new Promise((resolve,reject) => {
        if(posts.length > 0){

            const del = posts.pop()
            resolve(del)

        }
        else{
            reject("ERROR")
        }
    })
}





Promise.all([createPost({name:"post five"}),updateUserActivity()])
0 comments on commit f1ebc2c
@insidejobb
 
Add heading textAdd bold text, <Ctrl+b>Add italic 
