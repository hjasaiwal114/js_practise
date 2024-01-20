// try {
//     // code that may throw error
// } catch (error) {
//     // Handle the error
// }


// try {
//     // code that may throw an error
// } catch (error) {
//     // handle the error
// } finally {
//     // code that always runs, whether hter was an error or not
// }

// try {
//     // code that may throw error
// } catch (error) {
//     if (error instanceof TypeError) {

//     } else if (error instanceof ReferanceError) {
//         // hnadle RefrenceError
//     }  else {
//         // handle other errors
//     }
// }

// function myFunciton() {
//     if (/* some condition */) {
//         throw new Error("custom error message");
//     }
    
// }

// async function fetchData() {
//     try {
//         const result = await fetch('https://example.com');
//     } catch (error) {
//         console.error("Error fetching data:", error.message);
//     }
// }

// window.addEventListener('error', function (event) {
//     console.error("Global error", event.message);
// })