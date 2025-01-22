"use client";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";

const localeLabels = {
  "en-us": "EN",
  hr: "HR",
};

export function Header({ locales = [], navigation, settings }) {
  const [isActive, setIsActive] = useState(false);
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // show on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${isActive ? " h-[85] lg:h-[95px] shadow-lg" : "h-[70px] lg:h-[80px]"} bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex items-center justify-between h-full pl-[50px] pr-[60px]">
        <PrismicNextLink href="/">
          <span className="sr-only">Go to homepage</span>
          {prismic.isFilled.image(settings.data.logo) && (
            <>
              <PrismicNextImage
                field={settings.data.logo}
                alt="logo"
                width={130}
                height={70}
              />
            </>
          )}
        </PrismicNextLink>
        {/* desktop nav */}
        <nav className="hidden xl:flex  flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
          <ul className="gap-x-[58px]">
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="transition duration-300 link hover:border-b-[3px] hover:border-dark font-primary uppercase font-semibold tracking-widest "
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <span aria-hidden={true}>🌐</span>
            <ul className="flex flex-wrap gap-3">
              {locales.map((locale) => (
                <li key={locale.lang} className="first:font-semibold">
                  <PrismicNextLink
                    href={locale.url}
                    locale={locale.lang}
                    aria-label={`Change language to ${locale.lang_name}`}
                  >
                    {localeLabels[locale.lang] || locale.lang}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* mobile nav */}
        {/* mobile nav button */}
        <div className="absolute xl:hidden right-[5%] bg-ink text-white p-1 rounded-md cursor-pointer">
          <TiThMenu
            onClick={() => setMobileNav(!mobileNav)}
            className="text-3xl"
          />
        </div>
        <div
          className={`${mobileNav ? "max-h-full" : "max-h-0"} ${isActive ? "top-[85px] lg:top-[95px]" : "top-[70px] lg:top-[80px]"} fixed left-0 w-full h-full transition-all duration-500 bg-white -z-10`}
        >
          <nav className="flex flex-col w-full h-full overflow-hidden justify-evenly">
            <ul className="flex flex-col items-center justify-center py-6 mb-8 gap-y-6">
              {navigation.data?.links.map((item) => (
                <li
                  key={prismic.asText(item.label)}
                  className="text-2xl uppercase font-primary"
                >
                  <PrismicNextLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
