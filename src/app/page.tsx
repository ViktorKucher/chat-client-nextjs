import { SignIn } from "@/components/authorization/SignIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <SignIn />
    </main>
  );
}
