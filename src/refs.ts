// https://logaretm.com/blog/caching-vue-refs/
import { ref, watch } from 'vue';
const isBrowser = typeof window !== 'undefined';

export function useStoredRef(def: any, key: string) {
  const innerRef = ref(def); // initialize a ref with the default value

  // this lets this work when using SSR
  if (isBrowser) {
    const cachedValue = localStorage.getItem(key);
    if (cachedValue) {
      // if there is a cached value, deserialize it and assign it to the ref
      innerRef.value = JSON.parse(cachedValue);
    }

    watch(
      innerRef,
      (newVal: any) => {
        // Serialize the new value and store it in local storage
        localStorage.setItem(key, JSON.stringify(newVal));
      },
      {
        deep: true,
      }
    );
  }

  return innerRef;
}
