// Clicking on the 💗 heart icon
document.querySelectorAll('.heart-count-click').forEach(function (love) {
    love.addEventListener('click', function (e) {
        e.preventDefault()
        let heartCount = document.getElementById('heart-count')
        let heartCountParse = parseInt(heartCount.innerText)

        if (e.currentTarget.classList.contains('fa-regular')) {
            e.currentTarget.classList.remove('fa-regular', 'text-gray-500')
            e.currentTarget.classList.add('fa-solid', 'text-black')
            heartCount.innerText = heartCountParse + 1
        }

        else if (e.currentTarget.classList.contains('fa-solid')) {
            e.currentTarget.classList.remove('fa-solid', 'text-black')
            e.currentTarget.classList.add('fa-regular', 'text-gray-500')
            heartCount.innerText = heartCountParse - 1
        }
    })
})

let callHistoryData = []

// Clicking on the ☎ phone btn
document.querySelectorAll('.call-btn').forEach(function (call) {
    call.addEventListener('click', function () {
        // the parent
        let hotlineCard = call.closest('.hotline-card')

        // find the service name and number
        let serviceName = hotlineCard.querySelector('.service-name').innerText
        let serviceCallNumber = hotlineCard.querySelector('.service-call-number').innerText
        let data = {
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString()
        }

        // alert message

        // gold coin function

        let callGoldCoin = document.getElementById('call-gold-coin')
        let parseCallGoldCoin = parseInt(callGoldCoin.innerText)

        if (parseCallGoldCoin >= 20) {
            callGoldCoin.innerText = parseCallGoldCoin - 20
            alert(`☎☎ Calling ${serviceName} \n ${serviceCallNumber}`)

            // call History Data

            let callHistoryDataContainer = document.getElementById('right-tall-box-call-history')
            callHistoryDataContainer.innerText = ''

            callHistoryData.push({ serviceName, serviceCallNumber, ...data })

            for (let hide of callHistoryData) {
                let div = document.createElement('div')
                div.innerHTML = `
            <div class="flex justify-between items-start w-full bg-[#FFF3F3] p-3 rounded-lg mt-5">
                    <div>
                        <h1 class="text-xl font-bold">${hide.serviceName}</h1>
                        <p>${hide.serviceCallNumber}</p>
                    </div>
                    <div>
                        <p>${hide.time}</p>
                        <p>${hide.date}</p>
                    </div>
                </div>
            `
                callHistoryDataContainer.appendChild(div)
            }
        }
        else {
            alert('You do not have sufficient balance. Please terminate the process')
        }

        // // call History Data

        // let callHistoryDataContainer = document.getElementById('right-tall-box-call-history')
        // callHistoryDataContainer.innerText = ''

        // callHistoryData.push({serviceName, serviceCallNumber, ...data})

        // for (let hide of callHistoryData) {
        //     let div = document.createElement('div')
        //     div.innerHTML = `
        //     <div class="flex justify-between items-start w-full bg-[#FFF3F3] p-3 rounded-lg mt-5">
        //             <div>
        //                 <h1 class="text-xl font-bold">${hide.serviceName}</h1>
        //                 <p>${hide.serviceCallNumber}</p>
        //             </div>
        //             <div>
        //                 <p>${hide.time}</p>
        //                 <p>${hide.date}</p>
        //             </div>
        //         </div>
        //     `
        //     callHistoryDataContainer.appendChild(div)
        // }
    })
})
// Clear btn
document.getElementById('clear-btn').addEventListener('click', function(){
    let callHistoryDataContainer = document.getElementById('right-tall-box-call-history')

    callHistoryDataContainer.innerText = ''

    callHistoryData = []
})


// copy btn

document.querySelectorAll('.copy-btn').forEach(function(copy){
    copy.addEventListener('click', function(e){
        e.preventDefault()

        let copyNoNumber = document.getElementById('copy-no-number')
        parseCopyNoNumber = parseInt(copyNoNumber.innerText)

    
        // the text that to be copied
        let hotlineCard = copy.closest('.hotline-card')
        let copyNumber = hotlineCard.querySelector('.service-call-number').innerText

        // copy to the clipboard
        navigator.clipboard.writeText(copyNumber)
        // result
        alert('Copied- ' + copyNumber)

        copyNoNumber.innerText = parseCopyNoNumber + 1;
    })
})