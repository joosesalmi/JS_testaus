function värianalyysi(aallonpituus){
    if (380<=aallonpituus && aallonpituus<450){
        return "violetti"
    } else if (450<=aallonpituus && aallonpituus<490){
        return "sininen"
    } else if (490<=aallonpituus && aallonpituus<560){
        return "vihreä"
    } else if (560<=aallonpituus && aallonpituus<590){
        return "keltainen"
    } else if (590<=aallonpituus && aallonpituus<630){
        return "oranssi"
    } else if (630<=aallonpituus && aallonpituus<=760){
        return "punainen"
    } else {
        return null
    }
}
console.log(värianalyysi(400));
console.log(värianalyysi(600));
console.log(värianalyysi(800));

