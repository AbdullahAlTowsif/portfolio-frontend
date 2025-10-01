import { getUserSession } from "@/helpers/getUserSession";

export default async function DashboardHome() {
  const quote = "Your portfolio is your silent ambassador—make sure it speaks with clarity, confidence, and character.";

  const session = await getUserSession();
  console.log(session);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome, {session?.user?.name}
      </h1>
      <p className="text-lg text-gray-600 italic text-center">
        {session?.user?.email}
      </p>
      <p className="text-lg text-gray-600 italic text-center">{quote}</p>
    </div>
  );
}
