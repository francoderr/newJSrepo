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
             console.log(v);
        }
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

