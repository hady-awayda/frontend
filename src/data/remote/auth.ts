import axios from "axios";

export async function postLogin(email: string, password: string) {
  try {
    const response = await axios.post(
      "http://localhost:80/api/auth/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Login failed");
  }
}
