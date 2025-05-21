import axios from "axios"
import api from "./index"

export const authApi = {
  register: (userData) => axios.post("http://localhost:8899/api/register", userData),
  login: (credentials) => api.post("/api/login", credentials),
  resendOtp: (email) => api.post("/api/resend-otp", { email }),
}
