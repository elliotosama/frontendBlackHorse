let d;

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => console.log(data))