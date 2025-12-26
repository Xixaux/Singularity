import Typography from '@mui/material/Typography';

/**
 * Git Repository Doc
 * This document provides information on how to get the Singularity React's Github repository.
 */
function GitRepositoryDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-10 font-bold"
			>
				Github Repository
			</Typography>

			<Typography
				className="mb-4"
				component="p"
			>
				You can explore Singularity React via its Github repository. The Singularity React repository is located here: {' '}
				<a
					href="https://github.com/ObjectAGI/"
					target="_blank"
					rel="noreferrer noopener"
				>
					Just Launched
				</a>
				.
			</Typography>
		</>
	);
}

export default GitRepositoryDoc;
