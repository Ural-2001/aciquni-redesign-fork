<script>
	export let progress
	const angle = 360 * progress
	
	// Adapt the logic according to the approach
	const	background = `radial-gradient(white 30%, transparent 30%),
    conic-gradient(transparent 0deg ${angle}deg, #F3F3F3 ${angle}deg 360deg),
    conic-gradient(#56B954 0deg, #56B954 90deg, #56B954 180deg, green);`;
	
	$: cssVarStyles = `--background:${background}`
</script>

<style>
#progress-circle {
	background: var(--background);
	border-radius: 50%;
	width: 160px;
	height: 160px;
	transition: all 500ms ease-in;
	will-change: transform;
	transform: scaleX(-1);
}
</style>

<div id="progress-circle" style="{cssVarStyles}"></div>