"use client";

import { useState } from "react";
import { Select } from "@/shared/ui/Select";
import { Card } from "@/shared/ui/Card";
import { useModalStore } from "@/shared/store/useModalStore";
import { Popover } from "@/shared/ui/Popover";
import { Button } from "@/shared/ui/Button";

export default function UIPlayground() {
  const [value, setValue] = useState("");
  const { openModal } = useModalStore();

  return (
    <div className="p-10 space-y-12 bg-[#fafafa] min-h-screen">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Playground
        </h1>
        <p className="text-gray-500 text-lg">기본 컴포넌트 테스트</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Modal 테스트 섹션 */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="w-1.5 h-6 bg-purple-500 rounded-full" />
            Global Controlled Modal
          </h2>
          <Card
            size="md"
            className="flex flex-col items-center justify-center py-12"
          >
            <Button
              onClick={() => openModal("profile", { name: "사용자 이름" })}
            >
              프로필 수정 (이중 모달 테스트)
            </Button>

            <p className="mt-4 text-xs text-gray-400 text-center">
              Zustand 스토어를 통해 호출
            </p>
          </Card>
        </div>

        {/* Popover & Select 테스트 섹션 */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
            Popover & Select
          </h2>
          <Card size="md" className="space-y-8">
            {/* Popover */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                상세 설정 (Popover)
              </label>
              <div>
                <Popover>
                  <Popover.Trigger className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-2">
                    필터 설정 <span className="text-xs opacity-50">▼</span>
                  </Popover.Trigger>
                  <Popover.Content align="start" className="w-64">
                    <div className="space-y-4">
                      <p className="font-semibold text-sm">데이터 필터</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>최근 7일 데이터 포함</span>
                          <div className="w-8 h-4 bg-blue-500 rounded-full" />
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span>비공개 항목 제외</span>
                          <div className="w-8 h-4 bg-gray-200 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </Popover.Content>
                </Popover>
              </div>
            </div>

            {/* Select */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                기본 선택 (Select)
              </label>
              <Select
                placeholder="도시를 선택하세요"
                value={value}
                onValueChange={setValue}
              >
                <Select.Item value="seoul">서울특별시 🇰🇷</Select.Item>
                <Select.Item value="tokyo">도쿄 🇯🇵</Select.Item>
                <Select.Item value="newyork">뉴욕 🇺🇸</Select.Item>
              </Select>
            </div>
          </Card>
        </div>
      </div>

      {/* 바닥 확인용 */}
      <footer className="py-10 text-center border-t border-gray-100">
        <p className="text-sm text-gray-400 font-mono italic">
          Design System v1.0 - All Core Layers (Select, Modal, Popover) are
          Ready.
        </p>
      </footer>
    </div>
  );
}
