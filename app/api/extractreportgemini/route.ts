import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
});

const prompt = `Attached is an image of someone's food or ingredients in a pantry. Go over the image and list all ingredients and identify all of the food they have. Do not include extra text
## Summary: `;

export async function POST(req: Request, res: Response) {
    const { base64 } = await req.json();
    const filePart = fileToGenerativePart(base64)

    console.log(filePart);
    const generatedContent = await model.generateContent([prompt, filePart]);

    console.log(generatedContent);
    const textResponse = generatedContent.response.candidates![0].content.parts[0].text;
    return new Response(textResponse, { status: 200 })
}

function fileToGenerativePart(imageData: string) {
    return {
        inlineData: {
            data: imageData.split(",")[1],
            mimeType: imageData.substring(
                imageData.indexOf(":") + 1,
                imageData.lastIndexOf(";")
            ),
        },
    }
}