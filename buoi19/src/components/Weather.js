import React, { useEffect, useState } from 'react'
import { Container, Input } from 'reactstrap';
import "../components/Weather.css"
import axios from 'axios';

export default function Weather() {
    const [data, setData] = useState(null);
    const [text, setText] = useState("Ho Chi Minh")
    const [city, setCity] = useState("Ho Chi Minh")
    const [error, setError] = useState(null)
    const APIkey = "e0ddc538b3415427caeb7901218a30dd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;

    const fetchData = () => {
        axios.get(url)
            .then(function (response) {
                // handle success
                setData(response.data);
                console.log(response.data);
            })
            .catch(function (err) {
                // handle error
                console.log(err);
                if (err.response.status == '404') {
                    setError("Invalid City name")
                }
            })
    }

    const convertTimeZone = (date, timeZone) => {
        return new Date((typeof date === 'string' ? new Date(date) : date)
            .toLocaleString('en-US', { timeZone }))
    }

    const getTime = (value) => {
        let d = new Date(value * 1000);
        return d.toLocaleDateString();
    }
    useEffect(() => {
        fetchData()
    }, [city])


    return (
        <Container>
            <Input type='text' value={text} placeholde='Enter Location' onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
                if (e.key == "Enter") {
                    setCity(text);
                    setText("")
                }
            }}></Input>


            {
                error &&
                <h1>{error}</h1>

            }

            {
                data &&
                <h1 className='city-name'>{data.name}</h1>
            }


            {
                data &&
                <div className='content'>
                    <div className='inf-content'>
                        <i class="fa-solid fa-location-dot"></i>
                        <h4 className='m name'>{data.name}</h4>

                        <h4 className='m temp'>{data.main.temp}</h4>

                        <h4 className='m status-weather'>{data.weather[0].description}</h4>
                        <h5 className='m sunrise'>{getTime(data.sys.sunrise)}</h5>
                        <h5 className='m sunset'>{getTime(data.sys.sunset)}</h5>
                        <h5 className='m country'>{data.sys.country}</h5>
                    </div>
                    <img className='inf-img' src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`}></img>
                </div>
            }
        </Container>
    )
}
