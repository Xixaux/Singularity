import { SingularitySettingsConfigType } from '@singularity/core/SingularitySettings/SingularitySettings';
import { PartialDeep } from 'type-fest';

/**
 * The type definition for a user object.
 */
export type User = {
	id: string;
	role: string[] | string | null;
	displayName: string;
	photoURL?: string;
	email?: string;
	shortcuts?: string[];
	settings?: PartialDeep<SingularitySettingsConfigType>;
	loginRedirectUrl?: string; // The URL to redirect to after login.
};
