function kokonaishinta(hinta, ALV){
    if (hinta>=100 && hinta<200){
        return hinta*0.95*ALV
    } else if (hinta>=200 && hinta<500){
        return hinta*0.9*ALV
    } else if (hinta>=500){
        return hinta*0.85*ALV
    } else {
        return hinta*ALV
    }
}
console.log(kokonaishinta(220, 1.24))
console.log(kokonaishinta(99, 1.24))
console.log(kokonaishinta(500, 1.24))