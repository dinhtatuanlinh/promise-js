const axios = require('axios')

// promise handle async
let asynchronous = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(b > 2){
                reject("error b greater than 2")
            }
            let sum = a + b
            resolve(sum)

        }, 1000)
    })
}

let multi = (x)=>{
    setTimeout(()=>{
        return x *2
    })
}

asynchronous(1, 2)
.then(result => {
    console.log(result)
})
.catch(err=>{
    console.log("error~!!")
    console.log(err)
})

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



