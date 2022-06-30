"use strict"
// console.log("Hello world!");
// //IIFE()
// (function(){
//      console.log("Hello world2");
// })();
// (()=>{
//     console.log("Hello worldd");
// })();
// ((a, b)=>{
//     let sum=a+b;
//     console.log("tong a va b:" + sum);
// })(4,5);


// function createCouter(){
//     let couter=0;
//     function increaseCouter(){
//         return ++couter;
//     }
//     return  increaseCouter
// }
 
// const couter1= createCouter();
// console.log(couter1());   
// console.log(couter1());   
// console.log(couter1());   
// console.log(couter1());   
// console.log(couter1());   
// console.log(couter1());   
// // // console.log(couter1());    
// ((a,b)=>{
//     console.log(a*b);
// })(4,5);
// c
// const sum = function(a,b){
//     return a+b;
// }
// console.log("Tong cua 4 va 5 ="+sum(4,5))

// const sum1 = (a,b)=>{return a+b;}
// ;((a,b)=>{return a+b})(4,5)

// function createLogger(massage){
//     function logger(info){
//         console.log(`[${massage}] ${info}`);
//     }
//     return logger;
// }
// const info = createLogger('info');
// info("Xin chao may 1");
// info("Xin chao may 3");
// info("Xin chao may 2");
// info("Xin chao may 2");
// info("Xin chao may 3");
// info("Xin chao may 3");
// info("Xin chao may 3");
// info("Xin chao may 3");
// info("Xin chao may 3");


// function createStorage(key){
//     const store = JSON.parse(localStorage.getItem(key)) ?? {} 
//     const save = ()=>{
//         localStorage.setItem(key, JSON.stringify(store));
//     };
//     const storage = {
//          get(key){
//             return store[key];
//         },
//         set(key, value){
//             store[key] = value;
//             save();
//         },
//         remove(key){
//             delete store[key];
//             save();
//         }    
//     }
//     return storage;
// }

// const profile = createStorage('profile');
// profile.set("fullName", "[Nguyeenx Huuw Dai,Nguyen Hoang gia Dai,]");
// console.log(profile.get("fullName"));


// consle.log(name);
// var name="nguyen";


// function AddStudent(){
//     let fullName="Nguyen Huu Dai";
//     const School={
//         show(){
//             return fullName;
//         },
//         setStudent(name){
//             fullName=name;
//         }
//     }
//     return School;
// }
// const app = AddStudent();
// console.log(app.show());
// app.setStudent("Nguyen Van A");
// console.log(app.show());

// let a = {
//     fullname : 'Nguyễn Hữu Đại',
//     class: 'lớp'
// }
// let b=a;
// a.fullname='Nguyễn';
// console.log(b.fullname);

let student= [
    {
        fullname:"Nguyen Huu Dai",
        class:"DKP1202"
    },
    {
        fullname:"Luong Chi Thinh",
        class:"DKP1202"
    }
]
    student.forEach(value=>
        console.log(value.fullname)
    )