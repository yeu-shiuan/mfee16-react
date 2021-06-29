//Pure function 純函式 
function sum(a,b) {
    return a + b
}
//1.不依賴外部的變數(環境變數值...)
let count = 3
function sum(a,b) {
    return a + b + count
}
//2.給定相同的傳入值，必定會得到相同的回傳值
function sum(a,b){
    return a + b + Math.random()
}
//3.不能副作用
function sum(a,b) {
    //用了計時器、ajax、fetch
    console.log(a)
    return a + b
}