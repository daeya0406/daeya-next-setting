"use client";

import { useState } from "react";
import Image from "next/image";
import { usePokemon } from "@/shared/api/hooks/usePokemon";
import { defaultImageLoader } from "@/lib/image-loader";
import { Section } from "@/shared/ui/Section";
import { Button } from "@/shared/ui/Button";
import { LoadingOverlay } from "@/shared/ui/LoadingOverlay";
import { EmptyState } from "@/shared/ui/EmptyState";

export default function PokemonPage() {
  const [target, setTarget] = useState("pikachu");
  const { data: pokemon, isLoading, error, refetch } = usePokemon(target);

  if (isLoading) return <LoadingOverlay text="포켓몬 불러오는 중..." />;

  if (error || !pokemon) {
    return (
      <EmptyState
        title="포켓몬을 찾을 수 없어요"
        description="이름이 정확한지 확인해 주세요."
        action={{ label: "다시 시도", onClick: () => refetch() }}
      />
    );
  }

  return (
    <main className="p-8 space-y-6">
      <Section level={1}>
        <Section.Header>
          <Section.Title>포켓몬 검색기 (PokeAPI Test)</Section.Title>
          <Button size="sm" onClick={() => refetch()}>
            새로고침
          </Button>
        </Section.Header>

        <Section.Content className="flex flex-col items-center">
          <div className="relative w-48 h-48">
            <Image
              loader={defaultImageLoader}
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              fill // 부모 컨테이너에 맞춤
              className="object-contain"
              priority // 첫 화면 핵심 이미지이므로 우선 로딩
            />
          </div>

          <h2 className="text-3xl font-bold uppercase mt-4">{pokemon.name}</h2>

          <div className="flex gap-2 mt-4">
            {pokemon.types.map((t) => (
              <span
                key={t.type.name}
                className="px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-sm font-medium"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </Section.Content>
      </Section>

      <div className="flex flex-wrap gap-2 justify-center">
        <Button variant="outline" onClick={() => setTarget("bulbasaur")}>
          이상해씨
        </Button>
        <Button variant="outline" onClick={() => setTarget("charmander")}>
          파이리
        </Button>
        <Button variant="outline" onClick={() => setTarget("squirtle")}>
          꼬부기
        </Button>
        <Button variant="outline" onClick={() => setTarget("mewtwo")}>
          뮤츠
        </Button>
      </div>
    </main>
  );
}
