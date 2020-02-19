


window.onload = () => {
    document.querySelector("#btn").addEventListener("click", () =>{
        document.querySelector("#excuse").innerHTML = getFrase()
    })
    console.log("Hello Rigo from the console")



    let getFrase = () => {

        let who = ["the dog", "my gramma", "his turtle","my bird"];
        let what = ["eat", "pissed","crushed","broked"];
        let when = ["before the class", "right in time","when i finished","durign my lunch","when i was praying"];

        let a=0;
        let b=0;
        let c=0;

        a = Math.floor(Math.random()*who.length);
        b = Math.floor(Math.random()*what.length);
        c = Math.floor(Math.random()*when.length);

        return who[a] +" "+ what[b] +" "+ when[c]
    }


}