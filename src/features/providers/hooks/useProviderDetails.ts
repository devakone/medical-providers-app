import { useState, useEffect } from 'react';
import { Provider } from '@/types/provider';
import { providers } from '@/features/providers/data/providers';

export function useProviderDetails(id: string | number) {
  const [provider, setProvider] = useState<Provider | null>(null);
  // This would normally fetch the provider data based on the ID passed in but 
  // we will simulate it by finding the provider in the initial list by Id.
  useEffect(() => {
    if (id) {
      const foundProvider = providers.find((p: Provider) => p.ProviderId === Number(id));
      setProvider(foundProvider || null);
    }
  }, [id]);

  return provider;
}
