<script setup lang="ts">
import confetti from "canvas-confetti";
import { inBrowser } from "vitepress";

if (inBrowser) {
  /* 纸屑代码这里配置 */
//   var duration = 8 * 140;
//   var animationEnd = Date.now() + duration;
//   var skew = 1;

//     function randomInRange(min, max) {
//     return Math.random() * (max - min) + min;
//     }

//     (function frame() {
//     var timeLeft = animationEnd - Date.now();
//     var ticks = Math.max(200, 500 * (timeLeft / duration));
//     skew = Math.max(0.8, skew - 0.001);

//     confetti({
//         particleCount: 1,
//         startVelocity: 0,
//         ticks: ticks,
//         origin: {
//         x: Math.random(),
//         // since particles fall down, skew start toward the top
//         y: (Math.random() * skew) - 0.2
//         },
//         colors: ['#FF007F'],
//         shapes: ['circle'],
//         gravity: randomInRange(0.4, 0.6),
//         scalar: randomInRange(0.4, 1),
//         drift: randomInRange(-0.4, 0.4)
//     });

//     if (timeLeft > 0) {
//         requestAnimationFrame(frame);
//     }
//     }());

var defaults = {
  spread: 360,
  ticks: 90, // 单个星星的动画持续帧数（从50改为150，延长在空中的时间）
  gravity: 0,
  decay: 0.94, // 速度衰减保持不变，确保星星缓慢减速
  startVelocity: 30,
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  // 发射星星形状彩屑
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  // 发射小圆形彩屑（搭配星星）
  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

// 延长总发射时间：每200毫秒发射一批，共发射20批（总持续时间 20*200ms = 4秒）
// 可通过调整循环次数（20）和间隔时间（200）控制总时长
for (let i = 0; i < 6; i++) {
  setTimeout(shoot, i * 200); // 第1批0ms，第2批200ms，...，第20批3800ms
}
}
</script>