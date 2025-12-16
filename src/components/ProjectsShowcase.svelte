<script lang="ts">
  import { onMount } from "svelte";

  export type Project = {
    title: string;
    description: string;
    tags?: string[];
    href?: string;
    details?: string;
  };

  export let id: string = "projects";
  export let title: string = "Projects";
  export let subtitle: string = "";
  export let viewAllHref: string = "#";
  export let projects: Project[] = [];

  let selectedTag: string = "All";
  let open = false;
  let active: Project | null = null;
  let lastFocus: Element | null = null;
  let dialogEl: HTMLDivElement | null = null;

  $: tags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags ?? [])))];
  $: filtered =
    selectedTag === "All" ? projects : projects.filter((p) => (p.tags ?? []).includes(selectedTag));

  function openModal(p: Project) {
    lastFocus = document.activeElement;
    active = p;
    open = true;
    setTimeout(() => dialogEl?.focus(), 0);
  }

  function closeModal() {
    open = false;
    active = null;
    (lastFocus as HTMLElement | null)?.focus?.();
  }

  onMount(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
</script>

<section
  id={id}
  class="py-16 reveal"
  data-reveal
  data-reveal-delay="160"
  data-reveal-once="true"
>
  <div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {#if subtitle}
        <p class="mt-2 max-w-2xl text-sm text-white/70">{subtitle}</p>
      {/if}
    </div>

    <a class="btn-ghost w-fit" href={viewAllHref}>View all</a>
  </div>

  <div class="mt-6 flex flex-wrap gap-2 reveal" data-reveal data-reveal-delay="260" data-reveal-once="true">
    {#each tags as t}
      <button
        type="button"
        class={"tag " + (selectedTag === t ? "ring-1 ring-white/30" : "hover:bg-white/10")}
        on:click={() => (selectedTag = t)}
        aria-pressed={selectedTag === t}
      >
        {t}
      </button>
    {/each}
  </div>

  <div class="mt-8 grid gap-6 md:grid-cols-2">
    {#each filtered as p, i}
      <button
        type="button"
        class="glass group p-6 text-left transition hover:bg-white/10 reveal"
        data-reveal
        data-reveal-delay={(320 + i * 120).toString()}
        data-reveal-once="true"
        on:click={() => openModal(p)}
      >
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-semibold tracking-tight">{p.title}</h3>
          <span class="text-white/50 group-hover:text-white/80" aria-hidden="true">↗</span>
        </div>

        <p class="mt-3 text-sm leading-relaxed text-white/80">{p.description}</p>

        {#if p.tags?.length}
          <div class="mt-4 flex flex-wrap gap-2" aria-label="Project tags">
            {#each p.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        {/if}
      </button>
    {/each}
  </div>

  {#if open && active}
    <div class="modal" aria-hidden="false">
      <button class="modal__backdrop" type="button" aria-label="Close dialog" on:click={closeModal} />

      <div
        class="modal__panel glass-strong"
        role="dialog"
        aria-modal="true"
        aria-label="Project details"
        tabindex="-1"
        bind:this={dialogEl}
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="text-xl font-semibold">{active.title}</h3>
            <p class="mt-2 text-sm text-white/75">{active.description}</p>
          </div>

          <button type="button" class="btn-ghost" on:click={closeModal}>Close</button>
        </div>

        {#if active.details}
          <div class="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p class="text-sm leading-relaxed text-white/80">{active.details}</p>
          </div>
        {/if}

        {#if active.href}
          <div class="mt-6">
            <a class="btn-primary" href={active.href}>Open project page</a>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</section>

<style>
  .modal {
    position: fixed;
    inset: 0;
    z-index: 60;
    display: grid;
    place-items: center;
    padding: 1.25rem;
  }

  .modal__backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
    border: 0;
    padding: 0;
  }

  .modal__panel {
    position: relative;
    width: min(720px, 100%);
    padding: 1.25rem;
  }
</style>
