import { createMutation } from "react-query-kit";

import { register } from "@/services/auth";

const useRegisterMutation = createMutation({
  mutationKey: ["auth/register"],
  mutationFn: register,
});

export default useRegisterMutation;
