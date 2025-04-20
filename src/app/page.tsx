"use client";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push(`${page}`);
  };
  return (
    <div>
      <div>
        <h1>Welcome to Home page</h1>
      </div>
      <div>
        <button onClick={() => navigate("dashboard")}>Go to Dashboard</button>
      </div>
    </div>
  );
};

export default Home;
