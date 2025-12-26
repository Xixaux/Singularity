'use client';

import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';

/**
 * The typography page.
 */
function TypographyUI() {
	return (
		<>
			<div className="flex flex-col sm:flex-row shrink-0 sm:items-center sm:justify-between mb-10">
				<div className="flex-1 min-w-0">
					<Typography
						variant="h4"
						className="font-bold"
					>
						Typography
					</Typography>
				</div>
				<div>
					<Button
						className="mt-3 sm:mt-0"
						variant="contained"
						color="secondary"
						component="a"
						href="https://mui.com/components/typography"
						target="_blank"
						role="button"
						startIcon={<SingularitySvgIcon>heroicons-solid:arrow-top-right-on-square</SingularitySvgIcon>}
					>
						Official docs
					</Button>
				</div>
			</div>
			<div className="flex-auto w-full space-y-12">
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="h1">Display 4</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                           <Typography variant="h1">Display 4</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="h2">Display 3</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                           <Typography variant="h2">Display 3</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="h3">Display 2</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                           <Typography variant="h3">Display 2</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="h4">Display 1</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                           <Typography variant="h4">Display 1</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="h5">Headline</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                          <Typography variant="h5">Headline</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="h6">Title</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                           <Typography variant="h6">Title</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="subtitle1">Subheading</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                             <Typography variant="subtitle1">Subheading</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="body1">Body 2</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                            <Typography variant="body1">Body 2</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="body2">Body 1</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                            <Typography variant="body2">Body 1</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="caption">Caption</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                            <Typography variant="caption">Caption</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography
							gutterBottom
							noWrap
						>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua.
						</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                           <Typography noWrap>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="flex w-full sm:w-1/2">
						<Typography variant="button">Button</Typography>
					</div>
					<div className="flex w-full sm:w-1/2">
						<SingularityHighlight
							component="pre"
							className="language-html w-full"
						>
							{`
                                             <Typography variant="button">Button</Typography>
                                        `}
						</SingularityHighlight>
					</div>
				</div>
			</div>
		</>
	);
}

export default TypographyUI;
