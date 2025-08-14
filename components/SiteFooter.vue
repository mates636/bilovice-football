<template>
  <footer class="mt-16 bg-neutral-900/50 ring-1 ring-white/10">
    <div class="section py-12 grid gap-10 md:grid-cols-4">
      <!-- Club info -->
      <div>
        <div class="flex items-center gap-3">
          <!-- <div class="size-9 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/30 grid place-items-center">
            <svg class="size-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M5 12l4 3 6-6"/></svg>
          </div> -->
          <span class="font-extrabold tracking-tight">SK Bílovice nad Svitavou</span>
        </div>
        <!-- <p class="muted mt-3 text-sm">Fotbal není záležitostí života a smrti. Je mnohem důležitější!</p> -->
        <div class="mt-3 flex flex-col items-start gap-2 text-neutral-300">
          <!-- <a href="#" aria-label="Facebook" class="hover:text-white"><svg class="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9V12.06h2.54V9.86c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.89h2.74l-.44 2.91h-2.3V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg></a> -->
          <a href="https://www.instagram.com/bilovicke_fotbal/" aria-label="Instagram" class="inline-flex items-center gap-2 hover:text-white">
            <svg class="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm6.5-.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Z"/></svg>
            <span>@bilovicke_fotbal</span>
          </a>
          <a href="https://www.instagram.com/bilovice_dorost/" aria-label="Instagram" class="inline-flex items-center gap-2 hover:text-white">
            <svg class="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm6.5-.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Z"/></svg>
            <span>@bilovice_dorost</span>
          </a>
          <!-- <a href="#" aria-label="YouTube" class="hover:text-white"><svg class="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"/></svg></a> -->
        </div>
      </div>

      <!-- Quick links -->
      <div>
        <h3 class="font-semibold">Stránky</h3>
        <ul class="mt-3 space-y-2 text-sm text-neutral-300">
          <li><NuxtLink to="/" class="hover:text-white">Úvod</NuxtLink></li>
          <li><NuxtLink to="/historie" class="hover:text-white">Historie</NuxtLink></li>
          <li><a href="#news" class="hover:text-white">Aktuality</a></li>
          <li><a href="#team" class="hover:text-white">Tým</a></li>
          <li><a href="#contact" class="hover:text-white">Kontakt</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="font-semibold">Kontakt</h3>
        <ul class="mt-3 space-y-2 text-sm text-neutral-300">
          <li><span class="text-neutral-400">E-mail:</span> info@skbilovicenadsvitavou.cz</li>
          <li><span class="text-neutral-400">Telefon:</span> +420 724 231 129</li>
          <li><span class="text-neutral-400">Adresa:</span> Bílovice nad Svitavou 486</li>
        </ul>
      </div>

      <!-- Newsletter -->
      <!-- <div>
        <h3 class="font-semibold">Newsletter</h3>
        <p class="muted text-sm mt-2">Přihlaste se k odběru novinek a výsledků.</p>
        <form class="mt-4 flex gap-2">
          <input type="email" placeholder="Váš e-mail" class="flex-1 rounded-lg bg-white/5 px-3 py-2 text-sm placeholder:text-neutral-400 ring-1 ring-white/10 focus:ring-emerald-400 focus:outline-none" />
          <button type="button" class="btn-primary">Odeslat</button>
        </form>
      </div> -->
    </div>
    <div class="border-t border-white/10">
      <div class="section py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <p>© {{ new Date().getFullYear() }} SK Bílovice nad Svitavou</p>
        <!-- <div class="flex items-center gap-6">
          <a href="#" class="hover:text-white">Podmínky</a>
          <a href="#" class="hover:text-white">Ochrana soukromí</a>
          <a href="#" class="hover:text-white">Cookies</a>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

