import axios from "axios"
import api from "./index"

export const authApi = {
  register: (userData) => axios.post("/api/auth/register", userData),
  login: (credentials) => api.post("/api/auth/login", credentials),
  resendOtp: (email) => api.post("/api/auth/resend-otp", { email }),
}
