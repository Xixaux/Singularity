import React from 'react';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Typography from '@mui/material/Typography';

type BasicFormLayoutsFeatureItemProps = {
  text: string;
};

function BasicFormLayoutsFeatureItem({ text }: BasicFormLayoutsFeatureItemProps) {
  return (
    <div className="flex">
      <SingularitySvgIcon className="text-green-600" size={20}>
        heroicons-solid:check
      </SingularitySvgIcon>
      <Typography className="ml-0.5 leading-5">{text}</Typography>
    </div>
  );
}

export default BasicFormLayoutsFeatureItem;