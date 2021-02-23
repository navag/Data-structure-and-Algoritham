function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
fib(7)
//1,1,2,3,5,8,13...