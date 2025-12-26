'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Link from '@singularity/core/Link';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { lighten, styled } from '@mui/material/styles';
import CourseInfo from '../CourseInfo';
import CourseProgress from '../CourseProgress';
import { Course } from '../LearningApi';

type CourseCardProps = {
  course: Course & { required?: boolean };
};

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '352px',
  display: 'flex',
  flexDirection: 'column',
}));

const RequiredBadge = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  backgroundColor: '#FFD700',
  color: '#000000',
  padding: '4px 8px',
  fontSize: '12px',
  fontWeight: 'bold',
  borderBottomLeftRadius: '4px',
}));

const StyledCardActions = styled(CardActions)(({ theme }) => ({
}));

function CourseCard(props: CourseCardProps) {
  const { course } = props;

  function buttonStatus() {
    switch (course.activeStep) {
      case course.totalSteps:
        return 'Completed';
      case 0:
        return 'Start';
      default:
        return 'Continue';
    }
  }

  return (
    <StyledCard>
      {course.required && <RequiredBadge>Required</RequiredBadge>}
      <CardContent className="flex flex-col flex-auto p-4">
        <CourseInfo course={course} />
      </CardContent>
      <CourseProgress course={course} />
      <StyledCardActions
        className="items-center justify-end py-4 px-4"
        sx={(theme) => ({
          backgroundColor: lighten(theme.palette.background.default, 0.03),
          ...theme.applyStyles('light', {
            backgroundColor: lighten(theme.palette.background.default, 0.4),
          }),
        })}
      >
        <Button
          to={`/apps/learning/courses/${course.id}/${course.slug}`}
          component={Link}
          className="px-3"
          color="secondary"
          variant="contained"
          size="small"
          endIcon={<SingularitySvgIcon size={16}>heroicons-outline:arrow-small-right</SingularitySvgIcon>}
        >
          {buttonStatus()}
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
}

export default CourseCard;