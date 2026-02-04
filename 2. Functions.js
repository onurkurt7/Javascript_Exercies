function tasKagitMakas(secim) {
  const cpu = Math.floor(Math.random()*3)
  //0=tas 1=makas 2=kağıt
  if(cpu===0){
    if(secim==="taş")
      return "Senin seçimin: taş. Bilgisayarın seçimi taş. Beraberlik!"
    else if(secim==="kağıt")
      return "Senin seçimin: kağıt. Bilgisayarın seçimi: taş. Kazandın!"
    else if(secim==="makas")
      return "Senin seçimin: makas. Bilgisayarın seçimi taş. Kaybettin!"
  }
  else if(cpu===1){
    if(secim==="taş")
      return "Senin seçimin: taş. Bilgisayarın seçimi makas. Kazandın!"
    else if(secim==="kağıt")
      return "Senin seçimin: kağıt. Bilgisayarın seçimi: makas. Kaybettin!"
    else if(secim==="makas")
      return "Senin seçimin: makas. Bilgisayarın seçimi makas. Beraberlik!"
  }
  else if(cpu===2){
    if(secim==="taş")
      return "Senin seçimin: taş. Bilgisayarın seçimi kağıt. Kaybettin!"
    else if(secim==="kağıt")
      return "Senin seçimin: kağıt. Bilgisayarın seçimi: kağıt. Beraberlik!"
    else if(secim==="makas")
      return "Senin seçimin: makas. Bilgisayarın seçimi kağıt. Kazandın!"
  }  
}