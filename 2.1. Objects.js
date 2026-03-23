function carSimulator(marka,model,kilometre,fiyat) {
  const volvo={
    marka: marka,
    model: model,
    kilometre: kilometre,
    fiyat: fiyat,
    depo: 50,
    getPrice: function(){
        return "Arabanın güncel piyasa değeri " + this.fiyat + " TL'dir."
    },
    refuel: function(x){
      this.depo = this.depo + x
      if(this.depo>100)
        this.depo = 100
    return "Depo %" + this.depo + " doludur." 
  },
    drive: function(km){
      this.kilometre = this.kilometre + km
      this.depo = this.depo - km*5/100
      if(this.depo<0)
        this.depo=0
      this.fiyat = this.fiyat - km*50/100
      return "Arabanın güncel kilometresi: " + this.kilometre
    },
}
 return volvo;
}

const myCar = carSimulator("Volvo","S60",100000,200000)
console.log(myCar.getPrice())
console.log(myCar.refuel(30))
console.log(myCar.drive(200))