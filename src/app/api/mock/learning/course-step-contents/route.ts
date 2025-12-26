import mockApi from 'src/@mock-utils/mockApi';
import { CourseStepContent } from '@/app/(control-panel)/apps/learning/AcademyApi';

/**
 * GET api/mock/learning/course-step-contents
 */
export async function GET(req: Request) {
	const url = new URL(req.url);
	const queryParams = Object.fromEntries(url.searchParams.entries());
	const api = mockApi('learning_course_step_contents');
	const items = await api.findAll<CourseStepContent>(queryParams);

	return new Response(JSON.stringify(items), { status: 200 });
}
