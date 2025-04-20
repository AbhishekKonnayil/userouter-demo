"use client";
import { useRouter } from "next/navigation";
import page from "../page";
const Pageone = () => {
  const router = useRouter();
  const goToPage2 = (page: string) => {
    router.push(`${page}`);
  };
  const back = () => {
    router.back();
  };
  return (
    <div>
      <h1>Welcome to page one</h1>
      <button onClick={() => goToPage2(`page2`)}>Go to page 2</button>
      <button
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>
      <button onClick={back}>BACK1</button>
    </div>
  );
};

export default Pageone;
