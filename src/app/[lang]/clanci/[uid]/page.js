import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import Article from "@/components/Article";

import { Layout } from "@/components/Layout";
import { components } from "@/slices";
import SmallHero from "@/components/SmallHero";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params: { uid, lang } }) {
  const client = createClient();
  const page = await client.getByUID("article", uid, { lang });

  return {
    title: prismic.asText(page.data.title),
  };
}

export default async function Page({ params: { uid, lang } }) {
  const client = createClient();

  const page = await client.getByUID("article", uid, { lang });
  const navigation = await client.getSingle("navigation", { lang });
  const settings = await client.getSingle("settings", { lang });

  const locales = await getLocales(page, client);

  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <SmallHero heading={page.data.heading} image={page.data.image} />
      <Article content={page.data.content} />
      <SliceZone
        slices={page.data.body}
        components={components}
        context={lang}
      />
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("article", {
    lang: "*",
  });

  return pages.map((article) => {
    return {
      uid: article.uid,
      lang: article.lang,
    };
  });
}
