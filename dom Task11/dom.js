//how to store objects in local storage 

let myObj = {
    name:'Nikita',
    Age:24
    
    };
    
    //if we see th eoutput it is shows as object 
    //so we can convert string into it
    
    let obj_serialized=JSON.stringify(myObj);
    console.log(obj_serialized);
    
    // console.log(localStorage);
    
    localStorage.setItem('myObj',obj_serialized);
    
    
    //AT THE END WE  WANT THE SAME OUTPUT SO CONVERTTHE STRING INTO THE
    //OBJECT....PUT JSON STRING OPPOSITEW OF JSON PARSEC (OBJECT) 
    
    let obj_deserializes=JSON.parse(localStorage.getItem('myObj'));
    
    console.log(obj_deserializes);
    