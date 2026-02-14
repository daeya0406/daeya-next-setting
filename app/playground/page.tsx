"use client";

import { useState } from "react";
import { useModalStore } from "@/shared/store/useModalStore";
import { toast } from "@/shared/ui/Toast";

import { Select } from "@/shared/ui/Select";
import { Card } from "@/shared/ui/Card";
import { Button } from "@/shared/ui/Button";
import { SearchBox } from "@/shared/ui/SearchBox";
import { Tabs } from "@/shared/ui/Tabs";
import { Table, THeader, TBody, TRow, TCell } from "@/shared/ui/Table";
import { Pagination } from "@/shared/ui/Pagination";
import { Title } from "@/shared/ui/Title";
import { Checkbox } from "@/shared/ui/Checkbox";
import { RadioItem, RadioGroup } from "@/shared/ui/Radio";
import { Textarea } from "@/shared/ui/Textarea";
import { Toggle } from "@/shared/ui/Toggle";
import { EmptyState } from "@/shared/ui/EmptyState";
import {
  Dropdown,
  DropdownItem,
  DropdownSeparator,
} from "@/shared/ui/Dropdown";

export default function UIPlayground() {
  const { openModal } = useModalStore();

  // 테스트용 상태값
  const [selectValue, setSelectValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="p-10 space-y-12 bg-gray-50 min-h-screen">
      <Title.Header
        title="Playground"
        description="통합 컴포넌트 시스템 테스트"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 1. Form Elements */}
        <div className="space-y-6">
          <Title.Section color="blue">Form Elements</Title.Section>
          <Card size="md" className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Checkbox & Radio */}
              <div className="space-y-4">
                <Title.Label>Selection</Title.Label>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3">
                    <Checkbox id="c1" label="필수 약관 동의" required />
                    <Checkbox id="c2" label="마케팅 정보 수신 (선택)" />
                  </div>
                  <RadioGroup
                    defaultValue="A"
                    onValueChange={(value) => console.log(value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center">
                      <RadioItem value="A" id="r1" label="옵션 A (기본)" />
                    </div>
                    <div className="flex items-center">
                      <RadioItem value="B" id="r2" label="옵션 B" />
                    </div>
                    <div className="flex items-center">
                      <RadioItem value="C" id="r3" label="옵션 C" />
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Toggle */}
              <div className="space-y-4">
                <Title.Label>Switch</Title.Label>
                <div className="flex items-center gap-3">
                  <Toggle checked={isToggled} onCheckedChange={setIsToggled} />
                  <span className="text-sm text-gray-500">
                    {isToggled ? "On" : "Off"}
                  </span>
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div className="space-y-3">
              <Title.Label>Detailed Description</Title.Label>
              <Textarea placeholder="내용을 입력해 주세요..." rows={4} />
            </div>

            <Title.Label>Toasts</Title.Label>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                className="bg-green-700"
                onClick={() => toast.success("성공적으로 저장되었습니다!")}
              >
                Success Toast
              </Button>

              <Button
                size="sm"
                className="bg-red-700"
                onClick={() =>
                  toast.error("데이터를 불러오지 못했습니다.", {
                    description: "네트워크 연결 상태를 확인해주세요.",
                  })
                }
              >
                Error Toast
              </Button>

              <Button
                size="sm"
                className="bg-yellow-600"
                onClick={() =>
                  toast.warning("주의가 필요합니다.", {
                    description: "이 작업은 되돌릴 수 없습니다.",
                  })
                }
              >
                Warning Toast
              </Button>

              <Button
                size="sm"
                className="bg-blue-500"
                onClick={() => toast.info("새로운 공지사항이 있습니다.")}
              >
                Info Toast
              </Button>
            </div>
          </Card>
        </div>

        {/* 2. Interactive Menus & Modal */}
        <div className="space-y-6">
          <Title.Section color="amber">Interactive & Modal</Title.Section>
          <Card size="md" className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Title.Label>Dropdown</Title.Label>
                <Dropdown
                  trigger={
                    <Button variant="outline" size="sm" className="w-full">
                      옵션
                    </Button>
                  }
                >
                  <DropdownItem onClick={() => alert("수정")}>
                    수정하기
                  </DropdownItem>
                  <DropdownItem onClick={() => alert("복제")}>
                    복제하기
                  </DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem
                    onClick={() => alert("삭제")}
                    className="text-red-500"
                  >
                    삭제하기
                  </DropdownItem>
                </Dropdown>
              </div>
              <div className="space-y-3">
                <Title.Label>Modal</Title.Label>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => openModal("profile", { name: "사용자" })}
                >
                  Open Modal
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <Title.Label required>Select Box</Title.Label>
              <Select
                placeholder="지역 선택"
                value={selectValue}
                onValueChange={setSelectValue}
              >
                <Select.Item value="seoul">서울특별시 🇰🇷</Select.Item>
                <Select.Item value="tokyo">도쿄 🇯🇵</Select.Item>
              </Select>
            </div>

            <div className="space-y-3">
              <Title.Label>Search</Title.Label>
              <SearchBox
                placeholder="엔터로 검색"
                onSubmit={() => toast.success("버튼 없는 검색창 검색됨")}
              />
              <SearchBox
                hasButton
                buttonText="버튼으로 찾기"
                placeholder="입력 후 클릭 or 엔터"
                onSubmit={() => toast.success("버튼 있는 검색창 검색됨")}
              />
            </div>
          </Card>
        </div>
      </div>

      {/* 3. Navigation & List */}
      <div className="space-y-6">
        <Title.Section color="green">Navigation & List</Title.Section>
        <Card size="md" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-50 pb-4">
            <Tabs
              variant="line"
              items={[
                {
                  id: "all",
                  label: "전체 목록",
                  content: (
                    <div className="mt-4 overflow-hidden rounded-lg border border-gray-100">
                      <Table>
                        <THeader>
                          <TRow>
                            <TCell isHeader>이름</TCell>
                            <TCell isHeader>분류</TCell>
                          </TRow>
                        </THeader>
                        <TBody>
                          <TRow>
                            <TCell>이름 1</TCell>
                            <TCell>분류 1</TCell>
                          </TRow>
                        </TBody>
                      </Table>
                      <Pagination
                        totalCount={120}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                      />
                    </div>
                  ),
                },
                {
                  id: "empty",
                  label: "데이터 없음",
                  content: (
                    <div className="mt-4">
                      <EmptyState
                        title="검색 결과가 없습니다"
                        description="다른 검색어나 필터를 사용해 보세요."
                      />
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </Card>
      </div>

      <footer className="py-10 text-center border-t border-gray-100 text-xs text-gray-400 font-mono">
        DESIGN SYSTEM V1.3 • ALL COMPONENTS INTEGRATED
      </footer>
    </div>
  );
}
