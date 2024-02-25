import Image from "next/image";

const MyComponent = () => {
  return (
    <div className="mt-24 w-[1200px] rounded-lg border bg-foreground/5 p-2 flex items-center justify-center">
      <Image
        alt="App Image"
        width={3000}
        height={3000}
        className="shadow-[0_0_1000px_0] shadow-primary/40 animate-in zoom-in-75 delay-300 duration-1000 ease-out fill-mode-both text-transparent"
        src="/1tb.png"
      />
    </div>
  );
};

export default MyComponent;
