
function runCalcs(numFac) {
    let num = 10
    for (let i = 1; i < numFac; i++) {
        runCalc(num)
        num *=10
    }
}

function runCalc(length) {
    // the test array and object
    let arr = []
    let obj = {}

    // set up arr and obj
    // the obj keys will be like 'key1', 'key2', ... 'keyN'
    for (let i = 0; i < length; i++) {
        arr.push(i)
        obj[`key${i}`] = i
    }

    // console.log("arr:", arr)
    // console.log("obj:", obj)

    const index = []
    const key = []
    let i = Math.floor(0.25 * length)
    index.push(i)
    key.push(`key${i}`)

    i = Math.floor(0.5 * length)
    index.push(i)
    key.push(`key${i}`)

    i = Math.floor(0.75 * length)
    index.push(i)
    key.push(`key${i}`)

    // console.log("index:",index)
    // console.log("key:",key)
    
    let val0 = 0
    let val1 = 0
    let val2 = 0

    let numEval = 100000
    let t0 = performance.now()
    for (let i = 0; i < numEval; i++) {
        val0 = arr[index[0]]
        val1 = arr[index[1]]
        val2 = arr[index[2]]
    }
    let t1 = performance.now()
    let dtArr = t1 - t0
    // console.log("dtArr:", dtArr)

    t0 = performance.now()
    for (let i = 0; i < numEval; i++) {
        val0 = obj[key[0]]
        val1 = obj[key[1]]
        val2 = obj[key[2]]
    }
    t1 = performance.now()
    let dtObj = t1 - t0
    // console.log("dtObj:", dtObj)

    console.log(`${length}\t${dtArr}\t${dtObj}`)
}

runCalc(5)
runCalc(10)
runCalc(100)
runCalc(10000)
runCalc(100000)