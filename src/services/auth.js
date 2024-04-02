export async function login(data) {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export async function register(data) {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
    }),
  }).then((res) => res.json());
}

export async function profile(accessToken) {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
}

export async function logout(accessToken) {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
}
