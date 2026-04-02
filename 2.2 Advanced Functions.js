const macOzeti = (evSahibiTakimi,deplasmanTakimi) => {
  let evSkor = 0
  let depSkor = 0
  let arr = []

  const randomSkor = () => {
    return Math.floor(Math.random()*15+12) // 0-15 arası (15 dahil değil) sayı döner, aşağı yuvarlarız + 12 ile genişletiriz
  }

  for (let i = 1; i<=4;i++){
    evSkor = evSkor + randomSkor()
    depSkor = depSkor + randomSkor()
    const metin = `${i}. Periyot: ${evSahibiTakimi} ${evSkor} - ${deplasmanTakimi} ${depSkor}`
    arr.push(metin)
  }

  if(evSkor===depSkor){
    const sonuc = `Maç ${evSkor} - ${depSkor} ile uzatmalara gitti`
    arr.push(sonuc)
  }

  else{
    const sonuc = `Maç Sonucu: ${evSahibiTakimi} ${evSkor} - ${depSkor} ${evSkor>depSkor ? `kazandı` : `kaybetti`}`
    arr.push(sonuc)
  }
  
  return arr
}

console.log(macOzeti("home","away"))