


let inputbox = document.getElementById("inputbox")


// fetch("https://api.weatherapi.com/v1/current.json?key=01645f631017438c88b194134230503&q=bangalore&aqi=yes"
// )

    
//   .then((response) => response.json())
//   .then((response) => { 

    // console.log(response);

    // Temperature = response.current.temp_c	
    // City = response.location.name

    // document.getElementById("temp").innerText = `The temprature is ${Temperature} C`
    // document.getElementById("city").innerText = `The temprature is ${Temperature} C in ${City}`

    // console.log(Temperature)
    

  // })
//   .then((e) => {temp.innerText = `${e.current.condition.temp_c}`} )

//   var temp = document.getElementById("temp");

const getData = async (event) => {
    event.preventDefault();

    const city = inputbox.value;

   const FecthData = await fetch(`https://api.weatherapi.com/v1/current.json?key=01645f631017438c88b194134230503&q=${city}&aqi=yes`
    )
    
        
      .then((response) => response.json())
      .then((response) => { 
    
        console.log(response);
    
        Temperature = response.current.temp_c	
        CityName = response.location.name
    
        document.getElementById("temp").innerText = `The temprature is ${Temperature} C`
        document.getElementById("city").innerText = `The temprature is ${Temperature} C in ${CityName}`
    
        console.log(Temperature)
        
    
      })
      // .then((e) => {temp.innerText = `${e.condition.temp_c}`} )
    
      var temp = document.getElementById("temp");
};