const button=document.createElement("button")
document.body.appendChild(button)
button.innerHTML="click"
const div=document.createElement("div")
const first=document.createElement("h1")
const second=document.createElement("h1")
const third=document.createElement("h1")
const fourth=document.createElement("h1")

document.body.appendChild(div)
div.appendChild(first)
div.appendChild(second)
div.appendChild(third)
div.appendChild(fourth)
first.innerHTML="first"
second.innerHTML="second"
third.innerHTML="third"
fourth.innerHTML="fourth"

//
div.style.backgroundColor="violet"
div.style.width="40%"
div.style.height="300px"
div.style.borderRadius="15px"
div.style.marginLeft='30%'
div.style.marginTop='12%'
div.style.display="flex"

//
first.style.backgroundColor="orange"
first.style.height="50%"
first.style.width="20%"
first.style.marginTop="12%"
first.style.marginLeft="4%"
first.style.borderRadius="10px"
first.style.display="block"

//
second.style.backgroundColor="orange"
second.style.height="70%"
second.style.width="20%"
second.style.marginTop="6%"
second.style.marginLeft="4%"
second.style.borderRadius="10px"
second.style.display="block"

//
third.style.backgroundColor="orange"
third.style.height="30%"
third.style.width="20%"
third.style.marginTop="17%"
third.style.marginLeft="4%"
third.style.borderRadius="10px"
third.style.display="block"

//
fourth.style.backgroundColor="orange"
fourth.style.height="45%"
fourth.style.width="20%"
fourth.style.marginTop="13%"
fourth.style.marginLeft="4%"
fourth.style.borderRadius="10px"
fourth.style.display="block"

button.addEventListener("click",()=>{
    if (div.style.display==="none") {
        div.style.display="flex"
    }else{
        div.style.display="none"
    }
})