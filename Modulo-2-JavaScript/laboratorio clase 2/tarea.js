console.log(`
/***
 *    ███╗   ███╗ █████╗ ██████╗     ██████╗ ███████╗██╗         ██████╗ ██╗      █████╗ ████████╗ █████╗     
 *    ████╗ ████║██╔══██╗██╔══██╗    ██╔══██╗██╔════╝██║         ██╔══██╗██║     ██╔══██╗╚══██╔══╝██╔══██╗    
 *    ██╔████╔██║███████║██████╔╝    ██║  ██║█████╗  ██║         ██████╔╝██║     ███████║   ██║   ███████║    
 *    ██║╚██╔╝██║██╔══██║██╔══██╗    ██║  ██║██╔══╝  ██║         ██╔═══╝ ██║     ██╔══██║   ██║   ██╔══██║    
 *    ██║ ╚═╝ ██║██║  ██║██║  ██║    ██████╔╝███████╗███████╗    ██║     ███████╗██║  ██║   ██║   ██║  ██║    
 *    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝╚══════╝    ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    
 *                                                                                                            
 *    ██████╗ ██████╗  ██████╗  ██████╗ ██████╗  █████╗ ███╗   ███╗ █████╗                                    
 *    ██╔══██╗██╔══██╗██╔═══██╗██╔════╝ ██╔══██╗██╔══██╗████╗ ████║██╔══██╗                                   
 *    ██████╔╝██████╔╝██║   ██║██║  ███╗██████╔╝███████║██╔████╔██║███████║                                   
 *    ██╔═══╝ ██╔══██╗██║   ██║██║   ██║██╔══██╗██╔══██║██║╚██╔╝██║██╔══██║                                   
 *    ██║     ██║  ██║╚██████╔╝╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║                                   
 *    ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝                                   
 *                                                                                                            
 *                                                                                                            
 *                                                                                                            
 *  Tarea laboratorio 2: crear funcion de insercion de objeto json en array.                                                                                                            
 *                                                                                                            
 *                                                                                                            
 *                                                                                                            
 *                                                                                                            
 */
`)





let array = [];

l
let createObj = (firstName, lastName, age, status)=>{
    let persona = {
        firstName,
        lastName,
        age,
        status

    }

    return persona;
}


let add = (arr, obj)=> {arr.push(obj)};


add(array, createObj("pepe", "pipi", 23, false));

add(array, createObj("I am", "batman", 44, true));


console.table(array);