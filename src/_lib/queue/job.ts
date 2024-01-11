// import { Queue } from "bullmq";
import { type BasicJob } from "./type";





// const translateNewsInputSchema = z.object({
//   title: z.string(),
//   content: z.string(),
//   originalLanguage: z.string(),
//   targetLanguage: z.string(),
// });


// interface TranslateJobInterface {
//   name: string;
//   data: {
//     articleId: string;
//   }
// }



// export function addTranslateJobToQueue(queue: Queue, jobData: TranslateJobInterface) {
//   queue.add(jobData.name, jobData.data);
// }


export function handleBasicJob(job: BasicJob) {
  // fetch all data from job data

  // do something with data

  console.log(job.data);
  console.log("do something with job");
}


// Translate Job

// export const handleTranslateNewsJob = async (job: TranslateNewsJob) => {
//   // fetch translate news data from job data

//   // use LLM to translate news

//   // save translated news to database
// }




// function getTestJob(job: BasicJob) {
//   return {
//     name: job.queueName,
//     data: job.data,
//   }
// }
