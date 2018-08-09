<template lang="html">
  <div id="character"></div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "../assets/pixel-art";

$pixel-size: .5rem;

// Colored
$character-fill: #000;
$character-hat: #15376d;
$character-hat-front: #f7f7f7;

$character: (
  frames: (
    "             ""   ██████    ",
    "   ██████    ""  █▓▓▓▓▓▓█   ",
    "  █▓▓▓▓▓▓█   "" █▓▓▓▓▓▓▓▓█  ",
    " █▓▓▓▓▓▓▓▓█  "" █▓▓▓▓▓▓▓`██ ",
    " █▓▓▓▓▓▓▓`██ ""███▓▓▓▓▓````█",
    "███▓▓▓▓▓````█""███████▓▓▓██ ",
    "███████▓▓▓██ ""███████████  ",
    "███████████  "" ██████████  ",
    " ██████████  ""  █████████  ",
    "  █████████  "" █████████   ",
    " █████████   "" ████████    ",
    " ████████    "" ███████     ",
    " ██████████  "" ███████     ",
    "████████████ ""  ███████    ",
    "███████████  ""   ██████    ",
    " ██    ███   ""    ████     "
  ),
  colors: (
    "█": $character-fill,
    "▓": $character-hat,
    "`": $character-hat-front
  ),
  speed: .2s
);

@include pixel-art((
  character: $character
), (
  pixel-size: $pixel-size
));

#character {
  margin: 0 auto;
  animation: character-loading 2.5s linear;
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
