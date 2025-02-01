import InfoCard from './components/info/InfoCard';

export default function InfoPage() {
  return (
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Info Page</h1>
      <InfoCard />
    </section>
  );
}
