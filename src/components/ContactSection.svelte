<script lang="ts">
  export let id: string = "contact";
  export let title = "Contact";
  export let subtitle = "Let’s build something clean, fast, and a little bit magical.";
  export let email = "youremail@example.com";
  export let location = "Athens, Greece";
</script>

<section id={id} class="py-16">
  <div class="glass-strong p-8 sm:p-10">
    <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <div class="max-w-xl">
        <h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <p class="mt-3 text-sm leading-relaxed text-white/75">{subtitle}</p>

        <div class="mt-6 space-y-3 text-sm">
          <div class="flex items-center gap-2 text-white/85">
            <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">✉️</span>
            <a class="hover:underline" href={`mailto:${email}`}>{email}</a>
          </div>
          <div class="flex items-center gap-2 text-white/70">
            <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">📍</span>
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div class="w-full max-w-md">
        <form class="grid gap-4" aria-label="Contact form">
          <div>
            <label class="label" for="name">Name</label>
            <input id="name" class="input" name="name" autocomplete="name" placeholder="Your name" />
          </div>

          <div>
            <label class="label" for="email">Email</label>
            <input id="email" class="input" name="email" type="email" autocomplete="email" placeholder="Your email" />
          </div>

          <div>
            <label class="label" for="message">Message</label>
            <textarea id="message" class="input min-h-[120px]" name="message" autocomplete="off" placeholder="Message"></textarea>
          </div>

          <button class="btn-primary" type="button">
            Send message <span aria-hidden="true">→</span>
          </button>

          <p class="text-xs text-white/55">
            Tip: Για “full marks”, σύνδεσέ το αργότερα με Formspree/Netlify Forms.
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
