<script lang="ts">
  /*
    Reveal
    - Μικρό “wrapper” component για scroll animation
    - Ό,τι βάλεις μέσα στο <Reveal> εμφανίζεται σιγά-σιγά όταν μπει στο viewport
  */

  import { onMount } from "svelte";

  // Μικρή καθυστέρηση για πιο cinematic αίσθηση
  export let delay = 0;

  // Πόσο “ανεβαίνει” από κάτω προς τα πάνω όταν εμφανίζεται
  export let y = 18;

  // Το element που παρακολουθεί ο observer
  let el: HTMLElement;

  // Όταν γίνει true, μπαίνει η class "shown" και παίζει το transition
  let shown = false;

  onMount(() => {
    // Αν ο χρήστης έχει “reduce motion”, δεν κάνουμε animations
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      shown = true;
      return;
    }

    // IntersectionObserver: βλέπει πότε μπαίνει το element στην οθόνη
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Μόλις εμφανιστεί αρκετά (isIntersecting), το “ξεκλειδώνουμε”
          if (e.isIntersecting) {
            shown = true;

            // Το κλείνουμε για να παίξει μία φορά
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);

    // Cleanup όταν φύγει το component
    return () => io.disconnect();
  });
</script>

<!-- Wrapper div: κρατάει το content και δίνει το reveal effect -->
<div
  bind:this={el}
  class:shown
  class="reveal"
  style={`--d:${delay}ms; --y:${y}px;`}
>
  <slot />
</div>

<style>
  /* Default κατάσταση: κρυφό + λίγο πιο κάτω + blur */
  .reveal {
    opacity: 0;
    transform: translateY(var(--y, 16px)) scale(0.98);
    filter: blur(6px);

    /* Cinematic transitions */
    transition:
      opacity 800ms cubic-bezier(.16,1,.3,1) var(--d,0ms),
      transform 900ms cubic-bezier(.16,1,.3,1) var(--d,0ms),
      filter 900ms cubic-bezier(.16,1,.3,1) var(--d,0ms);

    /* Μικρή βελτίωση απόδοσης */
    will-change: opacity, transform, filter;
  }

  /* Όταν γίνει “shown”, έρχεται ομαλά στη φυσιολογική του θέση */
  .reveal.shown {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }

  /* Σε reduced motion: όλα σταθερά */
  @media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1; transform: none; filter: none; }
  }
</style>
