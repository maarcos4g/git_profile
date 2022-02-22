import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

export function useSearch() {
    const value = useContext(SearchContext);
    
    return value;
}