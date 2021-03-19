# quiz-api


Para correr el proyecto en modo desarrollo : 
# npm install --save
# npm run start:dev

Endpoints 

-http://dominio.com/users
    -  Metodos 
        - GET : 
            - request : headers : 'content-type' , 'Authorization'
            - responses : [
                -200 : 
                    -statusCode : Number // 200 
                    -status : String // "fullfiled"  
                    -users : Array // [{id : INTEGER , name : STRING , email : STRING }]
            ]
        - POST : 
            -request : {
                - headers : 'content-type' , 'Authorization'
                - body : {
                    name :  STRING!
                    email :  STRING!
                    password: STRING!
                    confirmPassword :  STRING!

                }
            }