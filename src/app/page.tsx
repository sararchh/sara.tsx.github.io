"use client";
import { NavgarComponent } from "@/components/molecules/navgar/navgar.component";

export default function Home() {
  return (
    <main className="w-full h-full">
      <NavgarComponent />

      <section id="about" className="p-4 mt-16 min-h-[700px]">
        <h1>About</h1>
      </section>
      <section id="work" className="p-4 min-h-[700px] bg-[var(--color-white)]">
        <h1>work</h1>
      </section>
      <section id="contact" className="p-4 min-h-[700px]">
        <h1>contact</h1>
      </section>
    </main>
  );
}
