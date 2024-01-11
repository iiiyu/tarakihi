import { type TaskStatus } from "@prisma/client";
import { db } from "~/server/db";

// interface TaskInterface  {
//   id : string;
//   data: object;
//   createdById: string;
//   relatedId: string;
// }

export const updateTaskStatusWithJobId = async (jobId: string | undefined, status: TaskStatus) => {
  const existingTask = await db.task.findFirst({
    where: { jobId: jobId },
  });
  if (existingTask) {
    const updatedTask = await db.task.update({
      where: { id: existingTask.id},
      data: {
        status: status,
      }
    });
    if (updatedTask) {
      console.log("Task updated successfully");
    }
  } else {
    throw new Error("Task not found");
  }
}
