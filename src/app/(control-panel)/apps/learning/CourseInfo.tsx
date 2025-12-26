import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import clsx from 'clsx';
import CourseCategory from './CourseCategory';
import { Course } from './LearningApi';

type CourseInfoProps = {
	course: Course;
	className?: string;
};

/**
 * The CourseInfo component.
 */
function CourseInfo(props: CourseInfoProps) {
	const { course, className } = props;

	if (!course) {
		return null;
	}

	return (
		<div className={clsx('w-full', className)}>
			<div className="flex items-center justify-between mb-4">
				<CourseCategory slug={course.category} />

				{course.progress.completed > 0 && (
					<SingularitySvgIcon
						className="text-green-600"
						size={20}
					>
						heroicons-solid:badge-check
					</SingularitySvgIcon>
				)}
			</div>

			<Typography className="text-lg font-medium">{course.title}</Typography>

			<Typography
				className="text-md mt-0.5 line-clamp-2"
				color="text.secondary"
			>
				{course.description}
			</Typography>

			<Divider
				className="w-12 my-6 border-1"
				light
			/>

			<Typography
				className="flex items-center space-x-1.5 text-md"
				color="text.secondary"
			>
				<SingularitySvgIcon
					color="disabled"
					size={20}
				>
					heroicons-solid:clock
				</SingularitySvgIcon>
				<span className="whitespace-nowrap leading-none">{`${course.duration} minutes`}</span>
			</Typography>
			<Typography
				className="flex items-center space-x-1.5 text-md mt-2"
				color="text.secondary"
			>
				<SingularitySvgIcon
					color="disabled"
					size={20}
				>
					heroicons-solid:academic-cap
				</SingularitySvgIcon>
				<span className="whitespace-nowrap leading-none">
					{course.progress.completed === 1 && 'Completed once'}
					{course.progress.completed === 2 && 'Completed twice'}
					{course.progress.completed > 2 && `Completed ${course.progress.completed} times`}
					{course.progress.completed <= 0 && 'Never completed'}
				</span>
			</Typography>
		</div>
	);
}

export default CourseInfo;
