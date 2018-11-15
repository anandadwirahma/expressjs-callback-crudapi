# expressjs-callback-crudapi
Simple CRUD API With Callback (Using ExpressJS)


Step :
1. Install express generator            : npm install -g express-generator (Global install express generator)
2. Initiate express into project folder : express .
3. Install package                      : npm install
4. For running apps                     : npm start

Endpoint :
1. save data   : http://localhost:3000/users/save   (POST)
2. get data    : http://localhost:3000/users/       (GET)
3. update data : http://localhost:3000/users/update (POST)
4. delete data : http://localhost:3000/users/delete (POST)


* Notes :

- Type of method for handling asynchronous :
    - callback
    - promise
    - async await
    - etc..

- What is callback : Callback is a function inside the parameter.
    - ex :
        getData(conn, (data) => {
            console.log(data);
        })

- Format parameter callback :
    ex :
    function (err, result) {

    }
        
    * description :
        - result : the main parameter that in the callback
        - error  : additional parameter for displaying error messages

- Format raw function :
    
    * Type 1 :
    (err, conn) => {

    }

    * Type 2 :
    function(err, conn) {

    }