import mockApi from 'src/@mock-utils/mockApi';
import { CourseStepContent } from '@/app/(control-panel)/apps/learning/AcademyApi';

/**
 * GET api/mock/learning/course-step-contents/{id}
 */
export async function GET(req: Request, props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params;
	const api = mockApi('learning_course_step_contents');
	const item = await api.find<CourseStepContent>(id);

	if (!item) {
		return new Response(JSON.stringify({ message: 'Item not found' }), { status: 404 });
	}

	return new Response(JSON.stringify(item), { status: 200 });
}
