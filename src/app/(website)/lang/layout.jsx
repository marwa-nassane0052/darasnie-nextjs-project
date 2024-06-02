export default function RootLayout({ children }) {
  return (
    <main className="flex flex-col bg-[#e4d9ff26]">
      <div className="flex">
        <div className="w-[300px] h-[calc(100vh_-_60px)] fixed left-0 top-[60px] bg-white z-10">
        </div>
        <div className="flex-grow p-[20px] pl-[320px] mt-[60px]">{children}</div>
      </div>
    </main>
  );
}
