export interface Provider {
  ProviderId: number;
  Name: string;
  Address: string;
  City: string;
  State: string;
  'Zip Code': string;
  Specialty: string;
  Biography: string;
  Certifications: string[];
  'Phone Number': string;
}
export type ProviderListDisplay = Pick<Provider, 'Name' | 'City' | 'State' | 'Specialty'>;
