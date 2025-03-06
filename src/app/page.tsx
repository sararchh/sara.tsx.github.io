"use client";
import { Thumb } from "@/components/atoms/thumb/thumb.component";
import { NavgarComponent } from "@/components/molecules/navgar/navgar.component";
import { ConfigApp } from "@/config/app.config";

import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const { t, lang } = useTranslation("common");

  return (
    <main className="w-full h-full">
      <NavgarComponent />

      <section
        id="about"
        className="p-4 lg:mt-0 md:mt-16 sm:mt-16 min-h-[700px] flex items-center justify-center flex-col gap-10"
      >
        <Thumb
          url="https://avatars.githubusercontent.com/u/54782452?v=4"
          width={300}
          height={300}
          className="rounded-full"
        />
        <p className="text-center w-3/4">{t("about.value")}</p>
      </section>

      <section
        id="work"
        className="p-4 min-h-[400px] bg-[var(--color-white)] flex items-center justify-center flex-col gap-10"
      >
        <h1> {t("work.title")}</h1>
        <p className="text-center w-3/4"> {t("work.value")}</p>
      </section>

      <section
        id="contact"
        className="p-4 min-h-[400px] flex items-center justify-center flex-col gap-10"
      >
        <h1>{t("contact.title")}</h1>
        <p className="text-center w-3/4">{t("contact.value")}</p>

        <div className="flex items-center gap-4">
          <Link href={`mailto:${ConfigApp.emailContact}`}>
            <MdEmail fontSize={40} />
          </Link>

          <Link href={ConfigApp.linkedin} target="_blank">
            <FaLinkedin fontSize={33} />
          </Link>
        </div>
      </section>
    </main>
  );
}
