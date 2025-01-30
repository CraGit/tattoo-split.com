import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";

import { Layout } from "@/components/Layout";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params: { uid, lang } }) {
  const client = createClient();
  const page = await client.getByUID("page", uid, { lang });
  const settings = await client.getSingle("settings");
  
  // Safely handle meta_title which might be a string or rich text field
  let title = null;
  if (page.data.meta_title) {
    if (typeof page.data.meta_title === 'string') {
      title = page.data.meta_title;
    } else if (Array.isArray(page.data.meta_title)) {
      title = prismic.asText(page.data.meta_title);
    }
  }

  // Safely handle site title
  let siteTitle = 'Tattoo Split';
  if (settings.data.siteTitle) {
    if (typeof settings.data.siteTitle === 'string') {
      siteTitle = settings.data.siteTitle;
    } else if (Array.isArray(settings.data.siteTitle)) {
      siteTitle = prismic.asText(settings.data.siteTitle);
    }
  }

  // Safely handle description
  let description = null;
  if (page.data.meta_description) {
    if (typeof page.data.meta_description === 'string') {
      description = page.data.meta_description;
    } else if (Array.isArray(page.data.meta_description)) {
      description = prismic.asText(page.data.meta_description);
    }
  }

  return {
    title: title || siteTitle,
    description: description,
    openGraph: {
      title: title || siteTitle,
    },
  };
}

export default async function Page({ params: { uid, lang } }) {
  const client = createClient();

  const page = await client.getByUID("page", uid, { lang });
  const navigation = await client.getSingle("navigation", { lang });
  const settings = await client.getSingle("settings", { lang });

  const locales = await getLocales(page, client);

  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <SliceZone slices={page.data.slices} components={components} context={{ lang }} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page", {
    lang: "*",
    filters: [prismic.filter.not("my.page.uid", "home")],
  });

  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}
