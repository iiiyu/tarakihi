import { PromptTemplate } from "langchain/prompts";
import { RunnableSequence } from "langchain/schema/runnable";
// import { ChatAnthropic } from "langchain/chat_models/anthropic";
import { OpenAI } from "langchain/llms/openai";
import { env } from "~/env.mjs";
import { z } from "zod";
import { StructuredOutputParser } from "langchain/output_parsers";

const translateNewsInputSchema = z.object({
  title: z.string(),
  content: z.string(),
  originalLanguage: z.string(),
  targetLanguage: z.string(),
});

const translateNewsOutputSchema = z.object({
  targetTitle: z.string().nullish(),
  targetContent: z.string().nullish(),
});

type TranslateNewsInput = z.infer<typeof translateNewsInputSchema>;
type TranslateNewsOutput = z.infer<typeof translateNewsOutputSchema>;


const newsOutputParser = StructuredOutputParser.fromNamesAndDescriptions({
  directTranslationTitle: "direct translation of the news article",
  directTranslationContent: "direct translation of the news article",
  identifiedIssues: "identified issues with the direct translation",
  reinterpretedTranslatedTitle: "reinterpreted translated title of the news article",
  reinterpretedTranslatedContent: "reinterpreted translated content of the news article",
});


const translateNewTemplate = PromptTemplate.fromTemplate(`
## Role and Goal:

You are an excellent journalist in the BBC news, skilled in writing high-quality {targetLanguage} news. Your main task is to accurately and academically translate {originalLanguage} text into {targetLanguage}, maintaining the style consistent with {targetLanguage} news. Users are instructed to input {originalLanguage} text directly, which will automatically initiate the translation process into {targetLanguage}.

## Constraints:

Input is provided in Markdown format, and the output must also retain the original Markdown format.
Familiarity with specific terminology translations is essential.

## Guidelines:
The translation process involves three steps, with each step's results being printed:
1. Translate the content directly from {originalLanguage} to {targetLanguage}, maintaining the original format and not omitting any information.
2. Identify specific issues in the direct translation, such as non-native {targetLanguage} expressions, awkward phrasing, and ambiguous or difficult-to-understand parts. Provide explanations but do not add content or format not present in the original.
3. Reinterpret the translation based on the direct translation and identified issues, ensuring the content remains true to the original while being more comprehensible and in line with {targetLanguage} scientific research paper conventions.

## Clarification:

If necessary, ask for clarification on specific parts of the text to ensure accuracy in translation.

## Personalization:

Engage in a scholarly and formal tone, mirroring the style of academic papers, and provide translations that are academically rigorous.

## Output format:

Please output strictly in the following format

{format_instructions}

Please translate the following content into {targetLanguage}:

"title": {title},
"content": {content}

`)




export const TranslateNews = async (input: TranslateNewsInput) : Promise<TranslateNewsOutput> => {
  // const prompt1 = PromptTemplate.fromTemplate(
  //   `What is the city {person} is from? Only respond with the name of the city.`,
  // );
  // const prompt2 = PromptTemplate.fromTemplate(
  //   `What country is the city {city} in? Respond in {language}.`,
  // );

  // const model = new ChatAnthropic({
  //   anthropicApiKey: env.ANTHROPIC_API_KEY,
  //   maxTokensToSample: 1000000
  // });

  const openAIModel = new OpenAI({
    openAIApiKey: env.OPENAI_API_KEY,
    modelName: "gpt-4-1106-preview",
    maxTokens: 12000, // Adjust this value based on your needs
    temperature: 0.4,
  });


  const chain = RunnableSequence.from([
    translateNewTemplate,
    openAIModel,
    newsOutputParser,
  ]);

  const response = await chain.invoke({
    originalLanguage:input.originalLanguage,
    targetLanguage: input.targetLanguage,
    format_instructions: newsOutputParser.getFormatInstructions(),
    title: input.title,
    content:input.content
  });
  console.log(response);



  return {
    targetTitle: response.reinterpretedTranslatedTitle,
    targetContent: response.reinterpretedTranslatedContent,
  }
};
