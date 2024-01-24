function pyöristys(x){
    if (x>0){
        return Math.floor(x+0.5)
    } else {
        return Math.ceil(x-0.5)
    }
}
console.log(pyöristys(5.89))
console.log(pyöristys(-2.22))
console.log(pyöristys(4.5))
