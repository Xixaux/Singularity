import IconButton from '@mui/material/IconButton';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import Typography from '@mui/material/Typography';

type DemoHeaderProps = {
  leftSidebarToggle?: () => void;
  rightSidebarToggle?: () => void;
};

function DemoHeader(props: DemoHeaderProps) {
  const { leftSidebarToggle, rightSidebarToggle } = props;

  return (
    <div className="flex flex-col w-full p-6">
      <div className="flex w-full space-x-3 items-center">
        {leftSidebarToggle && (
          <IconButton
            onClick={leftSidebarToggle}
            aria-label="toggle sidebar"
            className="border border-divider"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            <SingularitySvgIcon sx={{ color: (theme) => theme.palette.text.primary }}>
              heroicons-outline:bars-3
            </SingularitySvgIcon>
          </IconButton>
        )}

        <PageBreadcrumb maxItems={3} />

        {rightSidebarToggle && (
          <IconButton
            onClick={rightSidebarToggle}
            aria-label="toggle sidebar"
            className="border border-divider"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            <SingularitySvgIcon sx={{ color: (theme) => theme.palette.text.primary }}>
              heroicons-outline:bars-3
            </SingularitySvgIcon>
          </IconButton>
        )}
      </div>
      <Typography className="text-4xl font-extrabold leading-none tracking-tight">Page heading</Typography>
    </div>
  );
}

export default DemoHeader;