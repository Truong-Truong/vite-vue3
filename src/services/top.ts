import { post } from "@/services/api/api";

export function basePost(formData: any) {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  }
  return post('link', formData, config);
}