function tutarHesapla(diziler) {
  let count = 0
  const ahmet = ["a","h","m","e","t"]

  for(let i=0; i< diziler.length;i++)
    {
      let dizi = diziler[i].toLowerCase()
      for(let y=0; y<ahmet.length;y++)
        {
          for(let k=0; k<dizi.length;k++)
            {
              if(dizi.charAt(k) === ahmet[y])
                count++
            }
        }
    }
    
  return count * 1000
}