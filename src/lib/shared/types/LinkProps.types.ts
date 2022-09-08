export type LinkTarget = '_blank' | '_parent' | '_self' | '_top';

export type LinkReferrerPolicy =
	| 'no-referrer'
	| 'no-referrer-when-downgrade'
	| 'origin'
	| 'origin-when-cross-origin'
	| 'same-origin'
	| 'strict-origin-when-cross-origin';

export type LinkRel =
	| 'alternate'
	| 'author'
	| 'bookmark'
	| 'external'
	| 'help'
	| 'license'
	| 'next'
	| 'nofollow'
	| 'noreferrer'
	| 'noopener'
	| 'prev'
	| 'search'
	| 'tag';
