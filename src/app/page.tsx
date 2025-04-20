"use client";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const goToPage1 = () => {
    router.push(`/page1`);
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToPage1}>Go to page 1</button>
    </div>
  );
};

export default page;
