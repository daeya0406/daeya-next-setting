"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icons";
import { Input } from "@/shared/ui/input";

export default function Playground() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="p-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">
          1. Button Variants & Colors
        </h2>
        <div className="flex flex-wrap gap-4 items-end">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <div data-theme="purple">
            <Button>Purple Theme</Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">
          2. Radius & Sizes
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button radius="sm" size="sm">
            Small & Sharp
          </Button>
          <Button radius="md" size="md">
            Medium (Default)
          </Button>
          <Button radius="lg" size="lg">
            Large & Round
          </Button>
          <Button radius="full" size="md">
            Full Radius
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">
          3. Icon Composition (자유 조립)
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button className="gap-2">
            <Icon name="check" size={16} />
            확인
          </Button>
          <Button
            variant="outline"
            className="gap-2 text-red-500 border-red-200"
          >
            <Icon name="trash" size={16} />
            삭제
          </Button>
          <Button size="icon" variant="secondary">
            <Icon name="pencil" size={20} />
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">
          4. Interaction & Loading
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            isLoading={isLoading}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 2000);
            }}
          >
            클릭해서 로딩 테스트 (2초)
          </Button>

          <Button disabled>Disabled State</Button>
        </div>
      </section>

      <section className="space-y-4 max-w-sm">
        <h2 className="text-xl font-semibold border-b pb-2">5. Input Fields</h2>

        {/* 기본 인풋 */}
        <Input label="이메일" placeholder="example@test.com" />

        {/* 아이콘 + 인풋 */}
        <Input
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
          leftSection={<Icon name="lock" size={16} />}
          rightSection={
            <Icon name="eye" size={16} className="cursor-pointer" />
          }
        />

        {/* 에러 상태 인풋 */}
        <Input
          label="닉네임"
          placeholder="홍길동"
          error="이미 사용 중인 닉네임입니다."
          leftSection={<Icon name="user" size={16} />}
        />

        {/* 비활성화 상태 */}
        <Input
          label="아이디"
          value="daeya_admin"
          disabled
          leftSection={<Icon name="user" size={16} />}
        />
      </section>
    </div>
  );
}
