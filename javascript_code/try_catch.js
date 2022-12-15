/*try {
    console.log(c + d)
}catch(err) {
   // console.log(err)
   console.log('this is the new code')
   console.log('the new code is being processed')
}
console.log("my program did not stop")
*/
try {
    throw new ReferenceError();
}catch(err) {
   // console.log(err)
   console.log('this is the new code')
   console.log('the new code is being processed')
}
console.log("my program did not stop")