import mockApi from 'src/@mock-utils/mockApi';
import { AIToolItem } from '@/app/(control-panel)/apps/ai-image-generator/QueryBuilderApi';

/**
 * GET api/mock/ai-image-generator/items
 */
export async function GET(req: Request) {
	const url = new URL(req.url);
	const queryParams = Object.fromEntries(url.searchParams.entries());
	const api = mockApi('ai_image_generator_items');
	const items = await api.findAll<AIToolItem>(queryParams);

	return new Response(JSON.stringify(items), { status: 200 });
}

/**
 * POST api/mock/ai-image-generator/items
 */
export async function POST(req: Request) {
	const api = mockApi('ai_image_generator_items');
	const requestData = (await req.json()) as AIToolItem;
	const newItem = await api.create(requestData);

	return new Response(JSON.stringify(newItem), { status: 201 });
}
