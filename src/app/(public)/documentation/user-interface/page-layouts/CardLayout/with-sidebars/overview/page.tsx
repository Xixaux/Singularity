import PageLayoutOverview from '../../../components/PageLayoutOverview';
import overviews from '../../../constants/overviews';

function CardLayoutWithSidebarsOverviewComponent() {
	return <PageLayoutOverview layoutOptions={overviews.CardLayout.withSidebars} />;
}

export default CardLayoutWithSidebarsOverviewComponent;
