import { useState } from 'react';

type Role = 'user' | 'admin';
export default function useRole() {
  const [role, setRole] = useState<Role>('user');
  // login 관련 로직
  return role;
}
