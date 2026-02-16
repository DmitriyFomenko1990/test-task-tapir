import type { Product, ProductsResponse } from '~/types/product'

const DEFAULT_LIMIT = 12

export function useProducts() {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase as string

  const {
    data: initialData,
    error: initialError,
    status,
    refresh: refreshInitial,
  } = useFetch<ProductsResponse>(`${baseURL}/products`, {
    query: { page: 1, limit: DEFAULT_LIMIT },
    key: 'catalog-products-initial',
    server: true,
  })

  const products = ref<Product[]>([])
  const currentPage = ref(0)
  const totalPages = ref(0)
  const isLoadingMore = ref(false)
  const loadMoreError = ref<Error | null>(null)

  watch(
    initialData,
    (v) => {
      if (v?.products) {
        products.value = [...v.products]
        currentPage.value = v.currentPage
        totalPages.value = v.totalPages
      }
    },
    { immediate: true }
  )

  const hasNextPage = computed(() => currentPage.value < totalPages.value)

  async function fetchNextPage() {
    if (!hasNextPage.value || isLoadingMore.value) return
    isLoadingMore.value = true
    loadMoreError.value = null
    const nextPage = currentPage.value + 1
    try {
      const res = await $fetch<ProductsResponse>(`${baseURL}/products`, {
        query: { page: nextPage, limit: DEFAULT_LIMIT },
      })
      products.value = [...products.value, ...res.products]
      currentPage.value = res.currentPage
    } catch (e) {
      loadMoreError.value = e as Error
    } finally {
      isLoadingMore.value = false
    }
  }

  async function retry() {
    loadMoreError.value = null
    await refreshInitial()
  }

  return {
    products,
    currentPage,
    totalPages,
    hasNextPage,
    error: initialError,
    status,
    refresh: retry,
    fetchNextPage,
    isLoadingMore,
    loadMoreError,
  }
}
