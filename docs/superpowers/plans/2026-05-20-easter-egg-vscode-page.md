# Easter Egg VS Code Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Créer une page `/yannick` qui simule VS Code avec un composant React absurde et la photo de profil en aperçu live.

**Architecture:** Un seul fichier `src/app/yannick/page.tsx`, rendu purement statique (pas de `'use client'`). Layout full-screen flex column. Pas de dépendance externe.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind v4, `next/image`.

---

## Files

- **Create:** `src/app/yannick/page.tsx` — La page easter egg complète

---

### Task 1 : Créer la page avec le shell VS Code

**Files:**
- Create: `src/app/yannick/page.tsx`

- [ ] **Step 1 : Créer le fichier avec metadata + conteneur de base**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'yannick.tsx — Valdence Digital',
  robots: { index: false, follow: false },
}

export default function YannickPage() {
  return (
    <div className="h-screen w-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono flex flex-col overflow-hidden select-none">
      {/* TODO: implémenter le reste */}
    </div>
  )
}
```

- [ ] **Step 2 : Lancer le dev server et vérifier que `/yannick` charge sans erreur**

```bash
pnpm dev
```

Ouvrir `http://localhost:3000/yannick` — attendu : fond noir `#1e1e1e`, pas d'erreur console.

---

### Task 2 : Barre de titre + onglets

**Files:**
- Modify: `src/app/yannick/page.tsx`

- [ ] **Step 1 : Remplacer le TODO par la barre de titre et les onglets**

Remplacer le `{/* TODO: implémenter le reste */}` par :

```tsx
      {/* Title Bar */}
      <div className="h-8 bg-[#3c3c3c] flex items-center px-4 flex-shrink-0">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs text-[#cccccc] mx-auto">yannick.tsx — Valdence Digital</span>
      </div>

      {/* Tab Bar */}
      <div className="h-9 bg-[#252526] flex items-end flex-shrink-0 border-b border-[#1e1e1e]">
        <div className="h-8 px-4 bg-[#1e1e1e] text-xs text-[#cccccc] flex items-center gap-2 border-t-2 border-t-teal">
          <span className="text-[#e8912d]">●</span>
          <span>yannick.tsx</span>
        </div>
      </div>

      {/* Main + Status placeholder */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1" />
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-teal flex items-center px-3 gap-6 text-white text-[11px] flex-shrink-0">
        <span>⎇ main ● 247 commits en retard</span>
        <span className="ml-auto">TypeScript 5.0</span>
        <span>Ln 42, Col 1</span>
        <span>UTF-8</span>
        <span>Espaces: 2</span>
      </div>
```

- [ ] **Step 2 : Vérifier dans le navigateur**

Attendu : barre de titre grise avec 3 pastilles colorées, onglet `yannick.tsx` actif avec point orange, barre de statut teal en bas.

---

### Task 3 : Explorer latéral

**Files:**
- Modify: `src/app/yannick/page.tsx`

- [ ] **Step 1 : Remplacer `<div className="flex-1" />` par le layout principal avec explorer**

```tsx
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">

        {/* Explorer sidebar */}
        <div className="w-56 bg-[#252526] flex-shrink-0 overflow-y-auto hidden md:flex flex-col border-r border-[#3c3c3c]">
          <div className="px-4 py-2 text-[10px] text-[#bbbbbb] font-bold tracking-widest uppercase">
            Explorateur
          </div>
          <div className="text-[12px] leading-6">
            <div className="px-3 py-0.5 text-[#cccccc] flex items-center gap-1">
              <span className="text-[10px]">▾</span>
              <span>📁 VALDENCE-DIGITAL</span>
            </div>
            <div className="pl-6 pr-3 py-0.5 bg-[#37373d] text-white flex items-center gap-1.5">
              <span>📄</span>
              <span>yannick.tsx</span>
            </div>
            <div className="pl-6 pr-3 py-0.5 text-[#cccccc] flex items-center gap-1.5 hover:bg-[#2a2d2e] cursor-pointer">
              <span>📄</span>
              <span>fix-FINAL-v3-REAL.ts</span>
            </div>
            <div className="pl-6 pr-3 py-0.5 text-[#cccccc] flex items-center gap-1.5 hover:bg-[#2a2d2e] cursor-pointer">
              <span>📄</span>
              <span>README_personne_lit.md</span>
            </div>
            <div className="pl-6 pr-3 py-0.5 text-[#858585] flex items-center gap-1.5">
              <span className="text-[10px]">▸</span>
              <span>📁 node_modules</span>
              <span className="text-[10px] ml-1">(22 847 fichiers)</span>
            </div>
            <div className="pl-6 pr-3 py-0.5 text-[#cccccc] flex items-center gap-1.5 hover:bg-[#2a2d2e] cursor-pointer">
              <span>📄</span>
              <span>TODO-urgent-pas-vraiment.txt</span>
            </div>
          </div>
        </div>

        {/* Editor + Preview placeholder */}
        <div className="flex-1" />

      </div>
```

- [ ] **Step 2 : Vérifier dans le navigateur**

Attendu : explorer latéral visible (≥768px), `yannick.tsx` surligné en gris clair, `node_modules` grisé.

---

### Task 4 : Éditeur de code avec humour absurde

**Files:**
- Modify: `src/app/yannick/page.tsx`

- [ ] **Step 1 : Remplacer `{/* Editor + Preview placeholder */}<div className="flex-1" />` par l'éditeur et le panneau preview**

Chaque ligne de code est un `<div>` avec un numéro de ligne à gauche. Les couleurs imitent le thème VS Code Dark+ :
- Commentaires : `text-[#6a9955]`
- Mots-clés (`interface`, `const`, `export`, `function`, `return`, `if`, `throw`, `new`) : `text-[#569cd6]`
- Types (`string`, `number`, `Date`, `boolean`) : `text-[#4ec9b0]`
- Chaînes : `text-[#ce9178]`
- Nombres : `text-[#b5cea8]`
- Noms de fonctions/composants : `text-[#dcdcaa]`
- Props JSX : `text-[#9cdcfe]`
- Texte normal : `text-[#d4d4d4]`

```tsx
        {/* Editor */}
        <div className="flex-1 overflow-y-auto text-[13px] leading-6 py-2">
          {lines.map((line, i) => (
            <div key={i} className="flex hover:bg-[#2a2d2e] px-0 min-w-0">
              <span className="w-12 flex-shrink-0 text-right pr-4 text-[#858585] select-none text-[12px] leading-6">
                {i + 1}
              </span>
              <span className="flex-1 pr-4 whitespace-pre">{line}</span>
            </div>
          ))}
        </div>

        {/* Preview Panel */}
        <div className="w-64 xl:w-80 bg-[#252526] flex-shrink-0 flex flex-col border-l border-[#3c3c3c] hidden lg:flex">
          <div className="px-4 py-2 text-[11px] text-[#bbbbbb] flex items-center gap-2 border-b border-[#3c3c3c] uppercase tracking-widest">
            <span>▶</span>
            <span>Aperçu en direct</span>
          </div>
          <div className="flex-1 flex items-center justify-center p-6">
            <Image
              src="/photo_yb.webp"
              alt="Yannick Bernard"
              width={220}
              height={280}
              className="rounded-sm object-cover shadow-2xl"
            />
          </div>
        </div>
```

- [ ] **Step 2 : Définir le tableau `lines` avec le faux code**

Ajouter AVANT le `return (` dans `YannickPage` :

```tsx
  const c = (s: string) => <span className="text-[#6a9955]">{s}</span>
  const k = (s: string) => <span className="text-[#569cd6]">{s}</span>
  const t = (s: string) => <span className="text-[#4ec9b0]">{s}</span>
  const str = (s: string) => <span className="text-[#ce9178]">{s}</span>
  const num = (s: string) => <span className="text-[#b5cea8]">{s}</span>
  const fn = (s: string) => <span className="text-[#dcdcaa]">{s}</span>
  const prop = (s: string) => <span className="text-[#9cdcfe]">{s}</span>
  const dim = (s: string) => <span className="text-[#858585]">{s}</span>

  const lines: React.ReactNode[] = [
    c('/**'),
    c(' * @component DéveloppeurFullStack'),
    c(' * @description Composant représentant un développeur full-stack.'),
    c(' *              Attention : ce composant est en production depuis 2014.'),
    c(' *              Ne pas toucher.'),
    c(' *'),
    c(' * @param {Props} props - Les props. Oui, il y en a.'),
    c(' * @returns {JSX.Element} Un développeur. Probablement.'),
    c(' *'),
    c(' * @see https://stackoverflow.com/a/42  ← résout 90% des bugs'),
    c(' * @deprecated Mais ça marche, alors on laisse.'),
    c(' */'),
    '',
    <>{c('// TODO:')} refactorer quand j&apos;ai du temps {dim('(ouvert depuis 2019)')}</>,
    <>{c('// BUG:')} fonctionne. raison inconnue. ne pas toucher.</>,
    <>{c('// FIXME:')} ce n&apos;est pas un bug, c&apos;est une feature</>,
    <>{c('// @ts-expect-error')} {dim('— on verra ça plus tard (spoiler : non)')}</>,
    '',
    <>{k('interface')} {t('Props')} {'{'}</>,
    <>&nbsp;&nbsp;{prop('humeurDuMatin')}: {str("'caféinée'")} | {str("'décaféinée'")}</>,
    <>&nbsp;&nbsp;{prop('nbCafés')}: {t('number')} &nbsp;&nbsp;{c('// minimum 3 pour fonctionner correctement')}</>,
    <>&nbsp;&nbsp;{prop('stackTechnique')}: {t('string')}[] {c('// de préférence en nombre impair')}</>,
    <>&nbsp;&nbsp;{prop('deadline')}?: {t('Date')} &nbsp;&nbsp;&nbsp;{c('// ignorée de toute façon')}</>,
    <>{'}'}</>,
    '',
    <>{k('const')} {prop('CONSTANTE_MAGIQUE')} = {num('42')} &nbsp;{c('// ne pas modifier')}</>,
    <>{k('const')} {prop('NB_TENTATIVES_MAX')} = {t('Infinity')} {c('// optimisme')}</>,
    '',
    <>{k('export default function')} {fn('DéveloppeurFullStack')}({'{'}</>,
    <>&nbsp;&nbsp;{prop('humeurDuMatin')},</>,
    <>&nbsp;&nbsp;{prop('nbCafés')},</>,
    <>{'}'}: {t('Props')}) {'{'}</>,
    <>&nbsp;&nbsp;{k('if')} ({prop('nbCafés')} {'<'} {num('3')}) {k('throw')} {k('new')} {fn('Error')}({str("'Insufficient coffee'")})</>,
    '',
    <>&nbsp;&nbsp;{c('// humeurDuMatin non utilisée — gérée par le café')}</>,
    '',
    <>&nbsp;&nbsp;{k('return')} (</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{t('Image')}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{prop('src')}={str('"/photo_yb.webp"')}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{prop('alt')}={str('"Yannick Bernard — disponible (sous conditions)"')}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{prop('width')}={'{' + ''}{num('320')}{'' + '}'}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{prop('height')}={'{' + ''}{num('400')}{'' + '}'}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;{'/>'}</>,
    <>&nbsp;&nbsp;)</>,
    <>{'}'}</>,
    '',
    <>{c('// Fin du fichier. Courage.')}</>,
  ]
```

> **Note :** `lines` contient des `ReactNode` (spans colorés). Le `.map()` dans le JSX restitue chaque ligne dans un `<div>`.

- [ ] **Step 3 : Vérifier dans le navigateur**

Attendu : éditeur avec numéros de ligne, code coloré façon VS Code, photo visible dans le panneau de droite (≥1024px).

---

### Task 5 : Lint + commit

**Files:**
- No change

- [ ] **Step 1 : Lancer le lint**

```bash
pnpm lint
```

Attendu : aucune erreur. Si des `&apos;` manquent, les corriger dans les strings JSX.

- [ ] **Step 2 : Vérifier le build**

```bash
pnpm build
```

Attendu : build OK, route `/yannick` générée statiquement.

- [ ] **Step 3 : Commit**

```bash
git add src/app/yannick/page.tsx docs/superpowers/
git commit -m "feat: add /yannick easter egg page (VS Code mockup)"
```

---

## Self-Review

**Spec coverage :**
- ✅ Route `/yannick` avec noindex
- ✅ Barre de titre macOS
- ✅ Explorer latéral avec fichiers drôles
- ✅ Onglet actif `yannick.tsx`
- ✅ Éditeur avec code absurde : JSDoc, TODO 2019, BUG, FIXME, Props humeur/café
- ✅ Panneau preview avec `photo_yb.webp`
- ✅ Barre de statut teal avec `247 commits en retard`
- ✅ Responsive (explorer caché mobile, preview cachée tablette)

**Placeholder scan :** aucun TBD ou "implement later".

**Type consistency :** `lines: React.ReactNode[]` défini en Task 4 Step 2, utilisé en Task 4 Step 1. `c`, `k`, `t`, `str`, `num`, `fn`, `prop`, `dim` définis avant `lines`. Cohérent.
