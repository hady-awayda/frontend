import axios from "axios";

export async function login(email: string, password: string) {
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

export async function register(
  name: string,
  email: string,
  password: string,
  phone_number: string
) {
  try {
    const response = await axios.post(
      "http://localhost:80/api/auth/register",
      {
        email,
        password,
        name,
        phone_number,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Registration failed");
  }
}
