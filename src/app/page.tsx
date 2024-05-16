import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // redirect to the documentation page
  const router = useRouter();
  useEffect(() => {
    router.push("/documentation");
  }, [router]);
  return null;
}
