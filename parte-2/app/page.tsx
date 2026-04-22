"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;

    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme ? savedTheme === "dark" : prefersDark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  const features = [
    "40 horas de conteudo direto ao ponto",
    "Projetos com Python IA desde o modulo 1",
    "Suporte da comunidade com +20.000 alunos",
    "Certificado reconhecido pelo mercado",
  ];

  const stats = [
    {
      icon: "groups",
      title: "+20.000",
      text: "alunos transformados",
    },
    {
      icon: "schedule",
      title: "+40 horas",
      text: "de conteudo pratico",
    },
    {
      icon: "workspace_premium",
      title: "Certificado",
      text: "reconhecido pelo mercado",
    },
    {
      icon: "stars",
      title: "4,9/5",
      text: "avaliacao dos alunos",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full px-5 py-6 transition-colors duration-300 sm:px-10 sm:py-10 lg:px-20 lg:py-10 ${
        isDark
          ? "bg-[radial-gradient(circle_at_top,#1f1635_0%,#0b1020_42%,#060816_100%)]"
          : "bg-[radial-gradient(circle_at_top,#f6f2ff_0%,#fdfcff_45%,#ffffff_100%)]"
      }`}
    >
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={toggleTheme}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
            isDark
              ? "border-white/10 bg-white/6 text-slate-100 shadow-[0_12px_24px_rgba(0,0,0,0.28)]"
              : "border-violet-100 bg-white text-slate-700 shadow-[0_12px_24px_rgba(91,51,255,0.08)]"
          }`}
        >
          <span className="material-symbols-rounded text-[18px]">
            {isDark ? "light_mode" : "dark_mode"}
          </span>
          {isDark ? "Modo claro" : "Modo escuro"}
        </button>
      </div>

      <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-12 min-[426px]:items-center min-[426px]:gap-10 min-[426px]:flex-row">


        <div className="min-w-0 flex-1">
          
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[clamp(0.75rem,1.7vw,0.875rem)] font-semibold sm:mb-6 sm:px-4 sm:py-2 ${
              isDark
                ? "border-violet-400/20 bg-violet-400/10 text-violet-200"
                : "border-violet-100 bg-violet-50 text-violet-700"
            }`}
          >
            <span className="material-symbols-rounded text-[clamp(1rem,2vw,1.125rem)]">school</span>
            O curso de Python mais pratico do Brasil
          </div>

          <h1
            className={`max-w-xl text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] ${
              isDark ? "text-slate-50" : "text-slate-950"
            }`}
          >
            Aprenda Python do zero e construa{" "}
            <span className="bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_45%,#8b5cf6_100%)] bg-clip-text text-transparent">
              projetos reais com IA
            </span>
          </h1>

          <p
            className={`mt-4 max-w-xl text-[clamp(0.9375rem,2vw,1.125rem)] leading-[1.7] sm:mt-6 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            O curso mais pratico do Brasil para quem quer entrar em tecnologia
            sem enrolacao e com projetos que fazem sentido no mercado atual.
          </p>

          <ul
            className={`mt-6 space-y-3 text-[clamp(0.875rem,1.8vw,1rem)] sm:mt-8 sm:space-y-4 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:h-8 sm:w-8 ${
                    isDark ? "bg-violet-400/15 text-violet-200" : "bg-violet-100 text-violet-700"
                  }`}
                >
                  <span className="material-symbols-rounded text-[clamp(0.875rem,1.8vw,1.125rem)]">
                    check
                  </span>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between flex-col gap-3 sm:mt-10 sm:gap-4 md:flex-row">
            <a
              href="#"
              className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)] px-4 py-2 text-[clamp(0.8125rem,1.5vw,0.9375rem)] leading-none font-medium text-white shadow-[0_20px_45px_rgba(91,51,255,0.28)] transition-transform duration-200 hover:-translate-y-0.5 md:min-h-14 md:px-7 md:py-4 md:font-semibold"
            >
              Quero comecar agora
            </a>
            <a
              href="#"
              className={`inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-[clamp(0.8125rem,1.5vw,0.9375rem)] leading-none font-medium shadow-[0_20px_45px_rgba(91,51,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 md:min-h-14 md:px-7 md:py-4 md:font-semibold ${
                isDark
                  ? "border-white/12 bg-white/6 text-slate-100 hover:border-violet-300/40 hover:text-violet-200"
                  : "border-slate-200 bg-white text-slate-700 hover:border-violet-200 hover:text-violet-700"
              }`}
            >
              <span className="material-symbols-rounded text-[clamp(1rem,2vw,1.125rem)]">
                play_circle
              </span>
              Ver o que vou aprender
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-center min-[426px]:flex-[1.08]">
          <div className="relative mx-auto flex min-h-[360px] w-full max-w-[680px] items-center justify-center sm:min-h-[500px] lg:min-h-[620px] lg:max-w-[760px]">
            <div
              className={`absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
                isDark
                  ? "bg-[radial-gradient(circle,rgba(139,92,246,0.28)_0%,rgba(59,130,246,0.18)_36%,rgba(10,14,29,0)_76%)]"
                  : "bg-[radial-gradient(circle,rgba(167,139,250,0.34)_0%,rgba(196,181,253,0.24)_36%,rgba(255,255,255,0)_76%)]"
              }`}
            />
            <div
              className={`absolute left-[12%] top-[16%] h-44 w-44 rounded-full blur-3xl sm:h-72 sm:w-72 ${
                isDark ? "bg-violet-500/25" : "bg-violet-200/50"
              }`}
            />
            <div
              className={`absolute bottom-[10%] right-[8%] h-40 w-40 rounded-full blur-3xl sm:h-64 sm:w-64 ${
                isDark ? "bg-indigo-500/25" : "bg-indigo-200/50"
              }`}
            />
            <div
              className={`absolute left-1/2 top-[8%] h-28 w-[56%] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(129,140,248,0.18)_1px,_transparent_1.5px)] bg-[length:18px_18px] ${
                isDark ? "opacity-35" : "opacity-65"
              }`}
            />

            <div className="relative z-10 w-full max-w-[640px] lg:max-w-[720px]">
              <Image
                src="/Hero.svg"
                alt="Hero"
                width={900}
                height={900}
                priority
                className="mx-auto h-auto w-full scale-[1.14] drop-shadow-[0_34px_80px_rgba(99,102,241,0.16)] lg:scale-[1.18]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 pt-2 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className={`flex items-center gap-3 rounded-[26px] border px-5 py-5 transition-transform duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? "border-white/8 bg-white/6 shadow-[0_12px_24px_rgba(0,0,0,0.24),0_2px_6px_rgba(0,0,0,0.18)]"
                  : "border-slate-100 bg-white shadow-[0_12px_24px_rgba(15,23,42,0.05),0_2px_6px_rgba(15,23,42,0.035)]"
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_6px_14px_rgba(124,58,237,0.1)] ${
                  isDark ? "bg-violet-400/15 text-violet-200" : "bg-violet-100 text-violet-700"
                }`}
              >
                <span className="material-symbols-rounded text-[20px]">{stat.icon}</span>
              </span>
              <div>
                <p
                  className={`text-[clamp(0.95rem,1.6vw,1.05rem)] font-semibold leading-none ${
                    isDark ? "text-slate-50" : "text-slate-950"
                  }`}
                >
                  {stat.title}
                </p>
                <p
                  className={`mt-1.5 text-[clamp(0.85rem,1.4vw,0.95rem)] leading-snug ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


          {/* <div className="relative mx-auto flex w-full max-w-[580px] items-center justify-center">
            <div className="absolute inset-x-8 top-10 h-56 rounded-full bg-[radial-gradient(circle,#a78bfa_0%,rgba(167,139,250,0.28)_40%,rgba(255,255,255,0)_74%)] blur-3xl" />
            <div className="absolute right-16 top-4 h-28 w-28 rounded-full bg-violet-200/50 blur-2xl" />

            <div className="relative w-full">
              <div className="mx-auto w-full max-w-[430px] rounded-[28px] border border-slate-800/10 bg-[#141826] p-4 shadow-[0_38px_80px_rgba(18,24,40,0.28)]">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <div className="overflow-hidden rounded-[20px] bg-[#0d1120] p-5 text-sm text-slate-200">
                  <div className="mb-5 inline-flex rounded-full bg-white/6 px-3 py-1 text-xs text-slate-400">
                    app.py
                  </div>
                  <div className="space-y-3 font-mono text-[13px] leading-6 sm:text-sm">
                    <div>
                      <span className="text-fuchsia-400">import</span> <span className="text-slate-100">openai</span>
                    </div>
                    <div>
                      <span className="text-fuchsia-400">import</span> <span className="text-slate-100">pandas</span>{" "}
                      <span className="text-fuchsia-400">as</span> <span className="text-sky-300">pd</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-fuchsia-400">def</span> <span className="text-emerald-300">analisar_dados</span>
                      <span className="text-slate-100">(df):</span>
                    </div>
                    <div className="pl-4 text-slate-400">prompt = &quot;&quot;&quot;</div>
                    <div className="pl-4 text-slate-400">
                      Analise os dados abaixo e gere insights importantes para o relatorio
                    </div>
                    <div className="pl-4 text-slate-400">&quot;&quot;&quot;</div>
                    <div className="pl-4">
                      <span className="text-slate-100">resposta = </span>
                      <span className="text-sky-300">openai</span>
                      <span className="text-slate-100">.</span>
                      <span className="text-emerald-300">chat.completions.create</span>
                    </div>
                    <div className="pl-8 text-slate-400">model=&quot;gpt-4.1&quot;,</div>
                    <div className="pl-8 text-slate-400">messages=[...</div>
                    <div className="pl-4">
                      <span className="text-fuchsia-400">return</span> <span className="text-slate-100">resposta</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-1 top-12 rounded-[20px] border border-violet-100 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(91,51,255,0.16)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <span className="material-symbols-rounded text-[22px]">neurology</span>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">IA integrada</p>
                    <p className="text-xs text-slate-500">do basico ao avancado</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-1 bottom-3 rounded-[20px] border border-violet-100 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(91,51,255,0.14)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <span className="material-symbols-rounded text-[22px]">folder_copy</span>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Projetos praticos</p>
                    <p className="text-xs text-slate-500">desde o modulo 1</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-4 bottom-16 rounded-[20px] bg-[#20263a] px-5 py-4 text-white shadow-[0_22px_50px_rgba(16,24,40,0.24)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-violet-200">
                    <span className="material-symbols-rounded text-[22px]">insights</span>
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Insights gerados</p>
                    <p className="text-xs text-slate-300">+85% de eficiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         */}
