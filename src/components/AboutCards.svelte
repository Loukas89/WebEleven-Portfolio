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

<section id={id} class="py-16">
  <div class="mb-8">
    <h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    {#if subtitle}
      <p class="mt-2 max-w-2xl text-sm text-white/70">{subtitle}</p>
    {/if}
  </div>

  <div class="grid gap-6 md:grid-cols-3">
    {#each cards as c}
      <article class="glass p-6">
        <div class="mb-4 flex items-center gap-3">
          {#if c.icon}
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <span class="text-lg">{c.icon}</span>
            </span>
          {/if}
          <h3 class="text-lg font-semibold tracking-tight">{c.title}</h3>
        </div>
        <p class="text-sm leading-relaxed text-white/80">{c.body}</p>
      </article>
    {/each}
  </div>
</section>
