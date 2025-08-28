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


    if (e.target.id === "copy") {

        const buttonParent = e.target.parentNode;
        const card = buttonParent.parentNode;
        const ServiceNumber = card.querySelector(".Service-number").innerText;
        alert(`Number Copied ${ServiceNumber}`)
        navigator.clipboard.writeText(ServiceNumber);


        let copyCount = Number(getElement("Copy-Count").innerText);
        copyCount++;
        getElement("Copy-Count").innerText = copyCount;
    }




    
    if (e.target.id === "call") {

        const mainCoinCount = Number(getElement("coins").innerText);
        if (mainCoinCount <20) {
            alert("You don't have enough coins to make this call!")
            return;
        }
        let coinCount = Number(getElement("coins").innerText);
        coinCount -=20;
        getElement("coins").innerText = coinCount;



        const buttonParent = e.target.parentNode;
        const card = buttonParent.parentNode; 
        const ServiceName = card.querySelector(".Service-name").innerText;
        const ServiceNumber = card.querySelector(".Service-number").innerText;
        const ServiceNumberFull = card.querySelector(".Service-name-full").innerText;
        alert(`${ServiceName}-${ServiceNumber}`)

        

        const historyContainer = getElement("History")

        const createDiv = document.createElement("div")
        createDiv.innerHTML = `   <div
                        class="History-child border rounded-lg  sm:w-[352px] h-[105px]  p-7 text-sm bg-gray-100 mt-5 flex flex-col justify-between">
                        <div class="flex justify-between items-center ">
                            <h1 class="font-bold">${ServiceNumberFull}</h1>

                            <span class="call-time">${new Date().toLocaleTimeString()}</span>
                        </div>
                        <p>${ServiceNumber}</p>
                    </div>
        `
        historyContainer.appendChild(createDiv);


      
    }




})




document.getElementById("History").addEventListener("click", function (e) {

    e.preventDefault()

    if (e.target.id === "clear") {


        const getHistory= getElement("History")

        const removeHistoryChild = getHistory.querySelectorAll(".History-child")

        for (const child of removeHistoryChild ) {
            child.remove()
        }

    }


})
