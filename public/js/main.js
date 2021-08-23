const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp-status');
const data_hide = document.querySelector('.data_hide');

const getInfo = async(event) => {
    event.preventDefault();
    if(cityName.value === "")
    {
        city_name.innerText = `Please write the name before search`;
    }
    else{
        try {
            let key = "8c2ed6dec899cd558a2b3f2639ab9d69";
            let city = cityName.value;
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            // condition to check sunny or cloudy
            if (tempMood == "Clear")
            {
                temp_status.innerHTML = `<i class="bi bi-sun"></i>`;
            }
            else if (tempMood == "Clouds")
            {
                temp_status.innerHTML = `<i class="bi bi-clouds"></i>`;
            }
            else if (tempMood == "Rain")
            {
                temp_status.innerHTML = `<i class="bi bi-cloud-rain"></i>`;
            }
            else
            {
                temp_status.innerHTML = `<i class="bi bi-cloud-sun"></i>`;
            }
            data_hide.classList.remove('data_hide');
        } catch (error) {
            city_name.innerHTML = `Please enter the city name properly`
            console.log(error);
        }
    }
}

submitBtn.addEventListener('click', getInfo);