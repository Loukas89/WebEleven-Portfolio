<script lang="ts">
  /*
    BackgroundFX
    - Το “cinematic” background layer του site
    - Έχει:
      1) gradients (στατικά)
      2) blobs (αργή κίνηση)
      3) grain (film texture)
      4) cursor spotlight (ακολουθεί τον κέρσορα ομαλά)
    - Σέβεται το prefers-reduced-motion
  */

  import { onMount } from "svelte";

  // Current (smooth) position
  let x = 0;
  let y = 0;

  // Target position (pointer)
  let tx = 0;
  let ty = 0;

  // Για να μπορούμε να ακυρώνουμε το animation loop
  let raf = 0;

  // Smooth follow: πλησιάζει λίγο-λίγο το target
  const update = () => {
    x += (tx - x) * 0.08;
    y += (ty - y) * 0.08;

    // Τα περνάμε σε CSS variables για να τα χρησιμοποιεί το CSS
    const root = document.documentElement;
    root.style.setProperty("--mx", `${x}px`);
    root.style.setProperty("--my", `${y}px`);

    raf = requestAnimationFrame(update);
  };

  onMount(() => {
    // Αν ο χρήστης δεν θέλει animations, το σεβόμαστε
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handle = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener("pointermove", handle, { passive: true });

    // Ξεκινάμε από το κέντρο για να μη “πετάει” από γωνία
    tx = window.innerWidth / 2;
    ty = window.innerHeight / 2;
    x = tx;
    y = ty;

    if (!reduced) raf = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("pointermove", handle);
      if (raf) cancelAnimationFrame(raf);
    };
  });
</script>

<!-- Όλο το background effect είναι διακοσμητικό -->
<div class="fx" aria-hidden="true">
  <div class="fx__vignette"></div>
  <div class="fx__grain"></div>

  <div class="fx__blobs">
    <span class="blob b1"></span>
    <span class="blob b2"></span>
    <span class="blob b3"></span>
  </div>

  <div class="fx__cursor"></div>
</div>

<style>
  .fx {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;

    /* Base gradients (δίνουν “βάθος” πίσω από τα sections) */
    background:
      radial-gradient(1200px 800px at 20% 10%, rgba(99, 102, 241, 0.12), transparent 60%),
      radial-gradient(1000px 700px at 80% 20%, rgba(14, 165, 233, 0.12), transparent 60%),
      radial-gradient(900px 900px at 50% 80%, rgba(168, 85, 247, 0.10), transparent 65%),
      linear-gradient(180deg, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0.98));
  }

  .fx__vignette {
    position: absolute;
    inset: -10%;
    background: radial-gradient(
      circle at 50% 45%,
      transparent 0 55%,
      rgba(0, 0, 0, 0.55) 78%,
      rgba(0, 0, 0, 0.75) 100%
    );
    filter: blur(2px);
    opacity: 0.85;
  }

  .fx__grain {
    position: absolute;
    inset: -50%;
    /* SVG noise (embedded) */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
    opacity: 0.09;
    mix-blend-mode: overlay;
    transform: translate3d(0, 0, 0);
    animation: grain 10s steps(10) infinite;
  }

  @keyframes grain {
    0% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -10%); }
    20% { transform: translate(-15%, 5%); }
    30% { transform: translate(7%, -25%); }
    40% { transform: translate(-5%, 25%); }
    50% { transform: translate(-15%, 10%); }
    60% { transform: translate(15%, 0%); }
    70% { transform: translate(0%, 15%); }
    80% { transform: translate(3%, 35%); }
    90% { transform: translate(-10%, 10%); }
    100% { transform: translate(0, 0); }
  }

  .fx__blobs {
    position: absolute;
    inset: 0;
    filter: blur(30px);
    opacity: 0.8;
  }

  .blob {
    position: absolute;
    width: 520px;
    height: 520px;
    border-radius: 999px;
    background: radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.35), transparent 60%);
    animation: drift 18s ease-in-out infinite;
  }

  .b1 {
    top: -180px;
    left: -120px;
    animation-duration: 22s;
  }

  .b2 {
    top: 10%;
    right: -220px;
    width: 620px;
    height: 620px;
    background: radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.32), transparent 60%);
    animation-duration: 26s;
    animation-delay: -8s;
  }

  .b3 {
    bottom: -260px;
    left: 25%;
    width: 720px;
    height: 720px;
    background: radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.25), transparent 62%);
    animation-duration: 30s;
    animation-delay: -12s;
  }

  @keyframes drift {
    0% { transform: translate3d(0, 0, 0) scale(1); }
    35% { transform: translate3d(30px, 18px, 0) scale(1.06); }
    70% { transform: translate3d(-26px, 24px, 0) scale(0.98); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  .fx__cursor {
    position: absolute;
    inset: 0;
    /* Spotlight που ακολουθεί τον κέρσορα */
    background: radial-gradient(
      420px 420px at var(--mx, 50%) var(--my, 50%),
      rgba(255, 255, 255, 0.08),
      rgba(99, 102, 241, 0.18) 25%,
      rgba(14, 165, 233, 0.10) 45%,
      transparent 70%
    );
    opacity: 0.85;
    transition: opacity 200ms ease;
  }

  /* Σε reduced motion: κόβουμε τα animations + κρύβουμε το cursor glow */
  @media (prefers-reduced-motion: reduce) {
    .fx__grain,
    .blob { animation: none !important; }
    .fx__cursor { display: none; }
  }
</style>
