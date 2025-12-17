<script lang="ts">
  /*
    AboutCards
    - Ένα section που δείχνει “κάρτες” με πληροφορίες για εσένα
    - Παίρνει data απ’ έξω (title/subtitle/cards) για να είναι εύκολο να αλλάζει σε EL/EN
  */

  // Σχήμα  κάθε κάρτας (τίτλος, κείμενο, icon)
  export type AboutCard = {
    title: string;
    body: string;
    icon?: string;
  };

  // id για να μπορούμε να κάνουμε scroll με #about από menu/CTA
  export let id: string = "about";

  // Τίτλος section (π.χ. "About" ή "Σχετικά")
  export let title: string = "About";

  // Προαιρετικό μικρό κείμενο κάτω από τον τίτλο
  export let subtitle: string = "";

  // Η λίστα με τις κάρτες που θα εμφανιστούν
  export let cards: AboutCard[] = [];
</script>

<!-- Κύριο About section -->
<section
  id={id}
  class="py-16 reveal"
  data-reveal
  data-reveal-delay="120"
  data-reveal-once="true"
>
  <!-- Header του section: τίτλος + subtitle -->
  <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>

      <!-- Αν υπάρχει subtitle, το δείχνουμε. Αν όχι, απλά δεν εμφανίζεται. -->
      {#if subtitle}
        <p class="mt-2 max-w-2xl text-sm text-white/70">{subtitle}</p>
      {/if}
    </div>
  </div>

  <!-- Grid με τις κάρτες -->
  <div class="mt-8 grid gap-6 md:grid-cols-3">
    {#each cards as c, i}
      <!-- Κάθε κάρτα μπαίνει με scroll reveal + μικρή καθυστέρηση -->
      <article
        class="glass group p-6 reveal"
        data-reveal
        data-reveal-delay={(220 + i * 120).toString()}
        data-reveal-once="true"
      >
        <div class="flex items-start gap-4">
          <!-- Μικρό “badge” για το icon (διακοσμητικό) -->
          <div
            class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10"
            aria-hidden="true"
          >
            <!-- Αν δεν δώσουμε icon, βάζει default ✨ -->
            <span class="text-lg">{c.icon ?? "✨"}</span>
          </div>

          <!-- Περιεχόμενο κάρτας -->
          <div class="min-w-0">
            <h3 class="text-lg font-semibold tracking-tight text-white/90 group-hover:text-white">
              {c.title}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-white/75">{c.body}</p>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>
