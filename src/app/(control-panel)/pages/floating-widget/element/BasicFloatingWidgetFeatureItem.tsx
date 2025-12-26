'use client';
import { useRouter } from 'next/navigation';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { BasicFloatingWidgetFeature } from './BasicFloatingWidgetItemType';

interface BasicFloatingWidgetFeatureItemProps {
  feature: BasicFloatingWidgetFeature;
}

const BasicFloatingWidgetFeatureItem: React.FC<BasicFloatingWidgetFeatureItemProps> = ({
  feature,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (feature.label === 'Customization Options') {
      router.push('/pages/components-library');
    } else if (feature.label === 'View Full Documentation') {
      router.push('/documentation/getting-started/introduction');
    }
  };

  return (
    <button
      className="flex items-center gap-2 w-full px-3 py-2 bg-gray-200 rounded-md transition"
      style={{ color: '#1c1c1c', fontWeight: 400 }}
      onClick={handleClick}
      aria-label={feature.label}
    >
      <KeyboardArrowRightOutlinedIcon style={{ color: '#1c1c1c' }} />
      <span>{feature.label}</span>
    </button>
  );
};

export default BasicFloatingWidgetFeatureItem;