/* ── Shopify Buy SDK type definitions ── */

/* shopify-buy is untyped — use a .d.ts approach */
export interface ShopifyConfig {
  domain: string;
  storefrontAccessToken: string;
  apiVersion?: string;
}

export interface ShopifyImage {
  id: string;
  src: string;
  altText: string | null;
}

export interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: ShopifyPrice;
  available: boolean;
  image: ShopifyImage;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  descriptionHtml: string;
  images: ShopifyImage[];
  variants: ShopifyVariant[];
}

export interface ShopifyLineItem {
  id: string;
  title: string;
  quantity: number;
  variant: ShopifyVariant;
}

export interface ShopifyCheckout {
  id: string;
  webUrl: string;
  lineItems: ShopifyLineItem[];
  subtotalPrice: ShopifyPrice;
  totalPrice: ShopifyPrice;
}

export interface ShopifyLineItemInput {
  variantId: string;
  quantity: number;
}

export type SelectedPackage = 'standard' | 'pro';
export type Connectivity = 'wifi' | 'esim';

export interface ShopifyState {
  product: ShopifyProduct | null;
  checkout: ShopifyCheckout | null;
  loading: boolean;
  error: string | null;
  adding: boolean;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
}
