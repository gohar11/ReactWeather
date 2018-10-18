// function getTemppromise(location) {
//     return new Promise(function (resolve, reject) {
//         console.log('PLEASE WAIT!');
//         setTimeout(function () {
//             resolve(79);
//             reject('city not found');
//         }, 3000);
//
//     });
// }
//
// getTemppromise('Alberta').then(function (resolve) {
//     console.log('promise success', resolve);
// }, function (reject) {
//     console.log('promise error', reject);
// });


function addPromise(a, b){
    return new Promise(function (x, y) {
        if(typeof a == 'number' && typeof b == 'number'){
            var result = a + b;
            x(result);
        } else {
            y('Numbers not found');
        }
    });
}

addPromise(6,12).then(function(x){
    console.log(' promise success ', x);
}, function (y) {
    console.log(' promise error ', y)
});