import mockApi from 'src/@mock-utils/mockApi';
import { CourseStep } from '@/app/(control-panel)/apps/learning/AcademyApi';

/**
 * GET api/mock/learning/course-steps
 */
export async function GET(req: Request) {
	const url = new URL(req.url);
	const queryParams = Object.fromEntries(url.searchParams.entries());
	const api = mockApi('learning_course_steps');
	const items = await api.findAll<CourseStep>(queryParams);

	return new Response(JSON.stringify(items), { status: 200 });
}
