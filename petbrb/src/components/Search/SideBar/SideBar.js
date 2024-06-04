import React, { useState } from 'react';
import styles from './SideBar.module.css';

const SideBar = () => {
  const [filters, setFilters] = useState({
    availability: '',
    experience: '',
    rating: '',
    sortBy: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <aside className={styles.container}>
      <h2>Filters</h2>

      {/* Availability Filter */}
      <div className={styles.filterSection}>
        <h3 className={styles.label}>Availability</h3>
        <select
          name="availability"
          value={filters.availability}
          onChange={handleFilterChange}
          className={styles.select}
        >
          <option value="">Any</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>

      {/* Experience Filter */}
      <div className={styles.filterSection}>
        <h3 className={styles.label}>Experience</h3>
        <select
          name="experience"
          value={filters.experience}
          onChange={handleFilterChange}
          className={styles.select}
        >
          <option value="">Any</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      {/* Rating Filter */}
      <div className={styles.filterSection}>
        <h3 className={styles.label}>Rating</h3>
        <select
          name="rating"
          value={filters.rating}
          onChange={handleFilterChange}
          className={styles.select}
        >
          <option value="">Any</option>
          <option value="4">4 stars or higher</option>
          <option value="3">3 stars or higher</option>
          <option value="2">2 stars or higher</option>
        </select>
      </div>

      {/* Sort By Filter */}
      <div className={styles.filterSection}>
        <h3 className={styles.label}>Sort By</h3>
        <select
          name="sortBy"
          value={filters.sortBy}
          onChange={handleFilterChange}
          className={styles.select}
        >
          <option value="">Default</option>
          <option value="rateAsc">Rate (Ascending)</option>
          <option value="rateDesc">Rate (Descending)</option>
          <option value="ratingDesc">Rating (Descending)</option>
        </select>
      </div>
    </aside>
  );
};

export default SideBar;