"use client"
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <FilterContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </FilterContext.Provider>
  );
}
