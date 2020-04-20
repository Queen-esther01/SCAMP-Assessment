let fibonacciSequence = [0,1];
    let a = 0, b = 1, c = 1;

    const fibonacci_function = (num) => {
        console.log(num)
        if(num === 0 || num === 1){
            fibonacciSequence = [0,1,2];
        }
        else{
            for(let i = 0; i < num; i++){
                c = a + b;
                a = b;
                b = c;
                fibonacciSequence.push(c)
            }
            console.log(fibonacciSequence)
            //outputs [0,1,1,2,3,5,8,13,21,34]
        }
    }
    fibonacci_function(8)