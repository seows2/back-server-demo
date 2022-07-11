import { POST } from "../../utils/httpClient/axios";

export const auth = {
  login: (body: any) => POST("/auth/signIn", body),
};
