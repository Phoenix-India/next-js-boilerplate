import { createMutation } from "react-query-kit";

import { login } from "@/services/auth";

const useLoginMutation = createMutation({
  mutationKey: ["auth/login"],
  mutationFn: login,
});

export default useLoginMutation;
