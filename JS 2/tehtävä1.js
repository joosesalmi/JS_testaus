function osamäärä(jaettava, jakaja){
    if (jakaja==0){
        return `nollalla ei voi jakaa`
    } else {
        return jaettava/jakaja
    }
}
console.log(osamäärä(3,0));
console.log(osamäärä(9,3));