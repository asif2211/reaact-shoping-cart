import React, { Component, useState, useEffect } from "react";

const AxiosApi = () => {
    
  const [appstate, setAppState] = useState({
    loading: false,
    repos: null,
    
  });
  
  const axios = require("axios").default;
  const API_key = "3ddd8d8c949493d63136ea31464a9e17";
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${API_key}`;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);
  return (
    <div>
      <h2>{appstate.repos && appstate.repos.name}</h2>
      <h2>{appstate.repos && appstate.repos.name}</h2>
    </div>
  );
};
export default AxiosApi;
