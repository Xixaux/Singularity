'use client';

import LinearProgress from '@mui/material/LinearProgress';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { Course } from './LearningApi';

type CourseProgressProps = {
  course: Course;
  className?: string;
};

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '3px',
  backgroundColor: theme.palette.grey[300], 
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function CourseProgress(props: CourseProgressProps) {
  const { course, className } = props;

  return (
    <StyledLinearProgress
      className={clsx('w-full', className)}
      variant="determinate"
      value={(course.progress.currentStep * 100) / course.totalSteps}
    />
  );
}

export default CourseProgress;