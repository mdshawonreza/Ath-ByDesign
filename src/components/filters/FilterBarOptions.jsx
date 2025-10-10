import React, { useContext } from 'react';
import filtersContext from '../../contexts/filters/filtersContext';
import { sortMenu } from '../../data/filterBarData';
import { displayMoney } from '../../helpers/utils';

const FilterBarOptions = () => {
  const {
    sortedValue,
    setSortedValue,
    updatedBrandsMenu,
    updatedCategoryMenu,
    handleBrandsMenu,
    handleCategoryMenu,
    handlePrice,
    selectedPrice: { price, minPrice, maxPrice },
    mobFilterBar: { isMobSortVisible, isMobFilterVisible },
    handleMobSortVisibility,
    handleMobFilterVisibility,
    handleClearFilters,
  } = useContext(filtersContext);

  const displayPrice = displayMoney(price);

  return (
    <div className="space-y-6">
      {/* ===== Clear-Filters btn ===== */}
      {sortedValue && (
        <div>
          <button
            type="button"
            onClick={handleClearFilters}
            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* ===== Sort-menu ===== */}
      <div
        className={`fixed inset-0 z-50 bg-gray-100 p-8 overflow-auto transform transition-transform ${
          isMobSortVisible ? 'translate-y-0' : 'translate-y-full'
        } lg:relative lg:translate-y-0 lg:bg-transparent lg:p-0`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Sort By</h3>
          <button
            type="button"
            className="text-2xl font-bold lg:hidden"
            onClick={() => handleMobSortVisibility(false)}
          >
            &times;
          </button>
        </div>

        <hr className="mb-4 border-gray-300" />

        <ul className="space-y-2">
          {sortMenu.map((item) => {
            const { id, title } = item;
            return (
              <li
                key={id}
                onClick={() => setSortedValue(title)}
                className={`cursor-pointer ${
                  sortedValue === title
                    ? 'text-orange-500 font-semibold'
                    : 'hover:text-orange-500'
                }`}
              >
                {title}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ===== Filter-menu ===== */}
      <div
        className={`fixed inset-0 z-50 bg-gray-100 p-8 overflow-auto transform transition-transform ${
          isMobFilterVisible ? 'translate-y-0' : 'translate-y-full'
        } lg:relative lg:translate-y-0 lg:bg-transparent lg:p-0`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Filter By</h3>
          <button
            type="button"
            className="text-2xl font-bold lg:hidden"
            onClick={() => handleMobFilterVisibility(false)}
          >
            &times;
          </button>
        </div>

        <hr className="mb-4 border-gray-300" />

        {/* Filter by Brands */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Brands</h4>
          <ul className="space-y-1">
            {updatedBrandsMenu.map((item) => {
              const { id, checked, label } = item;
              return (
                <li key={id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={label}
                    value={label}
                    checked={checked}
                    onChange={() => handleBrandsMenu(id)}
                    className="cursor-pointer"
                  />
                  <label htmlFor={label} className="select-none cursor-pointer">
                    {label}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Filter by Category */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Category</h4>
          <ul className="space-y-1">
            {updatedCategoryMenu.map((item) => {
              const { id, checked, label } = item;
              return (
                <li key={id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={label}
                    value={label}
                    checked={checked}
                    onChange={() => handleCategoryMenu(id)}
                    className="cursor-pointer"
                  />
                  <label htmlFor={label} className="select-none cursor-pointer">
                    {label}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Filter by Price */}
        <div>
          <h4 className="font-medium mb-2">Price</h4>
          <p className="font-semibold mb-1">{displayPrice}</p>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handlePrice}
            className="w-full accent-orange-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBarOptions;
