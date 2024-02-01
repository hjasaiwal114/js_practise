function calculateSumTiem(n) {
    const start = performance.now();

    let sum = 0 ;
    for (let i =1; i <= n; i++) {
        sum += i;
    }

    const end  = performance.now();
    const elapsedSecond = (end - start) / 1000;
    
    console.log(`Sum from 1 to ${n} is {sum}`);
    console.log(`Time taken: ${elapsedSecond} seconnds`);
}