
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const makerequest = async () => {
    try {
        let w = document.getElementById("input").value;
        let resp = await fetch(`${url}${w}`)
        data = await resp.json()
        console.log(data)
        //word
        document.getElementById("word").innerText=w;


        // partOfspeech 
        let det=(data[0].meanings[0].partOfSpeech || "not found")
       // phonetic
        let phon=(data[0].phonetic || "not found")
        document.getElementById("word-details").innerHTML=det +"   "+phon;

        // meaning
        try{
            let mean=(data[0].meanings[0].definitions[0].definition)
        document.getElementById("meaning").innerText=mean;
        }
        catch (e){
            document.getElementById("meaning").innerHTML="NOT FOUND"
        }
        
        //example
        try{
        let e=(data[0].meanings[0].definitions[0].example || "not found")
        document.getElementById("example").innerHTML=e;
        console.log(e)
        }
        catch (e){
            document.getElementById("example").innerHTML="NOT FOUND"
            
        }

        
        
    }
    catch (e) {
        document.getElementById("word").innerHTML="NOT FOUND ERROR"
        document.getElementById("example").innerHTML=""
        document.getElementById("meaning").innerHTML=""
    }
}
let x = document.getElementById("search")
x.addEventListener('click', makerequest);












