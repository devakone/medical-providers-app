import React from 'react';
import { Provider } from '@/types/provider';
import Link from 'next/link';

interface ProviderListItemProps {
  provider: Provider;
}

const ProviderListItem: React.FC<ProviderListItemProps> = ({ provider }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{provider.Name}</h2>
      <p className="text-gray-600 mb-1">
        {provider.City}, {provider.State}
      </p>
      <p className="text-gray-600 mb-3">Specialty: {provider.Specialty}</p>
      <Link href={`/providers/${provider.ProviderId}`}>
        <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">View Details →</span>
      </Link>
    </div>
  );
};

const MemoizedProviderListItem = React.memo(ProviderListItem);


export default MemoizedProviderListItem;
