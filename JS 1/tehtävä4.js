function vertailu(luku1, luku2) {
    if(luku1>luku2) {
        return `Annetuista luvuista ${luku1} ja ${luku2}, suurempi on ${luku1}`;
    } else {
        return `Annetuista luvuista ${luku1} ja ${luku2}, suurempi on ${luku2}`
    }
}
console.log(vertailu(1, 2))
console.log(vertailu(3, 2))
console.log(vertailu(3, 5))