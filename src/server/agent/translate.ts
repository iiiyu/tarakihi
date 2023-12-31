import { PromptTemplate } from "langchain/prompts";
import { RunnableSequence } from "langchain/schema/runnable";
import { StringOutputParser } from "langchain/schema/output_parser";
import { ChatAnthropic } from "langchain/chat_models/anthropic";
import { env } from "~/env.mjs";

type TranslateNewsInput = {
  title: string;
  content: string;
  originalLanguage: string;
  targetLanguage: string;
};

type TranslateNewsOutput = {
  title: string;
  content: string;
  originalLanguage: string;
  targetLanguage: string;
};

export const TranslateNews = async (input: TranslateNewsInput) : Promise<TranslateNewsOutput> => {
  const prompt1 = PromptTemplate.fromTemplate(
    `What is the city {person} is from? Only respond with the name of the city.`,
  );
  const prompt2 = PromptTemplate.fromTemplate(
    `What country is the city {city} in? Respond in {language}.`,
  );

  const model = new ChatAnthropic({
    anthropicApiKey: env.ANTHROPIC_API_KEY,
  });


  console.log(input)

  const chain = prompt1.pipe(model).pipe(new StringOutputParser());

  const combinedChain = RunnableSequence.from([
    {
      city: chain,
      language: (input) => input.language,
    },
    prompt2,
    model,
    new StringOutputParser(),
  ]);

  const result = await combinedChain.invoke({
    person: "Obama",
    language: "German",
  });

  console.log(result);

  return {
    title: "",
    content: "",
    originalLanguage: "",
    targetLanguage: "",
  }
};
