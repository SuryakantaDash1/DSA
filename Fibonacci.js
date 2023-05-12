let Number = parseInt(prompt("enter a number"));
let n1 = 0, n2 = 1, next;

let Fibonacci = () => {
    for(let i =0; i <= Number; i++) {
        console.log(n1);
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
}
Fibonacci();
