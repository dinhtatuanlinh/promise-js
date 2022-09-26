// const axios = require('axios')

// // promise handle async
// let asynchronous = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(b > 2){
//                 reject("error b greater than 2")
//             }
//             let sum = a + b
//             resolve(sum)

//         }, 1000)
//     })
// }

// let multi = (x)=>{
//     setTimeout(()=>{
//         return x *2
//     })
// }
// console.log(typeof asynchronous(1,2).then)
// asynchronous(1, 2)
// .then(result => {
//     console.log(result)
// })
// .catch(err=>{
//     console.log("error~!!")
//     console.log(err)
// })

// handle request api async
// let getData = (url) => {

//     let config = {
//         method: 'get',
//         url: url,
//         responseType: 'json'
//     }
//     return axios(config)
// }
// getData("https://reqres.in/api/users")
// .then(result =>{
//     console.log(result.data)
// })

// Promise Chain

// asynchronous(1, 2)
// .then(result=>{
//     console.log("##########################")
//     console.log(result)
//     return getData("https://reqres.in/api/users")
// })
// .then(result=>{
//     console.log(result.data)
// })
// .catch(err=>{
//     console.log(err)
// })


// console.log("1234")
let errCode = [
    new Error("error b greater than 5"),
    new Error("error x less than 0")
]

let sum = (a, b )=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(b>5){
                reject(1)
            }
            let s = a + b
            resolve(s)
        }, 1000)
    })
}

let multiple = (x)=>{
    return x*2
    // return new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         if (x <= 0){
    //             reject(2)
    //         }
    //         let m = x*2
    //         resolve(m)
    //     }, 2000)
    // })
}



sum(0, 0)
.then(result=>{
    return multiple(result)
})
.then(result=>{
    console.log(result)
})
.catch(err=>{
    if(err == 1){
        console.log(errCode[err-1])
    }else if(err == 2){
        console.log(errCode[err-1])
    }
})
