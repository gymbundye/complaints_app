//Variables
//for input 
const cityInput= document.getElementById("cityInput")

//for  city buttons and to connect to html
const brooklyn = document.getElementById("brooklyn")
const statenIsland = document.getElementById("statenIsland")
const queens = document.getElementById('queens')
const manhantan= document.getElementById('manhattan')
const bronx= document.getElementById('bronx')

//for crime stats

const crimeArea= document.getElementById('crimeArea')

//buttons to fetch api data
brooklyn.addEventListener("click", ()=>{
    let cityInput2=cityInput.value
    const url =`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD`
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        crimeArea.innerHTML= `<ul>`
        for (let i=0; i<cityInput2; i++){
            crimeArea.innerHTML += `<li id="crimeElement${i}">${(data[i].descriptor)} <button id= "crime${i}">Police Action!</button> <br></li>`
            console.log(document.getElementById(`crime${i}`))
            
        }
        crimeArea.innerHTML += `</ul>`
        for (let i=0; i<cityInput2; i++){
        document.getElementById(`crime${i}`).addEventListener("click",  function() {
            
              document.getElementById(`crimeElement${i}`).innerHTML+=data[i].resolution_description
          })
        }
    })
    .catch((error) => {
    console.log(error);
    });
})


statenIsland.addEventListener("click", ()=>{
    let cityInput2=cityInput.value
    const url =`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN%20ISLAND&agency=NYPD`
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        crimeArea.innerHTML= `<ul>`
        for (let i=0; i<cityInput2; i++){
            crimeArea.innerHTML += `<li id="crimeElement${i}">${(data[i].descriptor)} <button id= "crime${i}">Police Action!</button> <br></li>`
            console.log(document.getElementById(`crime${i}`))
            
        }
        crimeArea.innerHTML += `</ul>`
        for (let i=0; i<cityInput2; i++){
        document.getElementById(`crime${i}`).addEventListener("click",  function() {
            
              document.getElementById(`crimeElement${i}`).innerHTML+=data[i].resolution_description
          })
        }
    })
    .catch((error) => {
    console.log(error);
    });


})


queens.addEventListener("click", ()=>{
    let cityInput2=cityInput.value
    const url =`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS&agency=NYPD`
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        crimeArea.innerHTML= `<ul>`
        for (let i=0; i<cityInput2; i++){
            crimeArea.innerHTML += `<li id="crimeElement${i}">${(data[i].descriptor)} <button id= "crime${i}">Police Action!</button> <br></li>`
            console.log(document.getElementById(`crime${i}`))
            
        }
        crimeArea.innerHTML += `</ul>`
        for (let i=0; i<cityInput2; i++){
        document.getElementById(`crime${i}`).addEventListener("click",  function() {
            
              document.getElementById(`crimeElement${i}`).innerHTML+=data[i].resolution_description
          })
        }
    })
    .catch((error) => {
    console.log(error);
    });
})



manhattan.addEventListener("click", ()=>{
    let cityInput2=cityInput.value
    const url =`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN&agency=NYPD`
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        crimeArea.innerHTML= `<ul>`
        for (let i=0; i<cityInput2; i++){
            crimeArea.innerHTML += `<li id="crimeElement${i}">${(data[i].descriptor)} <button id= "crime${i}">Police Action!</button> <br></li>`
            console.log(document.getElementById(`crime${i}`))
            
        }
        crimeArea.innerHTML += `</ul>`
        for (let i=0; i<cityInput2; i++){
        document.getElementById(`crime${i}`).addEventListener("click",  function() {
            
              document.getElementById(`crimeElement${i}`).innerHTML+=data[i].resolution_description
          })
        }
    })
    .catch((error) => {
    console.log(error);
    });
})




bronx.addEventListener("click", ()=>{
    let cityInput2=cityInput.value
    const url =`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD`
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        crimeArea.innerHTML= `<ul>`
        for (let i=0; i<cityInput2; i++){
            crimeArea.innerHTML += `<li id="crimeElement${i}">${(data[i].descriptor)} <button id= "crime${i}">Police Action!</button> <br></li>`
            console.log(document.getElementById(`crime${i}`))
            
        }
        crimeArea.innerHTML += `</ul>`
        for (let i=0; i<cityInput2; i++){
        document.getElementById(`crime${i}`).addEventListener("click", function() {
            
              document.getElementById(`crimeElement${i}`).innerHTML+=data[i].resolution_description
          })
           //I know i need to create an onclick event to block the display(display;block) but im not sure where to write the function. 
           //any feed back would be awesome!   
        
            
          
        }   
      
    })
    .catch((error) => {
    console.log(error);
    });
})




