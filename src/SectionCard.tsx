import type { PosterSection } from './posterData';
import ImageBubble from './ImageBubble';
import { useReveal } from './useReveal';

interface SectionCardProps {
  section: PosterSection;
  n: number;
}

export default function SectionCard({ section, n }: SectionCardProps) {
  const { ref, visible } = useReveal();
  const flip = n % 2 === 1;
  const diagonal = section.layout === 'diagonal';

  return (
    <section
      id={section.id}
      ref={ref}
      className={`mx-auto w-full max-w-[1240px] px-5 py-7 transition-all duration-700 ease-out sm:px-8 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="relative overflow-hidden rounded-[28px] border-2 border-slate-300 bg-white p-7 shadow-[0_30px_80px_-40px_rgba(20,50,100,0.55)] sm:p-10 lg:p-12">
        <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[140px] font-black leading-none text-slate-900/[0.04] sm:text-[180px]">
          {section.index}
        </span>

        <div className={`grid items-center gap-10 lg:grid-cols-2 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-blue-300 bg-blue-100/90 px-3.5 py-1.5 shadow-md">
              <span className="text-xs font-bold tracking-widest text-blue-800">{section.index}</span>
              <span className="h-3 w-px bg-blue-400" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-800">
                {section.kicker}
              </span>
            </div>

            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {section.title}
            </h2>

            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-slate-800">
              {section.text}
            </p>

            {section.table && (
              <>
                <div className="my-6 h-px w-full bg-gradient-to-r from-slate-300 via-slate-300/70 to-transparent" />
                <div className="overflow-x-auto rounded-xl border-2 border-slate-200 shadow-sm">
                  <table className="w-full text-left text-[13px]">
                    <thead>
                      <tr className="border-b-2 border-slate-200 bg-slate-50">
                        {section.table.headers.map((h: string, i: number) => (
                          <th key={i} className="px-4 py-2.5 font-bold uppercase tracking-wider text-slate-700">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row: string[], ri: number) => (
                        <tr
                          key={ri}
                          className={`border-b border-slate-100 ${ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}
                        >
                          {row.map((cell: string, ci: number) => (
                            <td
                              key={ci}
                              className={`px-4 py-2.5 ${ci === 0 ? 'font-semibold text-slate-900' : 'font-medium text-slate-700'}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {section.bullets && (
              <>
                {!section.table && (
                  <div className="my-6 h-px w-full bg-gradient-to-r from-slate-300 via-slate-300/70 to-transparent" />
                )}
                <ul className={`grid gap-x-6 gap-y-3 ${section.bullets.length > 6 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} ${section.table ? 'mt-4' : ''}`}>
                  {section.bullets.map((b: { icon: string; label: string }, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-200/80 to-cyan-200/80 text-sm ring-2 ring-blue-300">
                        {b.icon}
                      </span>
                      <span className="text-[14px] font-semibold leading-snug text-slate-900">
                        {b.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className={diagonal ? 'relative h-full pt-6 sm:pt-10' : 'grid gap-5 sm:grid-cols-2'}>
            {diagonal ? (
              <>
                <ImageBubble
                  image={section.images[0]}
                  className="sm:absolute sm:left-0 sm:top-0 sm:w-[68%]"
                />
                <ImageBubble
                  image={section.images[1]}
                  className="mt-5 sm:relative sm:left-[32%] sm:top-[34%] sm:mt-0 sm:w-[68%]"
                />
                <div className="hidden sm:block sm:h-[150px]" />
              </>
            ) : (
              <>
                <ImageBubble image={section.images[0]} className="sm:mt-8" />
                <ImageBubble image={section.images[1]} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}