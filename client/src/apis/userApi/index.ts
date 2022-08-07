import { POST } from "../../utils/httpClient/axios";

export const user = {
  create: (body: any) => POST("/user", body),
};
