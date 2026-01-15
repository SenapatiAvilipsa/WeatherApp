const apiKey="584f9e1d275eac3d88b9868179def7e2";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bhubaneswar";

        async function checkWeather(){
            const response=await fetch(apiUrl+`&appid=${apiKey}`)

            var data=await  response.json();
            console.log(data);




            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=data.main.temp;
             document.querySelector(".humidityy").innerHTML=data.main.humidity;
              document.querySelector(".wind").innerHTML=data.wind.speed;
            

            
        }

        checkWeather()