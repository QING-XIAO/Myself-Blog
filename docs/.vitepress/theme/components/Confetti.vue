<script setup lang="ts">
import confetti from "canvas-confetti";
import { inBrowser } from "vitepress";

if (inBrowser) {
  /* 纸屑代码这里配置 */
  var duration = 10 * 100;
  var animationEnd = Date.now() + duration;
  var skew = 1;

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: (Math.random() * skew) - 0.2
        },
        colors: ['#EFC3CA'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
    });

    if (timeLeft > 0) {
        requestAnimationFrame(frame);
    }
    }());
}
</script>