function onkoTaysiIkainen(ika){
    if (typeof ika !=='number'){
        throw new Error("Syötteen on oltava numero");
    }
    return ika>=18;
}
module.exports = onkoTaysiIkainen;