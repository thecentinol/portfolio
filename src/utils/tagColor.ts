export const accentColorNames = [
	"love",
	"gold",
	"rose",
	"pine",
	"foam",
	"iris",
] as const;

export function getRandomTagColor() {
	const randomIndex = Math.floor(Math.random() * accentColorNames.length);
	return accentColorNames[randomIndex];
}
