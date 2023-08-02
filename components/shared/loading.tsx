import { LoadingDots } from "./icons";

export default function LoadingPage() {
  return (
    <>
      <div className="z-10 flex min-h-screen w-full flex-col items-center justify-center">
        <div className="mt-10">
          <LoadingDots color="#D0D0D0" size={15} spacing={10} />
        </div>
      </div>
    </>
  );
}
