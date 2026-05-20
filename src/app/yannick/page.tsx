import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'

const comment = (s: string) => <span className="text-[#6a9955]">{s}</span>
const keyword = (s: string) => <span className="text-[#569cd6]">{s}</span>
const typeRef = (s: string) => <span className="text-[#4ec9b0]">{s}</span>
const strLiteral = (s: string) => <span className="text-[#ce9178]">{s}</span>
const numLiteral = (s: string) => <span className="text-[#b5cea8]">{s}</span>
const fnName = (s: string) => <span className="text-[#dcdcaa]">{s}</span>
const propName = (s: string) => <span className="text-[#9cdcfe]">{s}</span>
const dimmed = (s: string) => <span className="text-[#858585]">{s}</span>

export const metadata: Metadata = {
  title: 'yannick.tsx — Valdence Digital',
  robots: { index: false, follow: false },
}

export default function YannickPage() {
  const lines: ReactNode[] = [
    comment('/**'),
    comment(' * @component DéveloppeurFullStack'),
    comment(' * @description Composant représentant un développeur full-stack.'),
    comment(' *              Attention : ce composant est en production depuis 2014.'),
    comment(' *              Ne pas toucher.'),
    comment(' *'),
    comment(' * @param {Props} props - Les props. Oui, il y en a.'),
    comment(' * @returns {JSX.Element} Un développeur. Probablement.'),
    comment(' *'),
    comment(' * @see https://stackoverflow.com/a/42  ← résout 90% des bugs'),
    comment(' * @deprecated Mais ça marche, alors on laisse.'),
    comment(' */'),
    '',
    <>{comment('// TODO:')} refactorer quand j&apos;ai du temps {dimmed('(ouvert depuis 2019)')}</>,
    <>{comment('// BUG:')} fonctionne. raison inconnue. ne pas toucher.</>,
    <>{comment('// FIXME:')} ce n&apos;est pas un bug, c&apos;est une feature</>,
    <>{comment('// @ts-expect-error')} {dimmed('— on verra ça plus tard (spoiler : non)')}</>,
    '',
    <>{keyword('interface')} {typeRef('Props')} {'{'}</>,
    <>&nbsp;&nbsp;{propName('humeurDuMatin')}: {strLiteral("'caféinée'")} | {strLiteral("'décaféinée'")}</>,
    <>&nbsp;&nbsp;{propName('nbCafés')}: {typeRef('number')} &nbsp;&nbsp;{comment('// minimum 3 pour fonctionner correctement')}</>,
    <>&nbsp;&nbsp;{propName('stackTechnique')}: {typeRef('string')}[] {comment('// de préférence en nombre impair')}</>,
    <>&nbsp;&nbsp;{propName('deadline')}?: {typeRef('Date')} &nbsp;&nbsp;&nbsp;{comment('// ignorée de toute façon')}</>,
    <>{'}'}</>,
    '',
    <>{keyword('const')} {propName('CONSTANTE_MAGIQUE')} = {numLiteral('42')} &nbsp;{comment('// ne pas modifier')}</>,
    <>{keyword('const')} {propName('NB_TENTATIVES_MAX')} = {typeRef('Infinity')} {comment('// optimisme')}</>,
    '',
    <>{keyword('export default function')} {fnName('DéveloppeurFullStack')}({'{'}</>,
    <>&nbsp;&nbsp;{propName('humeurDuMatin')},</>,
    <>&nbsp;&nbsp;{propName('nbCafés')},</>,
    <>{'}'}: {typeRef('Props')}) {'{'}</>,
    <>&nbsp;&nbsp;{keyword('if')} ({propName('nbCafés')} {'<'} {numLiteral('3')}) {keyword('throw')} {keyword('new')} {fnName('Error')}({strLiteral("'Insufficient coffee'")})</>,
    '',
    <>&nbsp;&nbsp;{comment('// humeurDuMatin non utilisée — gérée par le café')}</>,
    '',
    <>&nbsp;&nbsp;{keyword('return')} (</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{typeRef('Image')}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{propName('src')}={strLiteral('"/photo_yb.webp"')}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{propName('alt')}={strLiteral('"Yannick Bernard — disponible (sous conditions)"')}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{propName('width')}={'{' + ''}{numLiteral('320')}{'' + '}'}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{propName('height')}={'{' + ''}{numLiteral('400')}{'' + '}'}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;{'/>'}</>,
    <>&nbsp;&nbsp;)</>,
    <>{'}'}</>,
    '',
    <>{comment('// Fin du fichier. Courage.')}</>,
  ]

  return (
    <div className="h-screen w-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono flex flex-col overflow-hidden select-none">

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
        <div className="w-64 xl:w-80 bg-[#252526] flex-shrink-0 border-l border-[#3c3c3c] hidden lg:flex lg:flex-col">
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

      </div>

      {/* Status Bar */}
      <div className="h-6 bg-teal flex items-center px-3 gap-6 text-white text-[11px] flex-shrink-0">
        <span>⎇ main ● 247 commits en retard</span>
        <span className="ml-auto">TypeScript 5.0</span>
        <span>Ln 42, Col 1</span>
        <span>UTF-8</span>
        <span>Espaces: 2</span>
      </div>

    </div>
  )
}
