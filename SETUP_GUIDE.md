# Next.js 프로젝트 세팅 가이드

이 프로젝트는 프로덕션 레벨의 Next.js 애플리케이션 개발을 위한 포괄적인 보일러플레이트입니다.

## 📋 목차

- [주요 기능](#주요-기능)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [개발 가이드](#개발-가이드)
- [배포](#배포)

## ✨ 주요 기능

### 1. 환경 변수 관리

- ✅ `.env.example` - 환경 변수 템플릿
- ✅ `lib/env.ts` - 타입 안전한 환경 변수 접근
- ✅ 개발/프로덕션 환경 분리

### 2. 타입 시스템

- ✅ `shared/types/` - 중앙화된 타입 정의
  - `common.ts` - 공통 타입 (API, 페이지네이션, 로딩 상태 등)
  - `api.ts` - API 관련 타입
  - `user.ts` - 사용자 도메인 타입
- ✅ TypeScript strict 모드 활성화

### 3. 에러 처리

- ✅ `app/error.tsx` - 에러 바운더리
- ✅ `app/global-error.tsx` - 전역 에러 처리
- ✅ `app/not-found.tsx` - 404 페이지
- ✅ `shared/utils/error-handler.ts` - 커스텀 에러 클래스

### 4. 개발 도구

- ✅ **Prettier** - 코드 포매팅
- ✅ **Husky** - Git hooks
- ✅ **lint-staged** - 커밋 전 자동 검사
- ✅ **ESLint** - 코드 품질 검사

### 5. 테스트 환경

- ✅ **Vitest** - 빠른 유닛 테스트
- ✅ **Testing Library** - React 컴포넌트 테스트
- ✅ `__tests__/` - 테스트 파일

### 6. API 레이어

- ✅ **React Query (TanStack Query)** - 서버 상태 관리
- ✅ `shared/api/client.ts` - 타입 안전한 API 클라이언트
- ✅ `shared/api/hooks/` - 재사용 가능한 API 훅
- ✅ 에러 처리 및 로깅 통합

### 7. UI 컴포넌트

- ✅ `shared/ui/Toast` - 토스트 알림 (Sonner)
- ✅ `shared/ui/Spinner` - 로딩 스피너
- ✅ `shared/ui/LoadingOverlay` - 전체 화면 로딩
- ✅ `shared/ui/EmptyState` - 빈 상태 표시
- ✅ `shared/ui/Skeleton` - 스켈레톤 로더
- ✅ 기존 컴포넌트: Button, Card, Input, Modal, Select 등

### 8. 성능 최적화

- ✅ Next.js 이미지 최적화 설정
- ✅ 폰트 최적화
- ✅ 번들 사이즈 최적화 (코드 스플리팅)
- ✅ 보안 헤더 설정

### 9. 코드 품질

- ✅ TypeScript strict 모드
- ✅ ESLint 규칙 강화
- ✅ Import 자동 정렬
- ✅ 자동 포매팅

## 🚀 시작하기

### 환경 변수 설정

```bash
# .env.example을 복사하여 .env.local 생성
cp .env.example .env.local

# 환경 변수 값 설정
# .env.local 파일을 열어 필요한 값들을 입력하세요
```

### 의존성 설치

```bash
npm install
# 또는
pnpm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인 가능합니다.

## 📁 프로젝트 구조

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── error.tsx          # 에러 바운더리
│   ├── global-error.tsx   # 전역 에러
│   ├── not-found.tsx      # 404 페이지
│   └── loading.tsx        # 로딩 상태
├── features/              # 기능별 모듈
│   └── modals/           # 모달 관련
├── lib/                   # 라이브러리 설정
│   ├── env.ts            # 환경 변수
│   ├── react-query.tsx   # React Query 설정
│   ├── utils.ts          # 유틸리티
│   └── image-loader.ts   # 이미지 로더
├── shared/                # 공유 리소스
│   ├── api/              # API 레이어
│   │   ├── client.ts    # API 클라이언트
│   │   └── hooks/       # API 훅
│   ├── fonts/            # 폰트 파일
│   ├── hooks/            # 공통 훅
│   ├── store/            # 상태 관리 (Zustand)
│   ├── types/            # 타입 정의
│   ├── ui/               # UI 컴포넌트
│   └── utils/            # 유틸리티
├── __tests__/            # 테스트 파일
├── .husky/               # Git hooks
├── .vscode/              # VS Code 설정
└── public/               # 정적 파일
```

## 🛠 개발 가이드

### 사용 가능한 스크립트

```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 실행
npm start

# 린트 검사
npm run lint

# 린트 자동 수정
npm run lint:fix

# 포매팅
npm run format

# 포매팅 검사
npm run format:check

# 타입 체크
npm run type-check

# 테스트 실행
npm run test

# 테스트 UI
npm run test:ui

# 테스트 커버리지
npm run test:coverage
```

### 환경 변수 사용

```typescript
import { env } from '@/lib/env';

// 타입 안전하게 환경 변수 사용
const apiUrl = env.apiUrl;
const isDev = env.isDevelopment;
```

### API 호출

```typescript
import { apiClient } from '@/shared/api/client';

// GET 요청
const data = await apiClient.get('/users');

// POST 요청
const result = await apiClient.post('/users', { name: 'John' });
```

### React Query 사용

```typescript
import { useQuery, useMutation } from '@/shared/hooks/useQuery';

// Query
const { data, isLoading, error } = useQuery(['users'], () =>
  apiClient.get('/users')
);

// Mutation
const { mutate } = useMutation((data) => apiClient.post('/users', data), {
  onSuccess: () => {
    toast.success('성공적으로 생성되었습니다');
  },
});
```

### Toast 사용

```typescript
import { toast } from '@/shared/ui/Toast';

// 성공 메시지
toast.success('저장되었습니다');

// 에러 메시지
toast.error('오류가 발생했습니다');

// 정보 메시지
toast.info('알림입니다');

// 경고 메시지
toast.warning('주의하세요');
```

### 컴포넌트 예제

```typescript
import { Spinner } from '@/shared/ui/Spinner';
import { EmptyState } from '@/shared/ui/EmptyState';
import { LoadingOverlay } from '@/shared/ui/LoadingOverlay';

// 로딩 스피너
<Spinner size="lg" />

// 빈 상태
<EmptyState
  title="데이터가 없습니다"
  description="새로운 항목을 추가해보세요"
  action={{
    label: "추가하기",
    onClick: () => {}
  }}
/>

// 로딩 오버레이
<LoadingOverlay text="불러오는 중..." />
```

## 🧪 테스트

```bash
# 테스트 실행
npm run test

# 특정 파일 테스트
npm run test -- Button.test.tsx

# 커버리지 확인
npm run test:coverage
```

## 📦 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Docker

```bash
# Docker 이미지 빌드
docker build -t nextjs-app .

# 컨테이너 실행
docker run -p 3000:3000 nextjs-app
```

## 🔧 커스터마이징

### 새로운 API 엔드포인트 추가

1. `shared/types/api.ts`에 타입 정의
2. `shared/api/hooks/`에 훅 생성
3. 컴포넌트에서 사용

### 새로운 UI 컴포넌트 추가

1. `shared/ui/ComponentName/` 디렉토리 생성
2. `ComponentName.tsx` 파일 생성
3. `index.ts`에서 export

### 새로운 페이지 추가

1. `app/page-name/` 디렉토리 생성
2. `page.tsx` 파일 생성
3. 필요한 경우 `layout.tsx`, `loading.tsx`, `error.tsx` 추가

## 📚 참고 자료

- [Next.js 문서](https://nextjs.org/docs)
- [React Query 문서](https://tanstack.com/query/latest)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [TypeScript 문서](https://www.typescriptlang.org/docs)
- [Vitest 문서](https://vitest.dev)

## 🤝 기여

버그 리포트나 기능 제안은 이슈로 등록해주세요.

## 📄 라이센스

MIT License
