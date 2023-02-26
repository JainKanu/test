export interface User {
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface UserListData {
  filterdData: User[];
  sortedbyASC: boolean;
  pageSize: number;
  currentPage: number;
  filter: string;
}
