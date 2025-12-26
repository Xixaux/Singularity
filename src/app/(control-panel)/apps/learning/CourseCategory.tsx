'use client';

import { darken, lighten } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import _ from 'lodash';
import { Course, useGetAcademyCategoriesQuery } from './LearningApi';

type CourseCategoryProps = {
  slug: Course['slug'];
};

function CourseCategory(props: CourseCategoryProps) {
  const { slug } = props;
  const { data: categories, isLoading } = useGetAcademyCategoriesQuery();

  if (isLoading) {
    return null;
  }

  const category = _.find(categories, { slug });

  if (!category) {
    return null;
  }

  return (
    <Chip
      className="font-semibold text-md"
      label={category.title}
      sx={{
        backgroundColor: '#32CD32',
        color: 'var(--mui-palette-secondary-contrastText)',
        '&:hover': { backgroundColor: '#2BB32B' },
      }}
      size="small"
    />
  );
}

export default CourseCategory;