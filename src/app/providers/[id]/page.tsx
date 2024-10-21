"use client"; 

import ProviderDetails from '@/features/providers/components/ProviderDetails';
import { useProviderDetails } from '@/features/providers/hooks/useProviderDetails';


interface ProviderDetailsProps {
  params: { id: string };
}

export default function ProviderDetailsPage({ params }: ProviderDetailsProps) {
  const { id } = params;
  const provider = useProviderDetails(id);

  if (!provider) {
    return <div>Loading...</div>;
  }

  return <ProviderDetails provider={provider} />;
}