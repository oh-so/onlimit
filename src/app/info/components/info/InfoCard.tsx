'use client';
import Image from 'next/image';

import useInfo from '../../hooks/useInfo';

export default function InfoCard() {
  const { info, setInfo } = useInfo();

  const updateInfo = () => {
    setInfo('새로운 정보가 업데이트되었습니다!');
  };

  return (
    <section>
      <h2>Information</h2>
      <Image
        className="dark:invert"
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={200}
        height={200}
        priority
      />
      <p>이건 정보 페이지 라는걸 잊지마시오.</p>
      <p>{info}</p>
      <button onClick={updateInfo} className="bg-red-500">
        정보 업데이트
      </button>
    </section>
  );
}
