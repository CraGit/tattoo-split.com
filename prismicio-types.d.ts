// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArticleDocumentDataSlicesSlice = never;

/**
 * Content for Article documents
 */
interface ArticleDocumentData {
  /**
   * Heading field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Content field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Slice Zone field in *Article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice> /**
   * Meta Title field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.TitleField;

  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ArticleListSliceSlice
  | TeamSectionSliceSlice
  | AboutTwoSectionSliceSlice
  | SmallHeroSliceSlice
  | ContactSliceSlice
  | QuoteSliceSlice
  | TestimonialsSliceSlice
  | GallerySliceSlice
  | AboutUsSliceSlice
  | HeroSliceSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  siteTitle: prismic.TitleField;

  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | ArticleDocument
  | NavigationDocument
  | PageDocument
  | SettingsDocument;

/**
 * Item in *AboutTwoSectionSlice → Default → Primary → Services*
 */
export interface AboutTwoSectionSliceSliceDefaultPrimaryServicesItem {
  /**
   * Heading field in *AboutTwoSectionSlice → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_two_section_slice.default.primary.services[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content field in *AboutTwoSectionSlice → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_two_section_slice.default.primary.services[].content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Primary content in *AboutTwoSectionSlice → Default → Primary*
 */
export interface AboutTwoSectionSliceSliceDefaultPrimary {
  /**
   * Heading field in *AboutTwoSectionSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_two_section_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content field in *AboutTwoSectionSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_two_section_slice.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * Box1 Heading field in *AboutTwoSectionSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_two_section_slice.default.primary.box1_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  box1_heading: prismic.KeyTextField;

  /**
   * Box1 Content field in *AboutTwoSectionSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_two_section_slice.default.primary.box1_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  box1_content: prismic.KeyTextField;

  /**
   * Box2 Heading field in *AboutTwoSectionSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_two_section_slice.default.primary.box2_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  box2_heading: prismic.KeyTextField;

  /**
   * Box2 Content field in *AboutTwoSectionSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_two_section_slice.default.primary.box2_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  box2_content: prismic.KeyTextField;

  /**
   * Services field in *AboutTwoSectionSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about_two_section_slice.default.primary.services[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<
    Simplify<AboutTwoSectionSliceSliceDefaultPrimaryServicesItem>
  >;
}

/**
 * Default variation for AboutTwoSectionSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutTwoSectionSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutTwoSectionSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutTwoSectionSlice*
 */
type AboutTwoSectionSliceSliceVariation = AboutTwoSectionSliceSliceDefault;

/**
 * AboutTwoSectionSlice Shared Slice
 *
 * - **API ID**: `about_two_section_slice`
 * - **Description**: AboutTwoSectionSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutTwoSectionSliceSlice = prismic.SharedSlice<
  "about_two_section_slice",
  AboutTwoSectionSliceSliceVariation
>;

/**
 * Primary content in *AboutUsSlice → Default → Primary*
 */
export interface AboutUsSliceSliceDefaultPrimary {
  /**
   * Heading field in *AboutUsSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content field in *AboutUsSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_slice.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Image field in *AboutUsSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_slice.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Button Text field in *AboutUsSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_slice.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *AboutUsSlice → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_slice.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Default variation for AboutUsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutUsSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutUsSlice*
 */
type AboutUsSliceSliceVariation = AboutUsSliceSliceDefault;

/**
 * AboutUsSlice Shared Slice
 *
 * - **API ID**: `about_us_slice`
 * - **Description**: AboutUsSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSliceSlice = prismic.SharedSlice<
  "about_us_slice",
  AboutUsSliceSliceVariation
>;

/**
 * Default variation for ArticleListSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleListSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *ArticleListSlice*
 */
type ArticleListSliceSliceVariation = ArticleListSliceSliceDefault;

/**
 * ArticleListSlice Shared Slice
 *
 * - **API ID**: `article_list_slice`
 * - **Description**: ArticleListSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleListSliceSlice = prismic.SharedSlice<
  "article_list_slice",
  ArticleListSliceSliceVariation
>;

/**
 * Primary content in *ContactSlice → Default → Primary*
 */
export interface ContactSliceSliceDefaultPrimary {
  /**
   * Heading field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Company field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.company
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company: prismic.KeyTextField;

  /**
   * Address field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.address
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address: prismic.KeyTextField;

  /**
   * Phone field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.phone
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone: prismic.KeyTextField;

  /**
   * Email field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Link Text field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField;

  /**
   * Link field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Name Placeholder field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.name_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name_placeholder: prismic.KeyTextField;

  /**
   * Phone placeholder field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.phone_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_placeholder: prismic.KeyTextField;

  /**
   * Email Placeholder field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.email_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_placeholder: prismic.KeyTextField;

  /**
   * Message Placeholder field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.message_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  message_placeholder: prismic.KeyTextField;

  /**
   * Button Text field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Default variation for ContactSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactSlice*
 */
type ContactSliceSliceVariation = ContactSliceSliceDefault;

/**
 * ContactSlice Shared Slice
 *
 * - **API ID**: `contact_slice`
 * - **Description**: ContactSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceSlice = prismic.SharedSlice<
  "contact_slice",
  ContactSliceSliceVariation
>;

/**
 * Item in *GallerySlice → Default → Primary → Gallery*
 */
export interface GallerySliceSliceDefaultPrimaryGalleryItem {
  /**
   * Image field in *GallerySlice → Default → Primary → Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery_slice.default.primary.gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *GallerySlice → Default → Primary*
 */
export interface GallerySliceSliceDefaultPrimary {
  /**
   * Heading field in *GallerySlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Gallery field in *GallerySlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery_slice.default.primary.gallery[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  gallery: prismic.GroupField<
    Simplify<GallerySliceSliceDefaultPrimaryGalleryItem>
  >;

  /**
   * Button Text field in *GallerySlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery_slice.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *GallerySlice → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery_slice.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Default variation for GallerySlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GallerySliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *GallerySlice*
 */
type GallerySliceSliceVariation = GallerySliceSliceDefault;

/**
 * GallerySlice Shared Slice
 *
 * - **API ID**: `gallery_slice`
 * - **Description**: GallerySlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceSlice = prismic.SharedSlice<
  "gallery_slice",
  GallerySliceSliceVariation
>;

/**
 * Primary content in *HeroSlice → Default → Primary*
 */
export interface HeroSliceSliceDefaultPrimary {
  /**
   * Heading field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Image field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Content field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * Button Label field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSlice*
 */
type HeroSliceSliceVariation = HeroSliceSliceDefault;

/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `hero_slice`
 * - **Description**: HeroSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSlice = prismic.SharedSlice<
  "hero_slice",
  HeroSliceSliceVariation
>;

/**
 * Primary content in *QuoteSlice → Default → Primary*
 */
export interface QuoteSliceSliceDefaultPrimary {
  /**
   * Heading field in *QuoteSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Image field in *QuoteSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: quote_slice.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for QuoteSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *QuoteSlice*
 */
type QuoteSliceSliceVariation = QuoteSliceSliceDefault;

/**
 * QuoteSlice Shared Slice
 *
 * - **API ID**: `quote_slice`
 * - **Description**: QuoteSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceSlice = prismic.SharedSlice<
  "quote_slice",
  QuoteSliceSliceVariation
>;

/**
 * Primary content in *SmallHeroSlice → Default → Primary*
 */
export interface SmallHeroSliceSliceDefaultPrimary {
  /**
   * Heading field in *SmallHeroSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: small_hero_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Image field in *SmallHeroSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: small_hero_slice.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for SmallHeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SmallHeroSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SmallHeroSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SmallHeroSlice*
 */
type SmallHeroSliceSliceVariation = SmallHeroSliceSliceDefault;

/**
 * SmallHeroSlice Shared Slice
 *
 * - **API ID**: `small_hero_slice`
 * - **Description**: SmallHeroSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SmallHeroSliceSlice = prismic.SharedSlice<
  "small_hero_slice",
  SmallHeroSliceSliceVariation
>;

/**
 * Item in *TeamSectionSlice → Default → Primary → Members*
 */
export interface TeamSectionSliceSliceDefaultPrimaryMembersItem {
  /**
   * Image field in *TeamSectionSlice → Default → Primary → Members*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section_slice.default.primary.members[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Name field in *TeamSectionSlice → Default → Primary → Members*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section_slice.default.primary.members[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Position field in *TeamSectionSlice → Default → Primary → Members*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section_slice.default.primary.members[].position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  position: prismic.KeyTextField;
}

/**
 * Primary content in *TeamSectionSlice → Default → Primary*
 */
export interface TeamSectionSliceSliceDefaultPrimary {
  /**
   * Heading field in *TeamSectionSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Members field in *TeamSectionSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section_slice.default.primary.members[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  members: prismic.GroupField<
    Simplify<TeamSectionSliceSliceDefaultPrimaryMembersItem>
  >;
}

/**
 * Default variation for TeamSectionSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSectionSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamSectionSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TeamSectionSlice*
 */
type TeamSectionSliceSliceVariation = TeamSectionSliceSliceDefault;

/**
 * TeamSectionSlice Shared Slice
 *
 * - **API ID**: `team_section_slice`
 * - **Description**: TeamSectionSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSectionSliceSlice = prismic.SharedSlice<
  "team_section_slice",
  TeamSectionSliceSliceVariation
>;

/**
 * Item in *TestimonialsSlice → Default → Primary → Testimonials*
 */
export interface TestimonialsSliceSliceDefaultPrimaryTestimonialsItem {
  /**
   * Testimonial field in *TestimonialsSlice → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[].testimonial
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testimonial: prismic.KeyTextField;

  /**
   * Name field in *TestimonialsSlice → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Country field in *TestimonialsSlice → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[].country
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  country: prismic.KeyTextField;
}

/**
 * Primary content in *TestimonialsSlice → Default → Primary*
 */
export interface TestimonialsSliceSliceDefaultPrimary {
  /**
   * Testimonials field in *TestimonialsSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  testimonials: prismic.GroupField<
    Simplify<TestimonialsSliceSliceDefaultPrimaryTestimonialsItem>
  >;
}

/**
 * Default variation for TestimonialsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TestimonialsSlice*
 */
type TestimonialsSliceSliceVariation = TestimonialsSliceSliceDefault;

/**
 * TestimonialsSlice Shared Slice
 *
 * - **API ID**: `testimonials_slice`
 * - **Description**: TestimonialsSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceSlice = prismic.SharedSlice<
  "testimonials_slice",
  TestimonialsSliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArticleDocument,
      ArticleDocumentData,
      ArticleDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      AboutTwoSectionSliceSlice,
      AboutTwoSectionSliceSliceDefaultPrimaryServicesItem,
      AboutTwoSectionSliceSliceDefaultPrimary,
      AboutTwoSectionSliceSliceVariation,
      AboutTwoSectionSliceSliceDefault,
      AboutUsSliceSlice,
      AboutUsSliceSliceDefaultPrimary,
      AboutUsSliceSliceVariation,
      AboutUsSliceSliceDefault,
      ArticleListSliceSlice,
      ArticleListSliceSliceVariation,
      ArticleListSliceSliceDefault,
      ContactSliceSlice,
      ContactSliceSliceDefaultPrimary,
      ContactSliceSliceVariation,
      ContactSliceSliceDefault,
      GallerySliceSlice,
      GallerySliceSliceDefaultPrimaryGalleryItem,
      GallerySliceSliceDefaultPrimary,
      GallerySliceSliceVariation,
      GallerySliceSliceDefault,
      HeroSliceSlice,
      HeroSliceSliceDefaultPrimary,
      HeroSliceSliceVariation,
      HeroSliceSliceDefault,
      QuoteSliceSlice,
      QuoteSliceSliceDefaultPrimary,
      QuoteSliceSliceVariation,
      QuoteSliceSliceDefault,
      SmallHeroSliceSlice,
      SmallHeroSliceSliceDefaultPrimary,
      SmallHeroSliceSliceVariation,
      SmallHeroSliceSliceDefault,
      TeamSectionSliceSlice,
      TeamSectionSliceSliceDefaultPrimaryMembersItem,
      TeamSectionSliceSliceDefaultPrimary,
      TeamSectionSliceSliceVariation,
      TeamSectionSliceSliceDefault,
      TestimonialsSliceSlice,
      TestimonialsSliceSliceDefaultPrimaryTestimonialsItem,
      TestimonialsSliceSliceDefaultPrimary,
      TestimonialsSliceSliceVariation,
      TestimonialsSliceSliceDefault,
    };
  }
}
