import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async () => {
  try {
    await connectToDB();

    const prompts = await Prompt.find();

    return new Response(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new prompt!", { status: 500 });
  }
};
