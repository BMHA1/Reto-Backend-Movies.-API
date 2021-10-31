// const data=require('.modell/')
const jwt=require('jsonwebtoken')


const token=jwt.sign({foo:'bar'},'shhhh')
console.log(token)


const decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MzU0OTY0NzZ9.1ZxC-PVqMV_oPBn53JFwkajOUgjLGi8tAi3O99f3eWs', 'shhhh');
console.log(decoded.foo)