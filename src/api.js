
export const fetchData = async (city,country) => {
    const API_key = "3ddd8d8c949493d63136ea31464a9e17";
    try {
      console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)
      // "http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${API_key}"
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };