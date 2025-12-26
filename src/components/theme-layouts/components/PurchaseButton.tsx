import Button, { ButtonProps } from '@mui/material/Button';
import SellSharpIcon from '@mui/icons-material/SellSharp';
import clsx from 'clsx';

type PurchaseButtonProps = ButtonProps & {
  className?: string;
};

/**
 * The purchase button.
 */
function PurchaseButton(props: PurchaseButtonProps) {
  const {
    className = '',
    children = (
      <>
        <span>Purchase</span>
        <span className="flex items-center space-x-1">
          <span>Singularity</span>
        </span>
      </>
    ),
    ...rest
  } = props;

  return (
    <Button
      component="a"
      href="https://singularitythemes.com"
      target="_blank"
      rel="noreferrer noopener"
      role="button"
      className={clsx('space-x-1 whitespace-nowrap', className)}
      variant="contained"
      sx={{ backgroundColor: 'primary.main', color: 'white', borderRadius: '5px' }}
      startIcon={<SellSharpIcon fontSize="small" />}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default PurchaseButton;