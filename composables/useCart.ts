import { useCookie } from "#imports";
const SESS_KEY = "my-cart";

export function useCart() {
  const productCountMap = useCookie<Partial<Record<string, number>>>(SESS_KEY, {
    default() {
      return {};
    },
  });

  function addProduct(key: string) {
    if (productCountMap.value[key]) {
      // @ts-ignore
      productCountMap.value[key] += 1;
    } else {
      productCountMap.value[key] = 1;
    }
    console.log(productCountMap.value);
  }
  function removeProduct(key: string, all?: boolean) {
    if (all) {
      productCountMap.value[key] = undefined;
    } else {
      // @ts-ignore
      if (productCountMap.value[key] > 0) {
        // @ts-ignore
        productCountMap.value[key] -= 1;
      }
    }
    console.log(productCountMap.value);
  }

  return {
    productCountMap: productCountMap.value,
    addProduct,
    removeProduct,
  };
}
