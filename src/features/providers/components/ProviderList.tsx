// src/components/ProviderList.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { providers } from '../data/providers';
import { Provider } from '../../../types/provider';
import MemoizedProviderListItem from './ProviderListItem';
import ProviderListFilterInput from './ProviderListFilterInput';
import { useDebounce } from '@/hooks/useDebounce';

const NO_FILTER = '';
const NO_PROVIDERS_MESSAGE = 'No providers found in the selected state.';

const ProviderList: React.FC = () => {
  const [selectedStateFilter, setSelectedStateFilter] = useState<string>(NO_FILTER);
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>(providers);

  const filterProvidersByStateCode = useCallback((filter: string) => {
    const filtered = providers.filter((provider: Provider) =>
      filter === NO_FILTER || provider.State.toLowerCase() === filter.toLowerCase()
    );
    setFilteredProviders(filtered);
  }, []);

  const debouncedFilterProviders = useDebounce(filterProvidersByStateCode, 200);

  useEffect(() => {
    debouncedFilterProviders(selectedStateFilter);
  }, [selectedStateFilter, debouncedFilterProviders]);

  const handleFilterChange = (value: string) => {
    setSelectedStateFilter(value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4" tabIndex={0}>Medical Providers</h1>
      
      <ProviderListFilterInput 
        selectedStateFilter={selectedStateFilter} 
        onSelectedStateFilterChange={handleFilterChange} 
        aria-label="Filter providers by state"
      />

      <div 
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        aria-label="List of medical providers"
      >
        {filteredProviders.map((provider: Provider) => (
          <MemoizedProviderListItem key={provider.ProviderId} provider={provider} />
        ))}
      </div>

      {filteredProviders.length === 0 && (
        <p className="text-gray-500 text-center mt-4" role="status">
          {NO_PROVIDERS_MESSAGE}
        </p>
      )}
    </div>
  );
};

export default ProviderList;
