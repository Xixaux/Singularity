'use client';

import React from 'react';
import { BasicFloatingWidgetFeature } from './BasicFloatingWidgetItemType';
import BasicFloatingWidgetFeatureItem from './BasicFloatingWidgetFeatureItem';

interface BasicFloatingWidgetCardProps {
  features: BasicFloatingWidgetFeature[];
}

const BasicFloatingWidgetCard: React.FC<BasicFloatingWidgetCardProps> = ({
  features,
}) => {
  return (
    <div
      className="mt-2 rounded-md w-full max-w-[240px] box-border"
      sx={{
        backgroundColor: 'var(--mui-palette-background-paper)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='15' cy='10' r='2'/%3E%3Ccircle cx='85' cy='15' r='2'/%3E%3Ccircle cx='30' cy='25' r='2'/%3E%3Ccircle cx='70' cy='20' r='2'/%3E%3Ccircle cx='20' cy='35' r='2'/%3E%3Ccircle cx='80' cy='40' r='2'/%3E%3Ccircle cx='35' cy='45' r='2'/%3E%3Ccircle cx='65' cy='50' r='2'/%3E%3Ccircle cx='25' cy='55' r='2'/%3E%3Ccircle cx='75' cy='60' r='2'/%3E%3Ccircle cx='10' cy='65' r='2'/%3E%3Ccircle cx='90' cy='70' r='2'/%3E%3Ccircle cx='40' cy='75' r='2'/%3E%3Ccircle cx='60' cy='80' r='2'/%3E%3Ccircle cx='15' cy='85' r='2'/%3E%3Ccircle cx='85' cy='90' r='2'/%3E%3Ccircle cx='50' cy='30' r='2'/%3E%3Ccircle cx='45' cy='95' r='2'/%3E%3Ccircle cx='95' cy='45' r='2'/%3E%3Ccircle cx='55' cy='15' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <h3
        className="text-base mb-2 px-4"
        sx={{ color: 'var(--mui-palette-text-primary)', fontWeight: 400 }}
      >
        Singularity offers a built-in Theme Components Library. No coding needed.
      </h3>
      <div className="flex flex-col gap-2 px-4 pb-4">
        {features.map((feature) => (
          <BasicFloatingWidgetFeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default BasicFloatingWidgetCard;