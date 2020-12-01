// var Student = {
//     id: 1,
//     getId: function(){
//         setTimeout(function(){console.log(this.id);},1000); 
//         // undefined as the this points to function inside setimeOut which has no id
//     }
// }


// var Student = {
//     id: 1,
//     getId: function(){
//         self = this;
//         setTimeout(function(){console.log(self.id);},1000); 
//        // here self captures the this and passes it to function in settimeOut        
//     }
// }


var Student = {
    id: 1,
    getId: function(){
        setTimeout(() => console.log(this.id),1000);
        // es6 lambda will directly pass the reference of the main function
    }
}
Student.getId()