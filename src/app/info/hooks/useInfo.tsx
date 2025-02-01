import { useState } from 'react';

export default function useInfo() {
  const [info, setInfo] = useState<string>('information');
  return { info, setInfo };
}
