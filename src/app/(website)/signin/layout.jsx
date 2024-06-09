import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Sign in",
  description: "sign in in daresni platform",
};

export default function RootLayout({ children }) {
  return (
    <main className="container mx-auto flex justify-center gap-7 flex-col my-10 font-nats max-w-[430px]">
      <div className="flex flex-col gap-4 items-center text-center">
     
        <h1 className="text-4xl ">Sign In</h1>
        <p className="text-[13px] text-[#A3A9AF] ">
          Entrez vos détails ci-dessous pour acceder a votre compte
        </p>
      </div>
      <div className="grid gap-6 py-1">{children}</div>
      <hr />
      <div className="flex justify-center gap-4">
      <div className="text-center text-base">
        <Link href={"/register/student"} className="text-[#6610F2]">
          {" "}
          Signup Etudiant{" "}
        </Link>
      </div>
      <div className="text-center text-base">
        <Link href={"/register/prof"} className="text-[#6610F2]">
          {" "}
          Signup Prof{" "}
        </Link>
      </div>
      </div>
    </main>
  );
}
