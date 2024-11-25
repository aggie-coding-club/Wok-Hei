import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { HfInference } from "@huggingface/inference";

import { Pinecone } from "@pinecone-database/pinecone";
const hf = new HfInference(process.env.HUGGINGFACE_TOKEN);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

// scrape document information, then cross reference with knowledge base to spit out info
export async function queryPineconeVectorStore(
  client: Pinecone,
  indexName: string,
  namespace: string,
  searchQuery: string
): Promise<string> {
  const hfOutput = await hf.featureExtraction({
    model:'mixedbread-ai/mxbai-embed-large-v1',
    inputs: searchQuery
  })
  console.log(hfOutput)
  const queryEmbedding = Array.from(hfOutput);

  const index = client.Index(indexName);
  const queryResponse = await index.namespace(namespace).query({
    topK: 5,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    vector: queryEmbedding as any, 
    includeMetadata: true,
    includeValues: false
  })
  console.log(queryResponse);

  // give matches to info
  if (queryResponse.matches.length > 0) {
    const concatRetrievals = queryResponse.matches.map((match, idx) => {
      return `\n Finding ${idx+1}: \n ${match.metadata?.chunk}`
    }).join('\n\n')
    console.log(concatRetrievals);
    return concatRetrievals;
  } else {
    return "<no_match>";
  }
}