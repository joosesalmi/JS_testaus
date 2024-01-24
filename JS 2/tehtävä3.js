function taksi(henkilöt, km){
    if (henkilöt<0 || km<=0 || typeof henkilöt!=='number' || typeof km!=='number') {
        return "Tarkista tiedot"
    } else if (henkilöt==1 || henkilöt==2 ){
        return km*1.6+aloitusmaksu
    } else if (henkilöt==3 || henkilöt==4){
        return  km*1.9+aloitusmaksu
    } else if (henkilöt==5 || henkilöt==6){
        return km*2+aloitusmaksu
    } else if (henkilöt>6){
        return km*2.2+aloitusmaksu
    }
}
const aloitusmaksu = 5.4;
console.log("Taksimatkan hinta: " + taksi(3, 20))