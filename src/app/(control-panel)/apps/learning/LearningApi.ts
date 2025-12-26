import apiService from 'src/store/apiService';
import { showMessage } from '@singularity/core/SingularityMessage/singularityMessageSlice';
import { PartialDeep } from 'type-fest';

export const addTagTypes = ['learning_courses', 'learning_course', 'learning_categories'] as const;

const AcademyApi = apiService
	.enhanceEndpoints({
		addTagTypes
	})
	.injectEndpoints({
		endpoints: (build) => ({
			getAcademyCourses: build.query<GetAcademyCoursesApiResponse, GetAcademyCoursesApiArg>({
				query: () => ({ url: `/api/mock/learning/courses` }),
				providesTags: ['learning_courses']
			}),
			getAcademyCourse: build.query<GetAcademyCourseApiResponse, GetAcademyCourseApiArg>({
				query: (queryArg) => ({
					url: `/api/mock/learning/courses/${queryArg.courseId}`
				}),
				providesTags: ['learning_course']
			}),
			updateAcademyCourse: build.mutation<UpdateAcademyCourseApiResponse, UpdateAcademyCourseApiArg>({
				query: (queryArg) => ({
					url: `/api/mock/learning/courses/${queryArg.courseId}`,
					method: 'PUT',
					body: queryArg.data
				}),
				async onQueryStarted(id, { dispatch, queryFulfilled }) {
					try {
						await queryFulfilled;
						dispatch(showMessage({ message: 'Course Saved' }));
					} catch (err) {
						console.error(err);
						dispatch(showMessage({ message: 'Error Saving the course!' }));
					}
				},
				invalidatesTags: ['learning_courses', 'learning_course']
			}),
			deleteAcademyCourse: build.mutation<DeleteAcademyCourseApiResponse, DeleteAcademyCourseApiArg>({
				query: (queryArg) => ({
					url: `/api/mock/learning/courses/${queryArg.courseId}`,
					method: 'DELETE'
				}),
				invalidatesTags: ['learning_courses']
			}),
			getAcademyCourseSteps: build.query<GetAcademyCourseStepsApiResponse, GetAcademyCourseStepsApiArg>({
				query: (_queryArg) => ({
					url: `/api/mock/learning/course-steps`,
					params: {
						courseId: '0' // demo course
					}
				}),
				providesTags: ['learning_course']
			}),
			getAcademyCourseStepContent: build.query<
				GetAcademyCourseStepContentApiResponse,
				GetAcademyCourseStepContentApiArg
			>({
				query: (_stepId) => ({
					// url: `/api/mock/learning/course-step-contents/${_stepId}`,
					url: `/api/mock/learning/course-step-contents/0` // demo
				}),
				providesTags: ['learning_course']
			}),
			getAcademyCategories: build.query<GetAcademyCategoriesApiResponse, GetAcademyCategoriesApiArg>({
				query: () => ({ url: `/api/mock/learning/categories` }),
				providesTags: ['learning_categories']
			})
		}),
		overrideExisting: false
	});

export default AcademyApi;

export type GetAcademyCoursesApiResponse = /** status 200 OK */ Course[];
export type GetAcademyCoursesApiArg = void;

export type GetAcademyCourseApiResponse = /** status 200 OK */ Course;
export type GetAcademyCourseApiArg = {
	courseId: string;
};

export type UpdateAcademyCourseApiResponse = unknown;
export type UpdateAcademyCourseApiArg = {
	courseId: string;
	data: PartialDeep<Course>;
};

export type GetAcademyCourseStepsApiResponse = /** status 200 OK */ CourseStep[];
export type GetAcademyCourseStepsApiArg = {
	courseId: string;
};

export type GetAcademyCourseStepContentApiResponse = /** status 200 OK */ CourseStepContent;
export type GetAcademyCourseStepContentApiArg = string;

export type DeleteAcademyCourseApiResponse = unknown;
export type DeleteAcademyCourseApiArg = {
	courseId: string;
};

export type GetAcademyCategoriesApiResponse = /** status 200 OK */ Category[];
export type GetAcademyCategoriesApiArg = void;

export type CourseStepContent = {
	id: string;
	stepId: string;
	html: string;
};

export type CourseStep = {
	id: string;
	courseId: string;
	order: number;
	title: string;
	subtitle: string;
	content: string;
};

export type Course = {
	id: string;
	title: string;
	slug: string;
	description: string;
	category: string;
	duration: number;
	totalSteps: number;
	updatedAt: string;
	featured: boolean;
	progress: {
		currentStep: number;
		completed: number;
	};
	activeStep?: number;
	steps?: CourseStep[];
};

export type Category = {
	id: string;
	title: string;
	slug: string;
	color: string;
};

export const {
	useGetAcademyCoursesQuery,
	useGetAcademyCourseQuery,
	useUpdateAcademyCourseMutation,
	useDeleteAcademyCourseMutation,
	useGetAcademyCourseStepsQuery,
	useGetAcademyCourseStepContentQuery,
	useGetAcademyCategoriesQuery
} = AcademyApi;
