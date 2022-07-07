// -----------jSON------------
//Encode/Decode
//Stringify/Parse
//Stringify: Tu javascript Type sang Json
// parse: Tu Json -> JavaScript Type
//La dinh dang dung du lieu dang chuoi

// var Json = '["JavaScript","PHP","Ruby"]';
// var  json = '{"name":"Huu Dai","age":18}';

// xin chào các bạn 

// -----------Promise------------------------
/*
    - Sync: 
    -Async: 
    - Nỗi đau
    - Lý thuyết, cách hoạt động
    -Thực hành, ví dụ
    **** Sync ******
    - Đồng bộ thằng nào viết trước chạy trước thằng nào viết sau chạy sau
    - Chạy tuần tự 

    setTimeOut(function() {
        console.log('1');},1000);


    console.log('2');


    **** ASync ******
        SetTimeout, setInterval, Fetch, XMLHttpRequest, file reading, Request Animation frame 
        CALL BACK  

    ****** Nỗi đau *****
    // Calback hell: Các tác vụ phụ thuộc vào nhau
        setTimeOut(function(){
            console.log(1);
            setTimeOut(function(){
                console.log(2);
            },1000)
        },1000)
    // pyramid of doom
    


    ------LÝ THUYẾT-------------
    1 new Promise
    2 Excutor
    Status of promise:  
        1 Pending 
        2 Fulfilled
        3 Rejected
    var promise = new Promise(
        Executor 
        function(resolve, reject) {
            logic xu ly
            //Thanh  cong: resolve();
            // That bai: reject();
        }
    );
        
    promise 
        .then(function(){
            console.log("Successfully!");
        })
        .catch(function(){
            console.log("Failed!");
        })
        .finally(function(){
            console.log("Done!");
        })

    -------CÁCH HOẠT ĐỘNG --------------
    //Chain
    //Promise.resolve
    //romise.reject
    //promise.all



    Code thuần: var
    Babel: let , Const 
    Khi cần gán lại giá trị let
    khi cần định nghĩa và không gán lại biến đó: const


    1 Định ngĩa key: value -> object
    2 định nghĩa method -> object
    3 định nghĩa key -> object 
    
       Enhanced object literals trong javascript ES6 
    var name ='javascript';
    var price=1000;
    var course= {
        name,
        price,
        getName(){
            return name;
        }
    };


    ---------Default parameter values trong javascript ES6------------

    function loggger(ms='gia tri mac dinh'){
       if(type of log === 'undefined'){
        log='gia tri mac dinh';
       }
       console.log(log);
    }
loggger(ms);

    --------------Destructuring trong javascript ES6---------------------

    var array =['a', 'b', 'c', 'd', 'e'];
    var [a, b, c] = array;
    var [a,  , c] = array;
    *****REST parameter ****
    var [a,...rest] = array
    function logger(...params) {
        console.log(params);
    }
    console.log(logger(1,2,3,4,5,6,7);
    logger(a,b,...rest)
    
    -----------------Spread trong javascript ES6---------------------------

        var array = ['PHP', 'javascript', 'java'];
        var array1 = ['ReactJS','Dart'];
        var array2 = [...array1,...array];
        console.log(array2);


        var object = {
            name: 'javascript'
        };
        var object1 = {
            price:100
        }
        var object2 = {
            ...object, ...object1
        }
        console.log(object2);



        var array =['javascript','PHP,'Ruby']
        function logger(a,b,c,){
            console.log(a,b,c);
        }
      logger(1,2,3); thông thường
      
        funtion logger(...rest){
            for (var i=0; i<rest.length; i++){
                console.log(rest[i]);
            }
        }
      logger(...array);


      ----------------Tagged template literals trong ES6 (ít người biết)----------------

      function highlight(...rest){
        console.log(rest);
      }

      var brand ='F8';
      var course = 'javascript'
    const html = highlight`Học lập trình ${course} tại ${brand}`; //output: Array(3), "JavaScript", 'F8'

        ------------------Module trong javascript ES6---------------------------------
            *****Import***** 
            *****Export++++
        
        import looger from './logger.js '

    ---------------------[ECMAScript] Optional chaining (?.)-----------------------------

      const object = {
        name: 'Alice',
        cat: {
            name:  'Bob'
        }
      }
      if(object?.cat){
        console.log(object.cat.name)
      }


*/
