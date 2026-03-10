import { useState, useEffect, useCallback } from 'react';
import type { ShopifyState, ShopifyProduct, ShopifyCheckout } from '../types/shopify';

const SHOPIFY_DOMAIN = 'q03s28-1m.myshopify.com';
const STOREFRONT_TOKEN = 'a075ac5ee5aa28d25518e176bd475e4d';
const PRODUCT_GID = 'gid://shopify/Product/14924887982191';

// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
// @ts-ignore — shopify-buy has no type declarations
import ShopifyBuy from 'shopify-buy';

// Module-level singleton — created once, shared across renders
const client = ShopifyBuy.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: STOREFRONT_TOKEN,
});

export function useShopify(): ShopifyState {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [checkout, setCheckout] = useState<ShopifyCheckout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);

  /* Fetch product + create checkout on mount */
  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const [fetchedProduct, newCheckout] = await Promise.all([
          client.product.fetch(PRODUCT_GID),
          client.checkout.create(),
        ]);
        if (!cancelled) {
          setProduct(fetchedProduct as unknown as ShopifyProduct);
          setCheckout(newCheckout as unknown as ShopifyCheckout);
        }
      } catch (err) {
        if (!cancelled) {
          setError('Failed to load product data');
          console.error('[Shopify]', err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    init();
    return () => { cancelled = true; };
  }, []);

  /* Add variant to cart → redirect to Shopify checkout */
  const addToCart = useCallback(
    async (variantId: string, quantity = 1) => {
      if (!checkout) return;
      setAdding(true);
      try {
        const updatedCheckout = await client.checkout.addLineItems(checkout.id, [
          { variantId, quantity },
        ]);
        const typed = updatedCheckout as unknown as ShopifyCheckout;
        setCheckout(typed);
        // Redirect to Shopify hosted checkout
        window.location.href = typed.webUrl;
      } catch (err) {
        setError('Failed to add to cart');
        console.error('[Shopify]', err);
      } finally {
        setAdding(false);
      }
    },
    [checkout],
  );

  return { product, checkout, loading, error, adding, addToCart };
}
