import { createQuery } from "react-query-kit";

import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import moment from "moment/moment";

export async function checkAuth() {
  try {
    const { token: accessToken, expires: accessTokenExpire } = JSON.parse(
      getCookie("access-token") || "{}",
    );

    if (!accessToken) {
      deleteCookie("access-token");
      return false;
    }

    const isAccessTokenExpired = moment(accessTokenExpire)
      .subtract(1, "minute")
      .isBefore();

    if (isAccessTokenExpired) {
      deleteCookie("access-token");

      return false;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    if (!res.ok) return false;

    const data = await res.json();

    return data?.data;
  } catch (e) {
    deleteCookie("access-token");

    throw e;
  }
}

const useAuthQuery = createQuery({
  queryKey: ["/app/auth"],
  fetcher: async () => {
    const user = await checkAuth();
    if (!user) throw Error("Auth Failed!");

    return user;
  },
  refetchInterval: 30 * 1000,
  refetchOnMount: true,
  refetchOnReconnect: true,
  refetchOnWindowFocus: true,
  retry: () => hasCookie("access-token"),
  retryDelay: 100,
});

export default useAuthQuery;
