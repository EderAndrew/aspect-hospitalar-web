import { cookies } from "next/headers";

export const fetchWithAuth = async (input: RequestInfo, init?: RequestInit) => {
  const cookieStore = await cookies();

  const res = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  if (res.status !== 401) {
    return res;
  }

  const refresh = await fetch(`${process.env.API_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  if (!refresh.ok) {
    return res;
  }

  return fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
};
