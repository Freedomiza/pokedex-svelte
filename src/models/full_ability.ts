import type { FlavorTextEntry } from './flavor_text_entry';
import type { LocaleLanguage } from './locale_language';

export interface EffectEntry {
	effect: string;
	short_effect: string;
	language: LocaleLanguage;
}

export interface FullAbility {
	effect_entries: EffectEntry[];
	flavor_text_entries: FlavorTextEntry[];
}
