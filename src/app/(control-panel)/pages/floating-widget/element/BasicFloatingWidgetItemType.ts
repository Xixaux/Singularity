export interface BasicFloatingWidgetPosition {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export interface BasicFloatingWidgetProps {
  initialOpen?: boolean;
  position?: BasicFloatingWidgetPosition;
  features?: BasicFloatingWidgetFeature[];
}

export interface BasicFloatingWidgetFeature {
  id: string;
  label: string;
  icon?: string;
  action?: () => void;
}