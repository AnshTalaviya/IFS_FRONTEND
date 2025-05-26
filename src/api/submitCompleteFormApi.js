import api from "./index"

const submitCompleteFormApi = {
  submitCompleteForm: (data) => api.post("/api/complete-form/submit-complete-form", data),
}

export default submitCompleteFormApi
