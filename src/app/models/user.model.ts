export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNo: string;
  gender: string;
  searchHistories?: string[];
  addresses: any[];
  userType: USER_TYPE;
  createdOn?: number;
}

export enum USER_TYPE {
  'Customer' = 'Customer',
  'Vendor' = 'Vendor',
  'Seller' = 'Seller',
}
