import { Message } from "ai/react";
import { Pinecone } from '@pinecone-database/pinecone';
import { streamText } from 'ai'
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { queryPineconeVectorStore } from "@/lib/utils";

const google = createGoogleGenerativeAI({
  // custom settings
  baseURL:'https://generativelanguage.googleapis.com/v1beta',
  apiKey:process.env.GEMINI_API_KEY
});

const model = google('gemini-1.5-pro-latest',
)
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

export async function POST(req:Request) {
  const reqBody = await req.json()
  console.log(reqBody);
  const messages: Message[] = reqBody.messages;
  const userQuestion = messages[messages.length-1].content;
  const reportData = reqBody.data.reportData;

  const searchQuery = `Represent this sentence for searching relevant passages: Report says: \n${reportData} \n\n ${userQuestion}`;
  //similarity search
  const retrievals = await queryPineconeVectorStore(pc, 'wokehi', 'foods', searchQuery)

  // finally prompt to the gemini api
  // finally prompt to the gemini api
const finalPrompt = `Here are the ingredients in a user's pantry, and a user query. Go through and 
enrich your knowledge by going through the ingredient knowledgebase. If the user asks what they can make, do NOT include recipes that are not close enough. Go through each recipe's needed ingredients,
and put a green check emoji if the user has the ingredient in the pantry, and a red x if the user does not. Note: this is ONLY if they ask what they can make, answer any question they give if otherwise.
\n\n**Provided pantry** \n ${reportData}.
\n **end of provided pantry**

\n\n**User Query:**\n${userQuestion}?
\n**end of user query**

\n\n**Generic findings:**
\n\n${retrievals}.
\n\n**end of generic findings**

\n\nProvide thorough justification for answer.
\n\n**Answer:**
`;


  // stream resopnse from gemini
  const result = await streamText({
    model: model,
    prompt: finalPrompt
  })

  return result.toDataStreamResponse();
}
