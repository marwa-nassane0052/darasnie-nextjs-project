export const authConfig = {
  secret: "Top@Secret",
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // const isLoggedIn = !!auth?.user;
      // const isOnDashboardPage = nextUrl.pathname.startsWith("/dashboard");
      // const isOnSigninPage = nextUrl.pathname.startsWith("/signin");
      // if (isOnDashboardPage) {
      //   if (isLoggedIn) return true;
      //   return false;
      // } else if (isLoggedIn && isOnSigninPage) {
      //   return Response.redirect(new URL("/dashboard", nextUrl));
      // }
      return true;
    },
  },
  providers: [],
};
