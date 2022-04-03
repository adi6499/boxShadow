let range = document.querySelectorAll(".range")
let box = document.querySelector(".box")
let heightPixel = document.querySelector(".heightPixel")
let widthPixel = document.querySelector(".widthPixel")
let boxShadowPixel = document.querySelector(".boxShadowPixel")
let borderRadiusPixel = document.querySelector(".borderRadiusPixel")
let color = document.getElementById("color")

color.addEventListener("input",(e)=>{
              let c=  e.target.value
              let color = document.querySelector(".box")
              color.style.background = c
              
});
range.forEach((r)=>{
    r.addEventListener("input",(e)=>{
        if(e.target.id=="height"){
            box.style.height= e.target.value +"px"
            heightPixel.innerHTML=`height:${e.target.value}px;`
           
        }else if(e.target.id=="width"){
            box.style.width= e.target.value +"px"
            widthPixel.innerHTML=`width:${e.target.value}px;`
        }
        else if(e.target.id=="borderRadius"){
            box.style.borderRadius= e.target.value +"px"
            borderRadiusPixel.innerHTML=`border-Radius:${e.target.value}px;`
        }
        else if(e.target.id=="color"){
            box.style.boxShadowColor=`${e.target.value}`   
        }
        else if(e.target.id=="boxShadow"){
        
          
            box.style.boxShadow= `0px 0px ${e.target.value}px black`
            boxShadowPixel.innerHTML=`box-Shadow:0px 0px ${e.target.value}px;`
       
        }
        
          
    })
})