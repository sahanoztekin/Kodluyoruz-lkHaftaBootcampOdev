async function getJsonFile(data){ 
          let result = await fetch("./json.json") //json dosyasını fetch ile çektim.
         .then(response => response.json()) // ardından promise ettim.


       const AliceBlue = result.filter(blue=>blue.group === "AliceBlue")
       console.log(AliceBlue) 
       const OrangeRed = result.filter(orange=>orange.group === "OrangeRed")
       console.log(OrangeRed)
       const DeepPink = result.filter(deep=>deep.group === "DeepPink")
       console.log(DeepPink)

//renkleriyle bir const oluşturup result ettiğim değişkeni filtreleyip consola 3 farklı grupta yazdırdım.
      


 }
 getJsonFile()


async function asistan(){
        let asistann = await fetch("./json.json")
        .then(response=> response.json())
        const asistans = asistann.filter(asis => asis.assistant === true)
        console.log(asistans)
          
        //aynı yukarıda ki mantıkla ilerleyip  asistann  değişkenini filtreleyip true ile hem ifade hem tür olarak erişenleri ekrana yazdıracak.
    
       }


asistan()

