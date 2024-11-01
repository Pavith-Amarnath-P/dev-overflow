import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="h1-bold text-5xl font-black text-violet-700">
        Welcome to the World Of Next Js.
      </h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGNIN });
        }}
      >
        <Button>Log out</Button>
      </form>
    </>
  );
}
