"use client";
import { v4 as uuidv4 } from 'uuid';
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
    return addUUIDsToData(data); 
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

  const addUUIDsToData = (data) => {
    // Loop through boards and add UUIDs
    for (const board of data.boards) {
      board.id = uuidv4();

      // Loop through columns and add UUIDs
      for (const column of board.columns) {
        column.id = uuidv4();

        // Loop through tasks and add UUIDs
        for (const task of column.tasks) {
          task.id = uuidv4();

          // Loop through subtasks and add UUIDs (if needed)
          for (const subtask of task.subtasks) {
            subtask.id = uuidv4();
          }
        }
      }
    }
    return data;
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
    <DataContext.Provider value={{ dummyData, saveData, setDummyData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
