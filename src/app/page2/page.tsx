"use client";
import { useRouter } from "next/navigation";
const PageTwo = () => {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  return (
    <div>
      <h1>Welcome to page two</h1>
      <button onClick={back}>Back</button>
    </div>
  );
};

export default PageTwo;
