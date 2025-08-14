<template>
  <section id="about" class="section py-12 sm:py-16 md:py-20">
    <div class="grid gap-8 md:grid-cols-2">
      <!-- Team Presentation -->
      <article class="card p-6 sm:p-8 hover:ring-emerald-400/30 transition">
        <p class="kicker">Představení klubu</p>
        <h2 class="h2 mt-2">FC Aurora</h2>
        <p class="muted mt-3">
          Založen v roce 2012. FC Aurora vyrostl z místního klubu v regionálního soupeře. Naším posláním je inspirovat komunitu
          prostřednictvím excelence na hřišti i mimo něj, rozvíjet talent a podporovat fair play.
        </p>
        <ul class="mt-4 grid grid-cols-2 gap-3 text-sm text-neutral-300">
          <li class="flex items-center gap-2"><span class="size-1.5 rounded-full bg-emerald-400"></span> 3× vítěz ligy</li>
          <li class="flex items-center gap-2"><span class="size-1.5 rounded-full bg-emerald-400"></span> Mládežnická akademie</li>
          <li class="flex items-center gap-2"><span class="size-1.5 rounded-full bg-emerald-400"></span> Komunitní projekty</li>
          <li class="flex items-center gap-2"><span class="size-1.5 rounded-full bg-emerald-400"></span> Ženský tým</li>
        </ul>
      </article>

      <!-- News / Updates -->
      <aside class="card p-6 sm:p-8 hover:ring-emerald-400/30 transition">
        <p class="kicker">Aktuality</p>
        <h2 class="h2 mt-2">Nejnovější z klubu</h2>
        <ul class="mt-4 divide-y divide-white/10">
          <li class="py-4">
            <h3 class="font-semibold">18. kolo: Aurora 2–1 Riverton</h3>
            <p class="muted text-sm">Pozdní vítězná branka Silvy zajistila tři body doma.</p>
          </li>
          <li class="py-4">
            <h3 class="font-semibold">Otevřené nábory do akademie</h3>
            <p class="muted text-sm">Registrujte se do kategorií U-14 a U-16.</p>
          </li>
          <li class="py-4">
            <h3 class="font-semibold">Sbírka dresů</h3>
            <p class="muted text-sm">Darujte staré dresy a vybavení v klubovém obchodě tuto sobotu.</p>
          </li>
        </ul>
        <div class="mt-6">
          <a href="#news" class="btn-ghost">Zobrazit všechny novinky</a>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static section for now; can be made dynamic later via content API.
</script>

