import { redirect } from 'next/navigation';

function LearningApp() {
	redirect(`/apps/learning/courses`);
	return null;
}

export default LearningApp;
