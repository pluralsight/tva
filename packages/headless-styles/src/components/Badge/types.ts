export interface BadgeOptions {
  kind?: Kind
  tech?: Tech
}

// types

export type Kind = 'weak' | 'medium' | 'strong'
export type Tech = 'svelte' | 'mui' | ''
