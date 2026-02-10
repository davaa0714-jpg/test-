"use client";

import React, { JSX } from "react";

// Simple responsive homepage built with React + TypeScript and Tailwind CSS.
// Save as `HomePage.tsx` and include in a React app (Next.js or Vite + React).

export default function HomePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 antialiased">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">D</div>
          <div>
            <h1 className="text-lg font-semibold">Davaajargal</h1>
            <p className="text-xs text-slate-500 -mt-0.5">Нүүр хуудас</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm hover:underline">Онцлогууд</a>
          <a href="#pricing" className="text-sm hover:underline">Үнийн санал</a>
          <a href="#contact" className="text-sm hover:underline">Холбоо барих</a>
          <button className="ml-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm shadow">Нэвтрэх</button>
        </div>

        <button className="md:hidden p-2 rounded-md border">Menu</button>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Тавтай морил</h2>
        

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow">Эхлэх</a>
           
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md text-sm text-slate-600">
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">100+</div>
              <div className="text-xs">Хэрэглэгч</div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">24/7</div>
              <div className="text-xs">Дэмжлэг</div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="font-semibold">99.9%</div>
              <div className="text-xs">Хөдөлгөөн</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          {/* Simple illustrative card */}
          <div className="w-full max-w-md bg-gradient-to-br from-white to-slate-50 border rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Тохируулгатай панел</h3>
                <p className="text-sm text-slate-500">Хялбар удирдлага, статистик харах.</p>
              </div>
              <div className="text-indigo-600 font-bold">v1.0</div>
            </div>

            <div className="mt-6">
              <div className="text-xs text-slate-500">Системийн ажиллагаа</div>
              <div className="w-full bg-slate-100 rounded-full h-3 mt-2 overflow-hidden">
                <div className="h-3 rounded-full" style={{ width: "76%", background: "linear-gradient(90deg,#7c3aed,#ec4899)" }} />
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 px-4 py-2 rounded-md bg-indigo-600 text-white">Профайл</button>
              <button className="flex-1 px-4 py-2 rounded-md border">Тохиргоо</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Онцлогууд</h3>
          <p className="text-slate-600 mt-2 max-w-2xl">Энд дурдсан онцлогууд нь энгийн төсөл эхлэхэд тохиромжтой бөгөөд таны хэрэгцээнд тааруулан өөрчилж болно.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard title="Хурдан" desc="Хурдан эхлэх, хурдан хөгжүүлэх архитектур" />
            <FeatureCard title="Аюулгүй" desc="TypeScript-аар бичигдсэн тул илэршгүй алдааг багасгана" />
            <FeatureCard title="Тохируулгатай" desc="Хялбархан сэдэв, өнгө, Layout-г солих боломжтой" />
          </div>
        </div>
      </section>

      {/* Pricing (simple) */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Үнийн саналууд</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard title="Суурь" price="0" bullets={["Хязгаарлагдмал хэрэглээ","Нэг төсөл"]} />
          <PricingCard title="Стандарт" price="9" bullets={["Хамгийн их тохируулга","3 төсөл"]} popular />
          <PricingCard title="Бизнес" price="29" bullets={["Хязгааргүй төсөл","Багахан дэмжлэг"]} />
        </div>
      </section>

      {/* Contact + Footer */}
      <footer id="contact" className="bg-slate-50 py-10 mt-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold">Холбоо барих</h4>
            <p className="text-sm text-slate-600 mt-2">Та имэйл илгээж болно: example@domain.com</p>
          </div>

          <div>
            <h4 className="font-semibold">Хаяг</h4>
            <p className="text-sm text-slate-600 mt-2">Улаанбаатар, Монгол</p>
          </div>

          <div>
            <h4 className="font-semibold">Нийгэмлэг</h4>
            <div className="flex gap-3 mt-2">
              <a className="text-sm underline">Twitter</a>
              <a className="text-sm underline">Facebook</a>
              <a className="text-sm underline">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-8 border-t pt-6 text-sm text-slate-500">© {new Date().getFullYear()} Davaajargal. Бүх эрх хуулиар хамгаалагдсан.</div>
      </footer>
    </main>
  );
}

// --- Small re-usable components ---

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-sm">
      <div className="text-3xl">⚡</div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function PricingCard({ title, price, bullets, popular }: { title: string; price: string | number; bullets: string[]; popular?: boolean }) {
  return (
    <div className={`p-6 rounded-lg border ${popular ? "border-indigo-600 bg-indigo-50" : "bg-white"}`}>
      {popular && <div className="text-xs text-indigo-700 font-semibold mb-2">ХАМГИЙН СОНГОГДСОН</div>}
      <h4 className="text-xl font-semibold">{title}</h4>
      <div className="mt-2 text-3xl font-bold">${price}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      <button className="mt-6 w-full px-4 py-2 rounded-md bg-indigo-600 text-white">Сонгох</button>
    </div>
  );
}
