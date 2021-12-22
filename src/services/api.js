import axios from 'axios';

const baseUrl="https://api.openweathermap.org/data/2.5/weather?";
const apiKey="efccc4ae01fa6ad8739c96da2b9f7a2e";

export const fetchApi=async(name)=>{
    const res=await axios.get(baseUrl+`q=${name}&units=metric&appid=${apiKey}`);
    return res;
}

// const resJson=await res.json();
    // console.log(res);
    // setCity(res.main);

//       const response=await fetch(data);
//       const resJson=await response.json();
//       console.log(resJson);
//       setCity(resJson.main);
//     } 