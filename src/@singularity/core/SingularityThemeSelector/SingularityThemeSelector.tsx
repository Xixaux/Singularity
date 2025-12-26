import { memo } from 'react';
import ThemePreview, { SingularityThemeOption } from '@singularity/core/SingularityThemeSelector/ThemePreview';

type SingularityThemeSchemesProps = {
	onSelect?: (t: SingularityThemeOption) => void;
	options: SingularityThemeOption[];
};

/**
 * The SingularityThemeSchemes component is responsible for rendering a list of theme schemes with preview images.
 * It uses the SchemePreview component to render each scheme preview.
 * The component is memoized to prevent unnecessary re-renders.
 */
function SingularityThemeSelector(props: SingularityThemeSchemesProps) {
	const { onSelect, options } = props;

	return (
		<div>
			<div className="w-full grid grid-cols-2 gap-3">
				{options.map((item) => (
					<ThemePreview
						key={item.id}
						className=""
						theme={item}
						onSelect={onSelect}
					/>
				))}
			</div>
		</div>
	);
}

export default memo(SingularityThemeSelector);
