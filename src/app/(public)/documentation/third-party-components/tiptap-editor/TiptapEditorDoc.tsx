'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import TiptapEditorExampleRaw from './examples/TiptapEditorExample.tsx?raw';
import TiptapEditorExample from './examples/TiptapEditorExample';
import Link from '@singularity/core/Link';

/**
 * Tiptap Editor Doc
 * This document provides information on how to use Tiptap Editor.
 */
function TiptapEditorDoc() {
	return (
		<>
			<div className="flex w-full items-center justify-between mb-6">
				<Typography variant="h4">Tiptap Editor</Typography>

				<Button
					variant="contained"
					color="secondary"
					component="a"
					href="https://tiptap.dev/introduction"
					target="_blank"
					role="button"
					startIcon={<SingularitySvgIcon size={16}>heroicons-outline:arrow-top-right-on-square</SingularitySvgIcon>}
					className="not-prose"
				>
					Reference
				</Button>
			</div>
			<Typography
				className="mb-4"
				component="p"
			>
				Tiptap is a headless editor for React, offering a robust and versatile text editing solution that simplifies the creation of rich text editors.
			</Typography>

			<hr className="not-prose" />

			<Typography
				className="text-5xl mt-8 mb-2"
				component="h2"
			>
				Example Usages
			</Typography>

			<SingularityExample
				className="mb-4"
				component={TiptapEditorExample}
				raw={TiptapEditorExampleRaw}
			/>

			<Typography
				className="text-5xl mt-8 mb-2"
				component="h2"
			>
				Examples
			</Typography>

			<ul>
				<li className="mb-2">
					<Link to="/apps/mailbox/sidebar/MailCompose">
						@/app/(control-panel)/apps/mailbox/sidebar/MailCompose.tsx
					</Link>
				</li>
			</ul>
		</>
	);
}

export default TiptapEditorDoc;
