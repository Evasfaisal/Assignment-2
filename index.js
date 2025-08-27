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

})