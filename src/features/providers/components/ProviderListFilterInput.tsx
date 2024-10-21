import React from 'react';

interface ProviderListFilterInputProps {
    selectedStateFilter: string;
    onSelectedStateFilterChange: (value: string) => void;
}

const ProviderListFilterInput: React.FC<ProviderListFilterInputProps> = ({ selectedStateFilter, onSelectedStateFilterChange }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelectedStateFilterChange(e.target.value);
  };

  return (
    <div className="mb-6">
      <label htmlFor="stateFilter" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by State:
      </label>
      <input
        id="stateFilter"
        type="text"
        value={selectedStateFilter}
        onChange={handleFilterChange}
        className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter state code (e.g., IL)"
      />
    </div>
  );
};

export default ProviderListFilterInput;
