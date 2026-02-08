import { useQuery } from "@/shared/hooks/useQuery";
import { apiClient } from "@/shared/api/client";

interface Pokemon {
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}

export const usePokemon = (name: string) => {
  return useQuery<Pokemon>({
    queryKey: ["pokemon", name],
    queryFn: () => apiClient.get<Pokemon>(`/pokemon/${name}`),
  });
};
