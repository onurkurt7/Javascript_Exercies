const finallerdekiGolSayilari = (data) => {
  const depo = {}
  const finaller = data.filter( (mac) => mac["Stage"] == "Final")
  finaller.forEach( (mac, index) =>{
    const evSahibi = mac["Home Team Name"]
    const konukTakim = mac["Away Team Name"]
    if(depo[evSahibi] === undefined){
      depo[evSahibi] = mac["Home Team Goals"]
    } else {
      depo[evSahibi] += mac["Home Team Goals"]
    }
    if(depo[konukTakim] === undefined){
      depo[konukTakim] = mac["Away Team Goals"]
    } else {
      depo[konukTakim] += mac["Away Team Goals"]
    }
  })
  console.log(depo)
  return depo
}

