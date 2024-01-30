const seconds = document.querySelector(".seconds")
const minutes = document.querySelector(".minutes")
const hours = document.querySelector(".hours")




const timenow =()=>{
const time = new(Date)
const secondsnow = time.getSeconds()*6
const minutesnow = time.getMinutes()*6
const horsnow = time.getHours()*30

hours.style.transform=`rotate(${horsnow}deg)`
minutes.style.transform=`rotate(${minutesnow}deg)`
seconds.style.transform=`rotate(${secondsnow}deg)`
} 

setInterval(()=>{
timenow()

},1000)
