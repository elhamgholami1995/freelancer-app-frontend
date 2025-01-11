import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { categories: rawCategories = [] } = data || {};
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const transFormedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));
  return { isLoading, categories, transFormedCategories };
}
