import type { FlavorTextEntry } from './flavor_text_entry';
import type { LocaleLanguage } from './locale_language';
import type { RemoteResource } from './remote_resource';

export type DamageClass = RemoteResource;

export interface EffectEntry {
	effect: string;
	language: LocaleLanguage;
	short_effect: string;
}

export type Generation = RemoteResource;

export type LearnedByPokemon = RemoteResource;

export interface Machine2 {
	url: string;
}

export type VersionGroup2 = RemoteResource;

export interface Machine {
	machine: Machine2;
	version_group: VersionGroup2;
}

export type Ailment = RemoteResource;

export type Category = RemoteResource;

export interface Meta {
	ailment: Ailment;
	ailment_chance: number;
	category: Category;
	crit_rate: number;
	drain: number;
	flinch_chance: number;
	healing: number;
	max_hits?: any;
	max_turns?: any;
	min_hits?: any;
	min_turns?: any;
	stat_chance: number;
}

export interface Name {
	language: RemoteResource;
	name: string;
}

export interface StatChange {
	change: number;
	stat: RemoteResource;
}

export type Target = RemoteResource;

export type Type = RemoteResource;

export interface FullMove {
	accuracy?: any;
	contest_combos?: any;
	contest_effect?: any;
	contest_type?: any;
	damage_class: DamageClass;
	effect_chance: number;
	effect_changes: any[];
	effect_entries: EffectEntry[];
	flavor_text_entries: FlavorTextEntry[];
	generation: Generation;
	id: number;
	learned_by_pokemon: LearnedByPokemon[];
	machines: Machine[];
	meta: Meta;
	name: string;
	names: Name[];
	past_values: any[];
	power?: any;
	pp: number;
	priority: number;
	stat_changes: StatChange[];
	super_contest_effect?: any;
	target: Target;
	type: Type;
}
