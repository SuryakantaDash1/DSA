let number = parseInt(prompt("enter a number"));
let n1 = 0, n2 = 1, next;

let Fibo = () => {
    for(let i =0; i <= number; i++) {
        console.log(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}
Fibo();
