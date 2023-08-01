import LogoutButton from "@/components/site/LogoutButton";

export default function Home() {
  return (
    <div className="bg-cyan-700 min-h-screen">
      <h1 className="font-roboto text-3xl font-extrabold">main page</h1>
      <LogoutButton />
    </div>
  );
}
