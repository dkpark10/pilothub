import axios, { AxiosRequestConfig } from "axios";
import { ref, Ref } from "vue";

type Return<T> = [Ref<T | undefined>, Ref<boolean>, Ref<boolean>];

export const useFetch = <T>(
  url: string,
  option?: AxiosRequestConfig
): Return<T> => {
  const data = ref<T>();
  const loading = ref(true);
  const error = ref(false);

  const fetch = async () => {
    try {
      const response = await axios.get<T>(url);
      data.value = response.data;
      loading.value = false;
    } catch (e) {
      error.value = true;
    }
  };

  fetch();

  return [data, loading, error];
};
