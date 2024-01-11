const seconds = document.querySelector(".seconds")
const minutes = document.querySelector(".minutes")
const hours = document.querySelector(".hours")

const timenow=()=>{
const time = new Date()
return{
secondsnew : time.getSeconds()*6,
minutesnew : time.getMinutes()*6,
hoursnew : time.getMinutes()*30
}

}
setInterval(()=>{
const {secondsnew,minutesnew,hoursnew}=timenow()
seconds.style.transform= `rotate(${secondsnew}deg)`
minutes.style.transform= `rotate(${minutesnew}deg)`
hours.style.transform= `rotate(${hoursnew}deg)`

},1000)
