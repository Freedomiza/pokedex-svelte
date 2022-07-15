import type { LocaleLanguage } from './locale_language';
import type { RemoteResource } from './remote_resource';

export interface FlavorTextEntry {
	flavor_text: string;
	language: LocaleLanguage;
	version_group: RemoteResource;
}
