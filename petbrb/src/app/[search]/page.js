'use client';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import SideBar from "@/components/Search/SideBar/SideBar";
import SitterTile from "@/components/Search/SitterTile/SitterTile";
import { fetchFilteredSitters } from "./helpers/fetchFilteredSitters";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const filteredResults = await fetchFilteredSitters(searchParams);
      setResults(filteredResults);
    };

    fetchData();
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <h1>Search Results</h1>
      <div className={styles.main}>
        <SideBar />
        <div className={styles.sittersList}>
          <SitterTile results={results} />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;