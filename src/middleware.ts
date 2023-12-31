import { withAuth } from "next-auth/middleware";

import { api } from "~/trpc/server";

export default withAuth({
  callbacks: {
    authorized: async ({ req }) => {
      console.log(req)
      const sessionToken = req.cookies.get("next-auth.session-token")?.value ?? req.cookies.get("__Secure-next-auth.session-token")?.value;
      if (!sessionToken) {
        return false;
      }
      const auth = await api.user.checkAuthorizedBySession.query({
        sessionToken: sessionToken,
      });
      return auth.auth;
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
