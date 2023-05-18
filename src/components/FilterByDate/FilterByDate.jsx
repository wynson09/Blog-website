import React from "react";

function FilterByDate({ filter, setFilter }) {
  return (
    <section>
      <div className="inputbox2 filter">
        <input
          required
          type="date"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <span className="btn-date btn-filter">Filter by Date - All</span>
        <i></i>
      </div>
    </section>
  );
}

export default FilterByDate;
