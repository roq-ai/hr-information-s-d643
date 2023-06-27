import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface JobApplicationInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  resume: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface JobApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  resume?: string;
  organization_id?: string;
}
