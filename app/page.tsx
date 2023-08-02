import Balancer from "react-wrap-balancer";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full p-10">
        <h1
          className="animate-fade-up text-center text-4xl font-black text-stone-800 opacity-0 drop-shadow-sm md:text-7xl"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Template</Balancer>
        </h1>
      </div>
    </>
  );
}
