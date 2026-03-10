function lottery(isimler) {
  
  const cekilenler = []

  cekilenler.push(isimler[0])
  cekilenler.push(isimler[1])
  cekilenler.push(isimler[2])
  cekilenler.push(isimler[3])
  cekilenler.push(isimler[4])
  
  cekilenler.push(isimler[9])
  cekilenler.push(isimler[19])
  cekilenler.push(isimler[29])
  cekilenler.push(isimler[39])
  cekilenler.push(isimler[49])

  isimler.splice(49,1)
  isimler.splice(39,1)
  isimler.splice(29,1)
  isimler.splice(19,1)
  isimler.splice(9,1)

  isimler.splice(0,5)

  const elemanSayisi = isimler.length
  const sonCekilis = Math.floor(Math.random() * elemanSayisi)

  cekilenler.push(isimler[sonCekilis])

  return cekilenler;
}