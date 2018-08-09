<template lang="html">
  <div class="character"></div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@keyframes character-frames {
	0% {
		box-shadow: 32px 8px #000, 40px 8px #000, 48px 8px #000, 56px 8px #000, 64px 8px #000, 72px 8px #000, 24px 16px #000, 32px 16px #15376d, 40px 16px #15376d, 48px 16px #15376d, 56px 16px #15376d, 64px 16px #15376d, 72px 16px #15376d, 80px 16px #000, 16px 24px #000, 24px 24px #15376d, 32px 24px #15376d, 40px 24px #15376d, 48px 24px #15376d, 56px 24px #15376d, 64px 24px #15376d, 72px 24px #15376d, 80px 24px #15376d, 88px 24px #000, 16px 32px #000, 24px 32px #15376d, 32px 32px #15376d, 40px 32px #15376d, 48px 32px #15376d, 56px 32px #15376d, 64px 32px #15376d, 72px 32px #15376d, 80px 32px #f7f7f7, 88px 32px #000, 96px 32px #000, 8px 40px #000, 16px 40px #000, 24px 40px #000, 32px 40px #15376d, 40px 40px #15376d, 48px 40px #15376d, 56px 40px #15376d, 64px 40px #15376d, 72px 40px #f7f7f7, 80px 40px #f7f7f7, 88px 40px #f7f7f7, 96px 40px #f7f7f7, 104px 40px #000, 8px 48px #000, 16px 48px #000, 24px 48px #000, 32px 48px #000, 40px 48px #000, 48px 48px #000, 56px 48px #000, 64px 48px #15376d, 72px 48px #15376d, 80px 48px #15376d, 88px 48px #000, 96px 48px #000, 8px 56px #000, 16px 56px #000, 24px 56px #000, 32px 56px #000, 40px 56px #000, 48px 56px #000, 56px 56px #000, 64px 56px #000, 72px 56px #000, 80px 56px #000, 88px 56px #000, 16px 64px #000, 24px 64px #000, 32px 64px #000, 40px 64px #000, 48px 64px #000, 56px 64px #000, 64px 64px #000, 72px 64px #000, 80px 64px #000, 88px 64px #000, 24px 72px #000, 32px 72px #000, 40px 72px #000, 48px 72px #000, 56px 72px #000, 64px 72px #000, 72px 72px #000, 80px 72px #000, 88px 72px #000, 16px 80px #000, 24px 80px #000, 32px 80px #000, 40px 80px #000, 48px 80px #000, 56px 80px #000, 64px 80px #000, 72px 80px #000, 80px 80px #000, 16px 88px #000, 24px 88px #000, 32px 88px #000, 40px 88px #000, 48px 88px #000, 56px 88px #000, 64px 88px #000, 72px 88px #000, 16px 96px #000, 24px 96px #000, 32px 96px #000, 40px 96px #000, 48px 96px #000, 56px 96px #000, 64px 96px #000, 72px 96px #000, 80px 96px #000, 88px 96px #000, 8px 104px #000, 16px 104px #000, 24px 104px #000, 32px 104px #000, 40px 104px #000, 48px 104px #000, 56px 104px #000, 64px 104px #000, 72px 104px #000, 80px 104px #000, 88px 104px #000, 96px 104px #000, 8px 112px #000, 16px 112px #000, 24px 112px #000, 32px 112px #000, 40px 112px #000, 48px 112px #000, 56px 112px #000, 64px 112px #000, 72px 112px #000, 80px 112px #000, 88px 112px #000, 16px 120px #000, 24px 120px #000, 64px 120px #000, 72px 120px #000, 80px 120px #000;
	}
	50% {
		box-shadow: 32px 0 #000, 40px 0 #000, 48px 0 #000, 56px 0 #000, 64px 0 #000, 72px 0 #000, 24px 8px #000, 32px 8px #15376d, 40px 8px #15376d, 48px 8px #15376d, 56px 8px #15376d, 64px 8px #15376d, 72px 8px #15376d, 80px 8px #000, 16px 16px #000, 24px 16px #15376d, 32px 16px #15376d, 40px 16px #15376d, 48px 16px #15376d, 56px 16px #15376d, 64px 16px #15376d, 72px 16px #15376d, 80px 16px #15376d, 88px 16px #000, 16px 24px #000, 24px 24px #15376d, 32px 24px #15376d, 40px 24px #15376d, 48px 24px #15376d, 56px 24px #15376d, 64px 24px #15376d, 72px 24px #15376d, 80px 24px #f7f7f7, 88px 24px #000, 96px 24px #000, 8px 32px #000, 16px 32px #000, 24px 32px #000, 32px 32px #15376d, 40px 32px #15376d, 48px 32px #15376d, 56px 32px #15376d, 64px 32px #15376d, 72px 32px #f7f7f7, 80px 32px #f7f7f7, 88px 32px #f7f7f7, 96px 32px #f7f7f7, 104px 32px #000, 8px 40px #000, 16px 40px #000, 24px 40px #000, 32px 40px #000, 40px 40px #000, 48px 40px #000, 56px 40px #000, 64px 40px #15376d, 72px 40px #15376d, 80px 40px #15376d, 88px 40px #000, 96px 40px #000, 8px 48px #000, 16px 48px #000, 24px 48px #000, 32px 48px #000, 40px 48px #000, 48px 48px #000, 56px 48px #000, 64px 48px #000, 72px 48px #000, 80px 48px #000, 88px 48px #000, 16px 56px #000, 24px 56px #000, 32px 56px #000, 40px 56px #000, 48px 56px #000, 56px 56px #000, 64px 56px #000, 72px 56px #000, 80px 56px #000, 88px 56px #000, 24px 64px #000, 32px 64px #000, 40px 64px #000, 48px 64px #000, 56px 64px #000, 64px 64px #000, 72px 64px #000, 80px 64px #000, 88px 64px #000, 16px 72px #000, 24px 72px #000, 32px 72px #000, 40px 72px #000, 48px 72px #000, 56px 72px #000, 64px 72px #000, 72px 72px #000, 80px 72px #000, 16px 80px #000, 24px 80px #000, 32px 80px #000, 40px 80px #000, 48px 80px #000, 56px 80px #000, 64px 80px #000, 72px 80px #000, 16px 88px #000, 24px 88px #000, 32px 88px #000, 40px 88px #000, 48px 88px #000, 56px 88px #000, 64px 88px #000, 16px 96px #000, 24px 96px #000, 32px 96px #000, 40px 96px #000, 48px 96px #000, 56px 96px #000, 64px 96px #000, 24px 104px #000, 32px 104px #000, 40px 104px #000, 48px 104px #000, 56px 104px #000, 64px 104px #000, 72px 104px #000, 32px 112px #000, 40px 112px #000, 48px 112px #000, 56px 112px #000, 64px 112px #000, 72px 112px #000, 40px 120px #000, 48px 120px #000, 56px 120px #000, 64px 120px #000;
	}
}
.character {
	width: 104px;
	height: 128px;
	position: relative;
  margin-right: auto;
  margin-left: auto;
  z-index: -5;
  animation: character-loading 2.5s linear;
	&::after {
		content: "";
		width: 8px;
		height: 8px;
		display: block;
		left: -8px;
		position: absolute;
		animation: character-frames 0.4s steps(1) infinite;
	}
}

@keyframes character-loading {
  from {
    top: 20%;
  }
  to {
    top: 0%;
  }
}

</style>
