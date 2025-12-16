<script lang="ts">
  export type AboutCard = {
    title: string;
    body: string;
    icon?: string;
  };

  export let id: string = "about";
  export let title: string = "About";
  export let subtitle: string = "";
  export let cards: AboutCard[] = [];
</script>

<section
  id={id}
  class="py-16 reveal"
  data-reveal
  data-reveal-delay="120"
  data-reveal-once="true"
>
  <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {#if subtitle}
        <p class="mt-2 max-w-2xl text-sm text-white/70">{subtitle}</p>
      {/if}
    </div>
  </div>

  <div class="mt-8 grid gap-6 md:grid-cols-3">
    {#each cards as c, i}
      <article
        class="glass group p-6 reveal"
        data-reveal
        data-reveal-delay={(220 + i * 120).toString()}
        data-reveal-once="true"
      >
        <div class="flex items-start gap-4">
          <div
            class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10"
            aria-hidden="true"
          >
            <span class="text-lg">{c.icon ?? "✨"}</span>
          </div>

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
