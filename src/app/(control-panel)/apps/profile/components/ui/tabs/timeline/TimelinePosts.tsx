import SingularityLoading from '@singularity/core/SingularityLoading';
import { motion } from 'motion/react';
import { useProfilePosts } from '../../../../api/hooks/useProfilePosts';
import TimelinePostItem from './TimelinePostItem';

const item = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0 }
};

function TimelinePosts() {
	const { data: posts, isLoading } = useProfilePosts();

	if (isLoading) {
		return <SingularityLoading />;
	}

	return posts?.map?.((post) => (
		<motion.div
			variants={item}
			key={post.id}
		>
			<TimelinePostItem item={post} />
		</motion.div>
	));
}

export default TimelinePosts;
