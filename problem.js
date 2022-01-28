/*i need to save this code
i need to find the solution
to the last question on the 
javascript course */

class Add {
    constructor(...words) {
        this.words = words;
    }
/*the method below was the one needed
by the question */
    print() {
        for(let v of this.words) {
            
        // Instead of having this console.log here, create a variable that holds the required string here. 
            // The final string should be separated by $ instead of a space
             console.log(v);
        }
        // Then move console.log here so it prints the above variable only once.
    } 
//only change code above this line #if possible

}
let x = new Add("hehe","hoho","hihi");
let y = new Add("mimi", "wewe", "sisi");
let z = new Add("how", "when", "where");

x.print();
y.print();
z.print();

//EXPECTED output =>
/**
 * $hehe$hoho$hihi$
 * $mimi$wewe$sisi$
 * $how$when$where$
 */

