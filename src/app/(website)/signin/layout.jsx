import Link from "next/link";

export const metadata = {
  title: "Sign in",
  description: "sign in in daresni platform",
};

export default function RootLayout({ children }) {
  return (
    <main className="container mx-auto flex justify-center gap-7 flex-col my-10 font-nats max-w-[430px]">
      <div className="flex flex-col gap-4 items-center text-center">
        <div className="rounded-full size-12 bg-[#A3A9AF]"></div>
        <h1 className="text-4xl ">Sign In</h1>
        <p className="text-[13px] text-[#A3A9AF] ">
          Entrez vos détails ci-dessous pour acceder a votre compte
        </p>
      </div>
      <div className="grid gap-6 py-6">{children}</div>
      <hr />
      <div className="text-center text-base">
        Vous n'avez pas un compte ?{" "}
        <Link href={"/register"} className="text-[#6610F2]">
          {" "}
          Signup{" "}
        </Link>
      </div>
    </main>
  );
}
