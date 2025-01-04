export function Overlay() {
  return (
    <>
      <div className="fixed z-[-1] h-screen w-screen bg-[#222] bg-[url('/grain.png')]" />
      <div className="fixed bottom-0 z-[-1] h-[30vh] w-screen bg-gradient-to-t from-black to-transparent" />
    </>
  );
}
