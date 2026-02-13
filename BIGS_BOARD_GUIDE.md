# BIGS 게시판 프로젝트 가이드

BIGS API를 사용한 게시판 프로젝트입니다.

## 🚀 빠른 시작

### 1. 환경 변수 설정

`.env.local` 파일이 이미 설정되어 있습니다:

```bash
NEXT_PUBLIC_API_URL=https://front-mission.bigs.or.kr
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
pnpm dev
```

http://localhost:3000 에서 확인 가능합니다.

## 📱 구현된 페이지

### 인증

- **`/register`** - 회원가입
  - 아이디, 이름, 비밀번호 입력
  - 폼 검증 (Zod + React Hook Form)
- **`/login`** - 로그인
  - 아이디, 비밀번호 입력
  - 자동 토큰 저장 및 관리

### 게시판

- **`/`** - 메인 랜딩 페이지
  - 서비스 소개
  - 게시판 바로가기

- **`/boards`** - 게시글 목록
  - 카테고리별 필터링 (전체, 공지, 자유, Q&A, 기타)
  - 페이지네이션 (10개씩)
  - 카드 형태 UI

- **`/boards/[id]`** - 게시글 상세
  - 제목, 내용, 이미지 표시
  - 작성일자 표시
  - 수정/삭제 버튼

- **`/boards/new`** - 게시글 작성
  - 카테고리 선택
  - 제목/내용 입력
  - 이미지 URL (선택)

- **`/boards/[id]/edit`** - 게시글 수정
  - 기존 데이터 로드
  - 카테고리 변경 가능
  - 제목/내용 수정

## 🎨 사용된 컴포넌트

프로젝트의 기존 `shared/ui` 컴포넌트를 최대한 활용했습니다:

- **Button** - 모든 액션 버튼
- **Card** - 게시글 카드, 폼 컨테이너
- **Input** - 텍스트 입력 필드
- **Toast** - 알림 메시지 (성공/실패)
- **Spinner** - 로딩 상태
- **Skeleton** - 로딩 스켈레톤
- **EmptyState** - 빈 상태 표시
- **LoadingOverlay** - 전체 화면 로딩
- **Navbar** - 상단 네비게이션 (새로 추가)

## 🔧 API 통합

### API 엔드포인트

```typescript
// shared/api/hooks/useBoard.ts
useBoardList(page, size); // GET /boards
useBoardDetail(id); // GET /boards/:id
useBoardCategories(); // GET /boards/categories
useCreateBoard(); // POST /boards
useUpdateBoard(id); // PATCH /boards/:id
useDeleteBoard(); // DELETE /boards/:id

// shared/api/hooks/useAuth.ts
useLogin(); // POST /auth/login
useRegister(); // POST /auth/register
useRefreshToken(); // POST /auth/refresh
```

### 타입 정의

```typescript
// shared/types/board.ts
export interface Board {
  id: number;
  title: string;
  content: string;
  boardCategory: BoardCategory;
  imageUrl?: string;
  createdAt: string;
}

export type BoardCategory = 'NOTICE' | 'FREE' | 'QNA' | 'ETC';
```

## 🛡️ 보안 & 인증

### 토큰 관리

- **Access Token**: `localStorage.accessToken`
- **Refresh Token**: `localStorage.refreshToken`
- 자동으로 API 요청에 포함

### 보호된 라우트

`middleware.ts`에서 인증 체크:

- `/boards/*` - 로그인 필요
- `/login`, `/register` - 로그인 시 리다이렉트

### Navbar 상태 관리

로그인 상태에 따라 다른 UI 표시:

- 로그인 전: 로그인/회원가입 버튼
- 로그인 후: 사용자명, 로그아웃 버튼

## 📝 사용 예시

### 게시글 작성

```typescript
const { mutate: createBoard } = useCreateBoard();

createBoard(
  {
    title: '새 게시글',
    content: '게시글 내용입니다',
    boardCategory: 'FREE',
    imageUrl: '/media/images/example.png',
  },
  {
    onSuccess: (board) => {
      toast.success('게시글이 등록되었습니다');
      router.push(`/boards/${board.id}`);
    },
  }
);
```

### 게시글 목록 조회

```typescript
const { data: boardList, isLoading } = useBoardList(page, 10);

// 카테고리 필터링
const filtered = boardList?.content.filter(
  (board) => board.category === selectedCategory
);
```

### 카테고리 사용

```typescript
const { data: categories } = useBoardCategories();
// { NOTICE: '공지', FREE: '자유', QNA: 'Q&A', ETC: '기타' }
```

## 🎯 주요 기능

### 1. 폼 검증

- Zod 스키마로 타입 안전 검증
- React Hook Form으로 폼 상태 관리
- 실시간 에러 메시지 표시

### 2. 로딩 상태

- Skeleton 컴포넌트로 로딩 표시
- Spinner로 버튼 로딩 상태
- LoadingOverlay로 전체 화면 로딩

### 3. 에러 처리

- Toast로 사용자 친화적 에러 메시지
- try-catch로 에러 핸들링
- API 에러 자동 변환

### 4. 페이지네이션

- 이전/다음 버튼
- 현재 페이지 / 전체 페이지 표시
- React Query의 keepPreviousData로 부드러운 전환

### 5. 카테고리 필터

- 전체/공지/자유/Q&A/기타 버튼
- 선택된 카테고리 하이라이트
- 실시간 필터링

## 🔍 디버깅

### 개발자 도구

```bash
# React Query DevTools
# 개발 모드에서 자동으로 활성화됨
# 화면 우측 하단의 아이콘 클릭
```

### 토큰 확인

```javascript
// 브라우저 콘솔에서
localStorage.getItem('accessToken');
localStorage.getItem('refreshToken');
```

### API 요청 로그

```typescript
// shared/utils/error-handler.ts
// 개발 모드에서 자동으로 콘솔에 로그 출력
```

## 📦 의존성

프로젝트에 추가된 주요 의존성:

```json
{
  "@tanstack/react-query": "^5.x",
  "@tanstack/react-query-devtools": "^5.x",
  "react-hook-form": "^7.x",
  "@hookform/resolvers": "^5.x",
  "zod": "^4.x",
  "sonner": "^1.x"
}
```

## 🚧 추가 개선 사항

향후 추가하면 좋을 기능들:

### 1. 사용자 프로필

```typescript
// shared/api/hooks/useAuth.ts에 추가
useProfile(); // 사용자 정보 조회
```

### 2. 이미지 업로드

```typescript
// 파일 업로드 API 연동
const { mutate: uploadImage } = useUploadImage();
```

### 3. 검색 기능

```typescript
// 제목/내용으로 검색
const { data } = useSearchBoards(keyword);
```

### 4. 좋아요/댓글

```typescript
// 게시글 좋아요
const { mutate: likeBoard } = useLikeBoard();

// 댓글 작성
const { mutate: createComment } = useCreateComment();
```

### 5. 무한 스크롤

```typescript
// React Query의 useInfiniteQuery 사용
const { data, fetchNextPage } = useInfiniteBoardList();
```

## 💡 팁

### 1. 토큰 만료 처리

현재 토큰 만료 시 자동 로그아웃됩니다.
Refresh Token을 사용한 자동 갱신을 추가하려면:

```typescript
// shared/api/client.ts
// 401 에러 시 자동 refresh 로직 추가
```

### 2. 이미지 최적화

Next.js Image 컴포넌트 사용:

```tsx
<Image
  src={`${env.apiUrl}${board.imageUrl}`}
  alt={board.title}
  width={800}
  height={400}
/>
```

### 3. SEO 최적화

각 페이지에 메타데이터 추가:

```typescript
export const metadata = {
  title: '게시판',
  description: '자유롭게 글을 작성하고 공유하세요',
};
```

## 🐛 문제 해결

### Turbopack 에러

```bash
# next.config.ts에 turbopack: {} 추가됨
# webpack 설정 제거됨
```

### 인증 에러

```bash
# 토큰 확인
localStorage.getItem('accessToken')

# 토큰 삭제 후 재로그인
localStorage.clear()
```

### API 에러

```bash
# .env.local 확인
NEXT_PUBLIC_API_URL=https://front-mission.bigs.or.kr

# CORS 에러는 서버 측 설정 필요
```

## 📚 참고 자료

- [Next.js 문서](https://nextjs.org/docs)
- [React Query 문서](https://tanstack.com/query/latest)
- [React Hook Form 문서](https://react-hook-form.com/)
- [Zod 문서](https://zod.dev/)
- [BIGS API 문서](https://front-mission.bigs.or.kr)

## 🤝 기여

버그 리포트나 기능 제안은 이슈로 등록해주세요.

## 📄 라이센스

MIT License
