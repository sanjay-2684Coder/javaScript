//const tinderUser = new Object()   //singleton

const tinderUser1 = {};
//console.log(tinderUser1);
tinderUser1.name = "sanjay dangi"
tinderUser1.id = 101;
tinderUser1.email = "sanjay@gmail.com"
tinderUser1.islogin = true
//console.log(tinderUser1);

const regularUser = {
    email : "sanjaydangi@google.com",
    fullname:{
        userfullname:{
            firstname:"sanjay",
            Lastname : "dangi"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

//const obj4 = {obj1,obj2,obj3}

const obj4 =Object.assign({},obj1,obj2) 
//console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3}
//console.log(obj5);

const user =[{
    id:1,
    email:"sanjay@google.com"
},{
    id:1,
    email:"sanjay@google.com"
},
   
]

user[1].email;
// console.log(tinderUser1);
// console.log(Object.keys(tinderUser1));
// console.log(Object.values(tinderUser1));
// console.log((Object.entries(tinderUser1)));
// console.log(tinderUser1.hasOwnProperty('islogin'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sanjay"
}
course.courseInstructor
const {courseInstructor:instructor} = course;
console.log(course.courseInstructor);
console.log(instructor);


// {
//     "name": "sanjay",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
