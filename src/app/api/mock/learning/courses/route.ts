import mockApi from 'src/@mock-utils/mockApi';
import { Course } from '@/app/(control-panel)/apps/learning/AcademyApi';

/**
 * GET api/mock/learning/courses
 */
export async function GET(req: Request) {
	const url = new URL(req.url);
	const queryParams = Object.fromEntries(url.searchParams.entries());
	const api = mockApi('learning_courses');
	const items = await api.findAll<Course>(queryParams);

	return new Response(JSON.stringify(items), { status: 200 });
}
