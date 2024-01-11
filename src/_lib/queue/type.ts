import { z } from "zod";

// Job
const basicJobSchema = z.object({
  queueName: z.string(),
  data: z.any(),
})

export type BasicJob = z.infer<typeof basicJobSchema>;

// News job
const translateNewsJobDataSchema = z.object({
  data: z.object({
    articleId: z.string(),
    targetLanguage: z.string(),
  })
})

const translateNewsJobSchema = z.intersection(basicJobSchema, translateNewsJobDataSchema);

export type TranslateNewsJob = z.infer<typeof translateNewsJobSchema>;


// Queue
export const TestQueueName = "TestQueue";
export const TranslateNewsQueueName = "TranslateNewsQueueName";
