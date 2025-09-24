<template>
  <section id="sponsoring" class="section py-12 sm:py-16 md:py-20">
    <!-- Header -->
    <header class="flex items-end justify-between">
      <div>
        <p class="kicker">Sponzoring</p>
        <h2 class="h2 mt-2">Nabídka reklamní, mediální a marketingové spolupráce</h2>
      </div>
    </header>

    <!-- Intro -->
    <div class="mt-6 grid gap-6">
      <p class="muted">
        Vážení, dovolte nám, abychom Vás jménem zapsaného spolku SK Bílovice nad Svitavou oslovili s nabídkou reklamní, mediální a
        marketingové spolupráce. Jedinečnost této nabídky spočívá ve spojení fotbalového klubu SK Bílovice nad Svitavou a Vaší společnosti.
      </p>
      <p class="muted">
        SK Bílovice nad Svitavou navazují na historii TJ Sokol Bílovice nad Svitavou. Naším zájmem je rozvoj fotbalu a zvýšení povědomí nejen
        o fotbale, ale i o naší malebné obci v rámci Jihomoravského kraje. Klub se opírá o tradici i práci s mládeží: starší dorost hraje 5. ligu,
        krajské soutěže hrají starší i mladší žáci. Celkem máme sedm týmů napříč kategoriemi od nejmenších po dospělé.
      </p>
      <p class="muted">
        Naším cílem je vytvořit silný a stabilní klub s mládežnickým zázemím, za něž se nemusí stydět ani velká města. Věříme, že společně
        s Vaší pomocí tohoto cíle dosáhneme. Ke každému partnerovi přistupujeme individuálně a uvítáme jakýkoliv příspěvek i individuální domluvu.
      </p>
    </div>

    <!-- Benefits -->
    <!-- <div class="mt-10">
      <h3 class="h3">Hlavní přínosy pro Vaši společnost</h3>
      <ul class="mt-4 grid gap-3 sm:grid-cols-2">
        <li class="card p-4 flex items-start gap-3">
          <span class="size-1.5 rounded-full bg-emerald-400 mt-1.5"></span>
          <span>Prostřednictvím reklamních služeb zvýšení povědomí a image značky Vaší společnosti nejen v regionu.</span>
        </li>
        <li class="card p-4 flex items-start gap-3">
          <span class="size-1.5 rounded-full bg-emerald-400 mt-1.5"></span>
          <span>Zprostředkování kontaktů mezi partnery fotbalového klubu.</span>
        </li>
        <li class="card p-4 flex items-start gap-3 sm:col-span-2">
          <span class="size-1.5 rounded-full bg-emerald-400 mt-1.5"></span>
          <span>Mediální propagace Vaší společnosti.</span>
        </li>
      </ul>
    </div> -->

    <!-- Benefits -->
<div class="mt-10">
  <h3 class="h3">Hlavní přínosy pro Vaši společnost</h3>
  <ul class="mt-4 space-y-3">
    <li class="flex items-start gap-3">
      <span class="size-1.5 rounded-full bg-emerald-400 mt-1.5"></span>
      <span>Prostřednictvím reklamních služeb zvýšení povědomí a image značky Vaší společnosti nejen v regionu.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="size-1.5 rounded-full bg-emerald-400 mt-1.5"></span>
      <span>Zprostředkování kontaktů mezi partnery fotbalového klubu.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="size-1.5 rounded-full bg-emerald-400 mt-1.5"></span>
      <span>Mediální propagace Vaší společnosti.</span>
    </li>
  </ul>
</div>


<!-- Úvodní tučný text -->
  <p class="mt-10 font-semibold">
    Vážení, věříme, že Vás naše nabídka zaujme a poskytnete nám prostor pro osobní setkání a
    následnou bližší prezentaci. Bude nám ctí, pokud se stanete našim partnerem.
  </p>
  
   

    <!-- Services specification -->
    <div class="mt-10">
      <h3 class="h3">Specifikace reklamních služeb</h3>

      <div class="mt-4 overflow-x-auto card p-0">
        <table class="min-w-[900px] w-full border-collapse text-sm">
          <thead class="bg-neutral-900/40">
            <tr class="text-left align-bottom">
              <th class="sticky left-0 bg-neutral-900/40 z-10 px-4 py-3 font-medium uppercase tracking-wide text-neutral-300">
                Druh balíčku
              </th>
              <th class="px-3 py-3 font-medium text-neutral-300">5&nbsp;000</th>
              <th class="px-3 py-3 font-medium text-neutral-300">15&nbsp;000</th>
              <th class="px-3 py-3 font-medium text-neutral-300">50&nbsp;000</th>
              <th class="px-3 py-3 font-medium text-neutral-300">100&nbsp;000</th>
              <th class="px-3 py-3 font-medium text-neutral-300">500&nbsp;000</th>
              <th class="px-3 py-3 font-medium text-neutral-300">2&nbsp;000&nbsp;000</th>
              <th class="px-3 py-3 font-medium text-neutral-300">5&nbsp;000&nbsp;000</th>
            </tr>
          </thead>
          <tbody>
            <!-- MINI -->
            <tr class="border-t border-white/10">
              <th scope="row" class="sticky left-0 bg-black/20 backdrop-blur z-10 px-4 py-3 font-medium">MINI</th>
              <!-- <td></td> -->
              <td class="px-3 py-4">
                <img :src="iconSrc" class="h-7 w-7 object-contain" alt="✓" />
              </td>
              <!-- <td></td><td></td><td></td><td></td><td></td> -->
            </tr>
            <!-- STANDARD -->
            <tr class="border-t border-white/10">
              <th scope="row" class="sticky left-0 bg-black/20 backdrop-blur z-10 px-4 py-3 font-medium">STANDARD</th>
              <td></td>
              <td class="px-3 py-4">
                <img :src="iconSrc" class="h-7 w-7 object-contain" alt="✓" />
              </td>
              <td></td><td></td><td></td><td></td>
            </tr>
            <!-- PROFI -->
            <tr class="border-t border-white/10">
              <th scope="row" class="sticky left-0 bg-black/20 backdrop-blur z-10 px-4 py-3 font-medium">PROFI</th>
              <td></td><td></td>
              <td class="px-3 py-4">
                <img :src="iconSrc" class="h-7 w-7 object-contain" alt="✓" />
              </td>
              <td></td><td></td>
            </tr>
            <!-- PERFECT -->
            <tr class="border-t border-white/10">
              <th scope="row" class="sticky left-0 bg-black/20 backdrop-blur z-10 px-4 py-3 font-medium">PERFECT</th>
              <td></td><td></td><td></td>
              <td class="px-3 py-4">
                <img :src="iconSrc" class="h-7 w-7 object-contain" alt="✓" />
              </td>
              <td></td><td></td>
            </tr>
            <!-- V.I.P. -->
            <tr class="border-t border-white/10">
              <th scope="row" class="sticky left-0 bg-black/20 backdrop-blur z-10 px-4 py-3 font-medium">V.I.P.</th>
              <td></td><td></td><td></td><td></td>
              <td class="px-3 py-4">
                <img :src="iconSrc" class="h-7 w-7 object-contain" alt="✓" />
              </td>
              <td></td>
            </tr>
            <!-- GENERAL -->
            <tr class="border-t border-white/10">
              <th scope="row" class="sticky left-0 bg-black/20 backdrop-blur z-10 px-4 py-3 font-medium">GENERAL</th>
              <td></td><td></td><td></td><td></td><td></td>
              <td class="px-3 py-4">
                <img :src="iconSrc" class="h-7 w-7 object-contain" alt="✓" />
              </td>
              <td></td><td></td>
            </tr>
            <!-- GENERAL MAX -->
            <tr class="border-t border-white/10">
              <th scope="row" class="sticky left-0 bg-black/20 backdrop-blur z-10 px-4 py-3 font-medium">GENERAL MAX</th>
              <td></td><td></td><td></td><td></td><td></td><td></td>
              <td class="px-3 py-4">
                <img :src="iconSrc" class="h-7 w-7 object-contain" alt="✓" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

       <!-- Packages (Pricing) -->
    <div class="mt-10">
      <h3 class="h3">Balíčky spolupráce</h3>
      <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="(p, i) in packages" :key="i" class="card p-6 hover:ring-emerald-400/30 transition">
          <div class="flex items-baseline justify-between">
            <h4 class="text-lg font-semibold">{{ p.name }}</h4>
            <p class="text-emerald-300 font-bold">{{ p.price }}</p>
          </div>
          <p class="muted mt-2">{{ p.short }}</p>
        </article>
      </div>
    </div>
    
      <!-- Cards se specifikací služeb -->
           <div class="mt-10">

       <h3 class="h3">Balíčky spolupráce</h3>
      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <article class="card p-5">
          <h4 class="font-semibold">Sponzorství utkání</h4>
          <p class="muted mt-1">Umístění reklamní vývěsky při vstupu na stadion a možnost využít prostory stadionu k reklamním, propagačním a prodejním účelům.</p>
        </article>
        <article class="card p-5">
          <h4 class="font-semibold">Logo na internetu</h4>
          <p class="muted mt-1">Umístění loga společnosti na oficiálních webových stránkách klubu včetně odkazu na internetové stránky Vaší firmy.</p>
        </article>
        <article class="card p-5">
          <h4 class="font-semibold">Reklama na plakátech</h4>
          <p class="muted mt-1">Umístění loga Vaší společnosti na veřejných plakátovacích místech v Bílovicích nad Svitavou.</p>
        </article>
        <article class="card p-5">
          <h4 class="font-semibold">Reklama ve zpravodaji</h4>
          <p class="muted mt-1">Možnost barevné reklamy dle dohody.</p>
        </article>
        <article class="card p-5">
          <h4 class="font-semibold">Reklamní panel na stadionu</h4>
          <p class="muted mt-1">Panel lze umístit po obvodu hřiště. Fotografie z utkání pravidelně zveřejňujeme na sociálních sítích.</p>
        </article>
        <article class="card p-5">
          <h4 class="font-semibold">Logo na dresech / sport. soupravách</h4>
          <p class="muted mt-1">Velmi atraktivní forma propagace. Logo umístíme dle Vašich požadavků (malé/velké).</p>
        </article>
        <article class="card p-5">
          <h4 class="font-semibold">Logo firmy v názvu stadionu</h4>
          <p class="muted mt-1">Název Vaší firmy se může stát oficiálním názvem stadionu.</p>
        </article>
        <article class="card p-5">
          <h4 class="font-semibold">Logo firmy v názvu klubu</h4>
          <p class="muted mt-1">Klub může oficiálně vystupovat pod názvem Vaší firmy v zápasech, na veřejnosti i v médiích.</p>
        </article>
      </div>
    </div>
    </div>

    <!-- Contact -->
    <div class="mt-10 card p-6">
      <h3 class="h3">Kontakt</h3>
      <p class="muted mt-2">Ondřej Sláčík</p>
      <div class="mt-2 flex flex-wrap items-center gap-4 text-emerald-300">
        <a href="tel:+420605564985" class="hover:underline">+420 605 564 985</a>
        <a href="mailto:ondrejslacik@gmail.com" class="hover:underline">ondrejslacik@gmail.com</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Package { name: string; price: string; short: string }

const packages: Package[] = [
  { name: 'MINI', price: '5 000 Kč', short: 'Sponzorství utkání.' },
  { name: 'STANDARD', price: '15 000 Kč', short: 'Sponzorství utkání + logo na internetu.' },
  { name: 'PROFI', price: '50 000 Kč', short: 'Sponzorství utkání + logo na internetu + reklama na plakátech.' },
  { name: 'PERFECT', price: '100 000 Kč', short: 'PROFI + 2× reklamní panel, logo na dresech (malé).' },
  { name: 'V.I.P.', price: '500 000 Kč', short: 'PERFECT + reklama ve zpravodaji.' },
  { name: 'GENERAL', price: '2 000 000 Kč', short: 'V.I.P. + 3× panel, logo u vstupu na stadion, logo na dresech (malé/velké).' },
  { name: 'GENERAL MAX', price: '5 000 000 Kč', short: 'GENERAL + logo firmy v názvu klubu.' },
]

// nahraď cestu na svou ikonu (např. /assets/helmet.png)
const iconSrc = '/images/znak_icon2.png'
</script>
