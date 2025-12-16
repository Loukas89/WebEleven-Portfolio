<script lang="ts">
  export let id: string = "contact";
  export let title: string = "Contact";
  export let subtitle: string = "";
  export let email: string = "youremail@example.com";
  export let location: string = "Athens, Greece";

  // UI-only (no real submit)
  let name = "";
  let fromEmail = "";
  let message = "";

  function onSubmit(e: Event) {
    e.preventDefault();
    // UI-only. You can show a toast later if you want.
  }
</script>

<section
  id={id}
  class="py-16 reveal"
  data-reveal
  data-reveal-delay="200"
  data-reveal-once="true"
>
  <div class="grid gap-8 lg:grid-cols-2">
    <div>
      <h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {#if subtitle}
        <p class="mt-2 max-w-xl text-sm text-white/70">{subtitle}</p>
      {/if}

      <div class="mt-6 space-y-3 text-sm text-white/75">
        <p class="flex items-center gap-2">
          <span aria-hidden="true">✉️</span>
          <a class="text-white/80 hover:text-white underline-offset-4 hover:underline" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
        <p class="flex items-center gap-2">
          <span aria-hidden="true">📍</span>
          <span>{location}</span>
        </p>
      </div>

      <div class="mt-8 glass p-6 reveal" data-reveal data-reveal-delay="320" data-reveal-once="true">
        <h3 class="text-base font-semibold text-white/90">Quick note</h3>
        <p class="mt-2 text-sm leading-relaxed text-white/75">
          This form is UI-only for the assignment. Later you can wire it to Formspree, Netlify Forms, or an API route.
        </p>
      </div>
    </div>

    <form class="glass-strong p-6 sm:p-8 reveal" data-reveal data-reveal-delay="420" data-reveal-once="true" on:submit={onSubmit}>
      <div class="grid gap-4">
        <div>
          <label class="block text-sm text-white/80" for="name">Name</label>
          <input
            id="name"
            class="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10"
            type="text"
            bind:value={name}
            placeholder="Your name"
            autocomplete="name"
          />
        </div>

        <div>
          <label class="block text-sm text-white/80" for="email">Email</label>
          <input
            id="email"
            class="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10"
            type="email"
            bind:value={fromEmail}
            placeholder="you@example.com"
            autocomplete="email"
          />
        </div>

        <div>
          <label class="block text-sm text-white/80" for="message">Message</label>
          <textarea
            id="message"
            class="mt-2 min-h-[140px] w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10"
            bind:value={message}
            placeholder="Write your message..."
          />
        </div>

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <button class="btn-primary" type="submit">Send</button>
          <button class="btn-ghost" type="button" on:click={() => { name = ""; fromEmail = ""; message = ""; }}>
            Clear
          </button>
        </div>

        <p class="text-xs text-white/45">
          UI only. No backend required for the assignment.
        </p>
      </div>
    </form>
  </div>
</section>
