"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dummyData, setDummyData] = useState(null);

  const saveData = (data) => {
    setDummyData(data);
    localStorage.setItem("dummyData", JSON.stringify(data));
  };

  // Fetch the dummy data
  const fetchData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    // Fetch the JSON data when the component mounts
    (async () => {
      const data = await fetchAndSaveData();
      setDummyData(data);
    })();
  }, []);

  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("dummyData", JSON.stringify(data));
  };

  const checkDataInLocalStorage = () => {
    const dummyData = localStorage.getItem("dummyData");
    return dummyData ? JSON.parse(dummyData) : null;
  };

  const fetchAndSaveData = async () => {
    let data = checkDataInLocalStorage();
    if (!data) {
      try {
        data = await fetchData();
        saveDataToLocalStorage(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    return data;
  };

  return (
    <DataContext.Provider value={{ dummyData, saveData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
