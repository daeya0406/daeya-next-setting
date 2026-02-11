# 🚀 Daeya Next.js 프로젝트 세팅 가이드 (Daeya Starter)

이 프로젝트는 프로덕션 레벨의 애플리케이션 개발을 위한 고성능 보일러플레이트입니다. 상황에 따라 불필요한 패키지를 제거하여 가볍게 유지할 수 있습니다.

## 📋 목차

- [주요 기능](#주요-기능)
- [시작하기](#시작하기)
- [프로젝트 최적화 (선택 삭제)](#-프로젝트-최적화-선택-삭제)
- [프로젝트 구조](#프로젝트-구조)
- [개발 가이드](#개발-가이드)
- [Demo](#Demo)
- [배포](#배포)

---

## ✨ 주요 기능

### 1. 환경 변수 및 타입 시스템

- ✅ `lib/env.ts` - 타입 안전한 환경 변수 접근
- ✅ `shared/types/` - 중앙화된 타입 정의 (common, api, domain)
- ✅ TypeScript strict 모드 및 최적화된 `tsconfig`

### 2. 에러 및 로딩 처리

- ✅ `app/error.tsx` & `global-error.tsx` - 계층별 에러 바운더리
- ✅ `shared/ui/Loading` & `Spinner` - 상황별 로딩 컴포넌트 분리

### 3. API 레이어 & 상태 관리

- ✅ **TanStack Query (v5)** - 서버 상태 관리 및 캐싱
- ✅ **Zustand** - 가벼운 전역 클라이언트 상태 관리
- ✅ `shared/api/client.ts` - 타입 안전한 Axios/Fetch 래퍼

### 4. UI 및 개발 도구

- ✅ **Tailwind CSS v4** - 최신 스타일 시스템
- ✅ **Lucide React** - 일관된 아이콘 시스템
- ✅ **Husky & lint-staged** - 커밋 전 코드 품질 검증 (ESLint/Prettier)

---

## 🚀 시작하기

### 환경 변수 설정

```bash
# .env.example을 복사하여 .env.local 생성
cp .env.example .env.local
```

### 의존성 설치 및 실행

```bash
pnpm install
pnpm dev
```

---

## 📦 프로젝트 최적화 (선택 삭제)

모든 프로젝트가 모든 라이브러리를 필요로 하지는 않습니다. 이번 프로젝트의 성격에 따라 아래 명령어를 사용하여 프로젝트를 가볍게 만드세요.

### 1. Radix UI (Headless UI)를 쓰지 않을 때

커스텀 컴포넌트 위주로 구성하거나 직접 구현한다면 삭제하세요.

```bash
pnpm remove @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-radio-group @radix-ui/react-select @radix-ui/react-slot @radix-ui/react-tabs
```

### 2. 폼(Form) 처리가 거의 없을 때

단순 조회 위주의 페이지라면 삭제하세요.

```bash
pnpm remove react-hook-form zod @hookform/resolvers
```

### 3. 서버 상태 관리가 필요 없을 때

간단한 프로젝트라 `fetch`만으로 충분하다면 삭제하세요.

```bash
pnpm remove @tanstack/react-query @tanstack/react-query-devtools
```

---

## 📁 프로젝트 구조

```bash
.
├── app/                  # Next.js App Router (Page, Layout, Error)
├── features/             # 도메인별 복합 컴포넌트 (모달, 특정 기능 단위)
├── lib/                  # 라이브러리 설정 (env, queryClient, utils)
├── shared/               # 공유 리소스
│   ├── api/              # API 클라이언트 및 커스텀 훅
│   ├── hooks/            # 공통 React 훅
│   ├── store/            # Zustand 스토어
│   ├── types/            # TypeScript 정의 (api.ts, common.ts 등)
│   ├── ui/               # 원자 단위 UI (Button, Checkbox, Loading 등)
│   └── utils/            # 순수 자바스크립트 유틸리티
├── public/               # 정적 파일 (Images, Favicon)
└── __tests__/            # Vitest/Testing Library 테스트 파일
```

---

## 🛠 개발 가이드

- **컴포넌트 생성**: `shared/ui` 하위에 폴더를 생성하고 `index.ts`에서 내보냅니다.
- **스타일링**: `tailwind-variants`를 활용하여 복잡한 상태별 스타일을 관리합니다.
- **환경 변수**: `lib/env.ts`를 통해 타입 안전하게 접근합니다.

**Tip:** 이 세팅은 디자인과 개발의 간극을 줄이기 위해 설계되었습니다. 시각적 계층 구조가 깨지지 않도록 `Section`과 `Title`의 레벨을 준수해주세요.

### API 호출 (React Query)

```typescript
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/shared/api/client";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => apiClient.get("/users"),
  });
};
```

#### **Title (타이포그래피 위계)**

상황에 맞는 타이틀 컴포넌트를 사용하여 일관된 UI를 유지합니다.

- `Title.Header`: 페이지 최상단 제목 및 설명
- `Title.Section`: 구역(Section)을 나누는 유색 포인트 제목
- `Title.Label`: 입력 폼이나 상세 항목의 라벨 (required 옵션 지원)

```typescript
// 페이지 헤더
<Title.Header title="사용자 관리" description="시스템 사용자를 관리합니다." />

// 섹션 구분
<Title.Section color="blue">기본 정보 설정</Title.Section>

// 폼 라벨
<Title.Label required>이메일 주소</Title.Label>
<Input placeholder="example@email.com" />
```

#### **Section (구조적 계층)**

페이지의 가장 큰 단위의 구역을 나눌 때 사용하며, `level` 프롭을 통해 시각적 깊이를 조절합니다. Compound Component 패턴으로 작성되어 구조가 명확합니다.

- `Section`: 전체 컨테이너 (level 1~3 지원)
- `Section.Header`: 제목과 우측 액션 버튼 등을 포함하는 영역
- `Section.Title`: 해당 구역의 제목 (`h3` 기반)
- `Section.Content`: 실제 콘텐츠가 들어가는 영역

```typescript
import { Section } from "@/shared/ui/Section";

<Section level={1}>
  <Section.Header>
    <Section.Title>대시보드 통계</Section.Title>
    <Button size="sm">새로고침</Button>
  </Section.Header>

  <Section.Content>
    {/* 카드나 테이블 등 콘텐츠 배치 */}
    <div className="grid grid-cols-3 gap-4">
      <Card>통계 1</Card>
      <Card>통계 2</Card>
      <Card>통계 3</Card>
    </div>
  </Section.Content>
</Section>
```

#### **Card (컨테이너)**

콘텐츠를 그룹화하고 독립된 영역을 생성할 때 사용합니다. `size` 프롭을 통해 내부 패딩을 조절합니다.

```typescript
<Card size="md" className="space-y-6">
  <Title.Label>카드 내부 콘텐츠</Title.Label>
  <div className="text-sm text-gray-500">
    이 영역은 Card 컴포넌트로 감싸져 있어 시각적으로 분리됩니다.
  </div>
</Card>
```

#### Toast 알림 (Sonner)

```typescript
import { toast } from "@/shared/ui/Toast";

toast.success("성공적으로 저장되었습니다.");
toast.error("오류가 발생했습니다.");
```

#### **Modal (Zustand 기반)**

전역 스토어를 통해 어디서든 모달을 제어합니다.

```typescript
const { openModal } = useModalStore();

<Button onClick={() => openModal("profile", { id: 123 })}>
  프로필 보기
</Button>
```

#### **Dropdown & Select**

Radix UI 기반의 고성능 선택 도구입니다.

```typescript
// Dropdown: 버튼 클릭 시 나타나는 메뉴
<Dropdown trigger={<Button>설정</Button>}>
  <DropdownItem onClick={handleEdit}>수정</DropdownItem>
  <DropdownSeparator />
  <DropdownItem className="text-red-500">삭제</DropdownItem>
</Dropdown>

// Select: 폼 선택 도구
<Select value={value} onValueChange={setValue}>
  <Select.Item value="A">옵션 A</Select.Item>
  <Select.Item value="B">옵션 B</Select.Item>
</Select>
```

---

## 🧪 테스트 및 품질 관리

```bash
pnpm run lint       # 코드 린트 검사
pnpm run type-check # 타입 체킹
pnpm run test       # 유닛 테스트 실행
```

## 🔗 Demo

세팅이 올바르게 완료되었는지 아래 페이지들을 통해 확인하세요.

- **`/playground`**: 모든 UI 컴포넌트(Title, Section, Card, Form 등)의 실제 동작과 레이아웃을 확인하고 코드를 복사할 수 있습니다.
- **`/api` (구 /pokemon)**: TanStack Query와 API 클라이언트가 서버 데이터(포켓몬 API 등)를 어떻게 가져오고 캐싱하는지 확인하는 예제입니다.
- **`/login`**: `react-hook-form`과 `zod`를 활용한 유효성 검사 및 폼 처리 예제를 확인할 수 있습니다.

## 📦 배포

Vercel을 통한 배포를 권장하며, 배포 전 `pnpm build`를 통해 빌드 에러가 없는지 확인하세요.

---

**기여 가이드:** 새로운 공통 UI를 만들면 `shared/ui`에 추가하고 `index.ts`에서 export 하세요.
