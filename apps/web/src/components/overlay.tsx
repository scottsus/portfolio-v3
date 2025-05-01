export function Overlay() {
  const useGrain = true;
  const useGradient = false;

  return (
    <>
      {useGrain ? (
        <div className="fixed z-[-1] h-screen w-screen bg-[#191919] bg-[url('/grain.png')]" />
      ) : (
        <div className="fixed z-[-1] h-screen w-screen bg-[#0D0D0D]" />
      )}

      {useGradient && (
        <div className="pointer-events-none fixed bottom-0 z-[10] h-[30vh] w-screen bg-gradient-to-t from-black to-transparent" />
      )}
    </>
  );
}
