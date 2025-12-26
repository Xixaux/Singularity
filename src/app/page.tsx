import { redirect } from 'next/navigation';

function MainPage() {
	redirect(`/dashboards/control-panel`);
	return null;
}

export default MainPage;
