// constance and case sensitive
const Man :string = "man";
const MAN : string = "woman";

// selector check not empty
let inputs = document.querySelectorAll('input')!

// interface for object model
interface Car{
    name:string,
    family?:string,
    number : number
}


// array of strings
let names :string[]
names = ["farshad" , "hassan"]


// more than one type
let num : number | string
num = 4
num = "4"


// params type , function type and default parameters
function return_name(name:string = "Farshad"):string{
    return  name
}
return_name("Ardalan")


// return nothing
function add_number(num:number):void{
    num +1
}


// tuple for array with length and type determine
let author : (number | string)[];


// alias like constant for variable you should use "="
type Permission = number | number[] ;
function export_data(variable : Permission):Permission{
    return variable;
}

export_data([2])


// Enum  allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values. 
// Just for relation variables
enum permission{
    manager = 0 ,
    editor = 1 ,
    author = 2
}
permission.author;    // returns  2
permission["author"]  ; // returns  2
permission[3]  // author

// union type : allows us to use more than one data type for a variable or a function parameter. 
let myVar : string | number


// default parameters
function custom_function(number:number = 4):number{
    return number;
}
custom_function();

// classess
class User{
    private name:string;

    public constructor(name:string){
        this.name = name;
    }

    public getName():string{
        return this.name;
    }
}



// generic : run function base on parameters type 
// mostly for reusable components

//   EX1)
function identity<Type>(arg: Type): Type {
    return arg;
  }

//   EX2)
interface Human {
    firstName : string , 
    lastName : string
}
interface Animal {
    name : string
}
function identify <Item extends Animal | Human> (item : Item):Item{

}
// use generic for handle dynamic type 

// add props type for /////// react js ////////

type funcProps = {
 name : string , 
children : ReactNode,
// dispatch and setstateaction will import from react and for statehandling function will use.
  setShow :Dispatch<SetStateAction<boolean>>
}
const func = (props : funcProps ) {
  const {name , children} = props ; 
...
}
  const [show, setShow] = useState<boolean>(true);
