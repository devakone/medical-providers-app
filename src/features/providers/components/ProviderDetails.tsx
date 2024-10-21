import Link from 'next/link';
import { Provider } from '../../../types/provider';

interface ProviderDetailsProps {
    provider: Provider;
  }

const ProviderDetails: React.FC<ProviderDetailsProps> = ({ provider }) => {
  if (!provider) {
    return <div className="container mx-auto p-4">Provider not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <button className="text-blue-500 underline mb-4">
        <Link href="/">Back to List</Link>
      </button>
      <h2 className="text-2xl font-semibold">{provider.Name}</h2>
      <p className="text-lg">{provider.Specialty}</p>
      <p>{provider.Address} </p>
      <p>{provider.City}, {provider.State}, {provider['Zip Code']}</p>
      <p>{provider['Phone Number']}</p>
      <h3 className="font-semibold mt-4">Biography</h3>
      <p>{provider.Biography}</p>
      <h3 className="font-semibold mt-4">Certifications</h3>
     <ul>
        {provider.Certifications.map((cert: string) => (
          <li key={cert}>- {cert}</li>
        ))}
      </ul> 
    </div>
  );
};

export default ProviderDetails;
