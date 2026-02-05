"use client";

import React, { useState } from "react";
import { Select } from "@/shared/ui/Select";
import { Card } from "@/shared/ui/Card";
import { Modal } from "@/shared/ui/Modal";
import { Popover } from "@/shared/ui/Popover";

export default function UIPlayground() {
  const [value, setValue] = useState("");

  return (
    <div className="p-10 space-y-12 bg-[#fafafa] min-h-screen">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Playground
        </h1>
        <p className="text-gray-500 text-lg">기본 컴포넌트 테스트</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 1. Modal 테스트 섹션 */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="w-1.5 h-6 bg-purple-500 rounded-full" />
            Modal (Dialog)
          </h2>
          <Card
            size="md"
            className="flex flex-col items-center justify-center py-12"
          >
            <Modal>
              <Modal.Trigger className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                프로필 수정하기
              </Modal.Trigger>
              <Modal.Content>
                <Modal.Header>
                  <Modal.Title>프로필 정보 수정</Modal.Title>
                  <Modal.Description>
                    변경사항을 입력한 후 저장 버튼을 눌러주세요.
                  </Modal.Description>
                </Modal.Header>

                <div className="py-4 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">이름</label>
                    <input
                      className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">권한 설정</label>
                    <Select placeholder="권한을 선택하세요">
                      <Select.Item value="admin">Admin</Select.Item>
                      <Select.Item value="user">User</Select.Item>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button className="px-4 py-2 text-sm font-medium border rounded-lg hover:bg-gray-50">
                    취소
                  </button>
                  <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    변경사항 저장
                  </button>
                </div>
              </Modal.Content>
            </Modal>
            <p className="mt-4 text-xs text-gray-400">
              Modal 내부에 Select를 넣어 중첩 UI도 테스트 가능합니다.
            </p>
          </Card>
        </div>

        {/* 2. Popover & Select 테스트 섹션 */}
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
