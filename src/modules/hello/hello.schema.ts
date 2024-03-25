import { z } from "zod";

const helloResponseSchema = z.object({
  message: z.string(),
});

export type HelloResponse = z.infer<typeof helloResponseSchema>;
