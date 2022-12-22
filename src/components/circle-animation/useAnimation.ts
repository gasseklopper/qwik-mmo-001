import useAnimationTimer from './useAnimationTimer'

export default function useAnimation(
	easingName = 'linear',
	duration = 500,
	delay = 0
) {
	// The useAnimationTimer hook calls useState every animation frame ...
	// ... giving us elapsed time and causing a rerender as frequently ...
	// ... as possible for a smooth animation.
	// const elapsed = useAnimationTimer(duration, delay)
	// Amount of specified duration elapsed on a scale from 0 - 1
	// const n = Math.min(1, elapsed / duration)
	// Return altered value based on our specified easing function
	return easing[easingName](n)
}

// Some easing functions copied from:
// https://github.com/streamich/ts-easing/blob/master/src/index.ts
// Hardcode here or pull in a dependency
const easing = {
	linear: (n: any) => n,
	elastic: (n: number) =>
		n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15),
	inExpo: (n: number) => Math.pow(2, 10 * (n - 1)),
}
