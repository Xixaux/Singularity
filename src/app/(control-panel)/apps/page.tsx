import { redirect } from 'next/navigation';

function AppsPage() {
	redirect(`/apps/learning`);
	return null;
}

export default AppsPage;
