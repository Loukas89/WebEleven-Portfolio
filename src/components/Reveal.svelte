<script lang="ts">
  import { onMount } from "svelte";

  export let delay = 0;
  export let y = 18;

  let el: HTMLElement;
  let shown = false;

  onMount(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      shown = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            shown = true;
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  });
</script>

<div
  bind:this={el}
  class:shown
  class="reveal"
  style={`--d:${delay}ms; --y:${y}px;`}
>
  <slot />
</div>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(var(--y, 16px)) scale(0.98);
    filter: blur(6px);
    transition:
      opacity 800ms cubic-bezier(.16,1,.3,1) var(--d,0ms),
      transform 900ms cubic-bezier(.16,1,.3,1) var(--d,0ms),
      filter 900ms cubic-bezier(.16,1,.3,1) var(--d,0ms);
    will-change: opacity, transform, filter;
  }

  .reveal.shown {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1; transform: none; filter: none; }
  }
</style>
