function getElement(id){
 return document.getElementById(id)
}


document.getElementById("card-box").addEventListener('click',function(e){
    e.preventDefault()

    
    
    if (e.target.id === "love") {
        let loveCount = Number(getElement("love-count").innerText);
        loveCount++;
        getElement("love-count").innerText = loveCount;
    }
    
    if (e.target.id === "call") {

        const buttonParent = e.target.parentNode;
        const card = buttonParent.parentNode; 
        const ServiceName = card.querySelector(".Service-name").innerText;
        const ServiceNumber = card.querySelector(".Service-number").innerText;
        alert(`${ServiceNumber} - ${ServiceName }`)


      
        const mainCoinCount = Number(getElement("coins").innerText);
        if (mainCoinCount <20) {
            alert("You don't have enough coins to make this call!")
            return;
        }
        let coinCount = Number(getElement("coins").innerText);
        coinCount -=20;
        getElement("coins").innerText = coinCount;
    }

})