
window.onload = ()=>{

    let body = document.body;
    body.style.display = "flex";
    body.style.justifyContent = "center"
    body.style.alignItems = "center"
    body.style.height="100vh"

    let generatorExcuse = ()=>{
        
        let who = ['The dog','My grandma','His turtle','My bird'];
        let action = ['ate','peed','crushed','broke'];
        let what = ['my homework', 'the keys', 'the car'];
        let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
        
        let randomNumber =  Math.floor(Math.random()* who.length);
        let randomNumber2 =  Math.floor(Math.random()*action.length);
        let randomNumber3 =  Math.floor(Math.random()*when.length);

        return `${who[randomNumber]} ${action[randomNumber]} ${what[randomNumber2]} ${when[randomNumber3]} ` ;
    }
    
    document.querySelector("#excuse").innerHTML = generatorExcuse();
    let container = document.getElementsByClassName("container")
    container[0].style.textAlign= "center"
    let omg = document.createElement("h1")
    omg.textContent = "OMG! you will not belive me but..."
    container[0].insertBefore(omg,container[0].childNodes[0] )
    

    
}