export interface LocaleLanguage {
	name: string;
	url: string;
}
export interface VersionGroup {
	name: string;
	url: string;
}
export interface EffectEntry {
	effect: string;
	short_effect: string;
	language: LocaleLanguage;
}

export interface FlavorTextEntry {
	flavor_text: string;
	language: LocaleLanguage;
	version_group: VersionGroup;
}
export interface FullAbility {
	effect_entries: EffectEntry[];
	flavor_text_entries: FlavorTextEntry[];
}
