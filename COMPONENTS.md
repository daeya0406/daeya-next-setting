# 컴포넌트 가이드

프로젝트에서 사용 가능한 모든 UI 컴포넌트 목록과 사용 방법입니다.

## 📦 전체 컴포넌트 목록

### Form Components

- [Button](#button) - 버튼
- [Input](#input) - 입력 필드
- [Checkbox](#checkbox) - 체크박스
- [Radio](#radio--radiogroup) - 라디오 버튼
- [Toggle](#toggle) - 토글 스위치
- [SearchBox](#searchbox) - 검색 입력
- [Textarea](#textarea) - 텍스트 영역
- [Select](#select) - 드롭다운 선택

### Display Components

- [Card](#card) - 카드
- [Badge](#badge) - 뱃지
- [Modal](#modal) - 모달
- [Popover](#popover) - 팝오버

### Feedback Components

- [Toast](#toast) - 토스트 알림
- [Spinner](#spinner) - 로딩 스피너
- [LoadingOverlay](#loadingoverlay) - 로딩 오버레이
- [EmptyState](#emptystate) - 빈 상태
- [Skeleton](#skeleton) - 스켈레톤 로더

---

## Form Components

### Button

다양한 스타일과 크기의 버튼 컴포넌트입니다.

```tsx
import { Button } from '@/shared/ui/Button';

// 기본 사용
<Button>클릭하세요</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>

// With Icon
<Button>
  <Icon className="mr-2" />
  With Icon
</Button>
```

**Props:**

- `variant`: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `disabled`: boolean

---

### Input

텍스트 입력 필드 컴포넌트입니다.

```tsx
import { Input } from '@/shared/ui/Input';

// 기본 사용
<Input placeholder="입력하세요" />

// Label과 Helper Text
<Input
  label="이름"
  placeholder="이름을 입력하세요"
  helperText="실명을 입력해주세요"
/>

// Error State
<Input
  label="이메일"
  error="유효한 이메일을 입력해주세요"
/>

// Sizes
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />

// Types
<Input type="email" />
<Input type="password" />
<Input type="number" />
```

**Props:**

- `label`: string
- `error`: string
- `helperText`: string
- `size`: 'sm' | 'md' | 'lg'
- `type`: HTML input types

---

### Checkbox

체크박스 컴포넌트입니다.

```tsx
import { Checkbox } from '@/shared/ui/Checkbox';

const [checked, setChecked] = useState(false);

// 기본 사용
<Checkbox
  label="동의합니다"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>

// With Description
<Checkbox
  label="마케팅 수신 동의"
  description="이메일로 프로모션 정보를 받습니다"
/>

// Sizes
<Checkbox label="Small" size="sm" />
<Checkbox label="Medium" size="md" />
<Checkbox label="Large" size="lg" />

// Error State
<Checkbox
  label="필수 항목"
  error="이 항목은 필수입니다"
/>

// Disabled
<Checkbox label="비활성화" disabled />
```

**Props:**

- `label`: string
- `description`: string
- `error`: string
- `size`: 'sm' | 'md' | 'lg'
- `checked`: boolean
- `onChange`: (e) => void
- `disabled`: boolean

---

### Radio & RadioGroup

라디오 버튼 컴포넌트입니다.

```tsx
import { Radio, RadioGroup } from '@/shared/ui/Radio';

const [value, setValue] = useState('option1');

// RadioGroup 사용
<RadioGroup
  label="옵션을 선택하세요"
  orientation="vertical"
>
  <Radio
    label="옵션 1"
    name="options"
    value="option1"
    checked={value === 'option1'}
    onChange={(e) => setValue(e.target.value)}
  />
  <Radio
    label="옵션 2"
    description="추가 설명"
    name="options"
    value="option2"
    checked={value === 'option2'}
    onChange={(e) => setValue(e.target.value)}
  />
</RadioGroup>

// Horizontal Layout
<RadioGroup orientation="horizontal">
  {/* Radio items */}
</RadioGroup>

// Sizes
<Radio label="Small" size="sm" />
<Radio label="Medium" size="md" />
<Radio label="Large" size="lg" />
```

**Radio Props:**

- `label`: string
- `description`: string
- `error`: string
- `size`: 'sm' | 'md' | 'lg'
- `value`: string
- `checked`: boolean
- `onChange`: (e) => void

**RadioGroup Props:**

- `label`: string
- `error`: string
- `orientation`: 'vertical' | 'horizontal'

---

### Toggle

토글 스위치 컴포넌트입니다.

```tsx
import { Toggle } from '@/shared/ui/Toggle';

const [enabled, setEnabled] = useState(false);

// 기본 사용
<Toggle
  label="알림 활성화"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>

// With Description
<Toggle
  label="다크 모드"
  description="어두운 테마를 사용합니다"
/>

// Sizes
<Toggle label="Small" size="sm" />
<Toggle label="Medium" size="md" />
<Toggle label="Large" size="lg" />

// Disabled
<Toggle label="비활성화" disabled />
```

**Props:**

- `label`: string
- `description`: string
- `error`: string
- `size`: 'sm' | 'md' | 'lg'
- `checked`: boolean
- `onChange`: (e) => void
- `disabled`: boolean

---

### SearchBox

검색 입력 필드 컴포넌트입니다.

```tsx
import { SearchBox } from '@/shared/ui/SearchBox';

const [search, setSearch] = useState('');

// 기본 사용
<SearchBox
  placeholder="검색어를 입력하세요"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

// With Clear Button
<SearchBox
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onClear={() => setSearch('')}
  showClearButton
/>

// Sizes
<SearchBox size="sm" />
<SearchBox size="md" />
<SearchBox size="lg" />

// Full Width
<SearchBox fullWidth />
<SearchBox fullWidth={false} />
```

**Props:**

- `label`: string
- `error`: string
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `value`: string
- `onChange`: (e) => void
- `onClear`: () => void
- `showClearButton`: boolean

---

### Textarea

여러 줄 텍스트 입력 컴포넌트입니다.

```tsx
import { Textarea } from '@/shared/ui/Textarea';

const [text, setText] = useState('');

// 기본 사용
<Textarea
  label="메시지"
  placeholder="메시지를 입력하세요"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>

// With Character Counter
<Textarea
  maxLength={200}
  showCounter
  value={text}
  onChange={(e) => setText(e.target.value)}
/>

// Sizes
<Textarea size="sm" />
<Textarea size="md" />
<Textarea size="lg" />

// Resize Options
<Textarea resize="none" />
<Textarea resize="vertical" />
<Textarea resize="horizontal" />
<Textarea resize="both" />
```

**Props:**

- `label`: string
- `error`: string
- `size`: 'sm' | 'md' | 'lg'
- `resize`: 'none' | 'vertical' | 'horizontal' | 'both'
- `showCounter`: boolean
- `maxLength`: number
- `value`: string
- `onChange`: (e) => void

---

## Display Components

### Badge

작은 라벨이나 상태 표시 컴포넌트입니다.

```tsx
import { Badge } from '@/shared/ui/Badge';

// Variants
<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>

// Outline Style
<Badge variant="primary" outline>Outline</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// With Icon
<Badge variant="success" icon={<Icon size={12} />}>
  With Icon
</Badge>
```

**Props:**

- `variant`: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
- `size`: 'sm' | 'md' | 'lg'
- `outline`: boolean
- `icon`: ReactNode

---

## Feedback Components

### Toast

토스트 알림 컴포넌트입니다.

```tsx
import { toast } from '@/shared/ui/Toast';

// Success
toast.success('성공했습니다!');

// Error
toast.error('에러가 발생했습니다');

// Info
toast.info('정보 메시지');

// Warning
toast.warning('주의하세요');

// Custom
toast('커스텀 메시지', {
  description: '추가 설명',
  duration: 5000,
});

// With Action
toast('메시지', {
  action: {
    label: '실행',
    onClick: () => console.log('clicked'),
  },
});
```

**메서드:**

- `toast.success(message, options)`
- `toast.error(message, options)`
- `toast.info(message, options)`
- `toast.warning(message, options)`
- `toast(message, options)`

---

### Spinner

로딩 스피너 컴포넌트입니다.

```tsx
import { Spinner } from '@/shared/ui/Spinner';

// Sizes
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />

// Custom Color
<Spinner className="border-blue-500" />
```

**Props:**

- `size`: 'sm' | 'md' | 'lg'
- `className`: string

---

### LoadingOverlay

전체 화면 로딩 오버레이 컴포넌트입니다.

```tsx
import { LoadingOverlay } from '@/shared/ui/LoadingOverlay';

// Full Screen
<LoadingOverlay text="로딩 중..." fullScreen />

// In Container
<div className="relative">
  <LoadingOverlay text="데이터를 불러오는 중..." />
  {/* Content */}
</div>
```

**Props:**

- `text`: string
- `fullScreen`: boolean

---

### EmptyState

빈 상태를 표시하는 컴포넌트입니다.

```tsx
import { EmptyState } from '@/shared/ui/EmptyState';

// 기본 사용
<EmptyState
  title="데이터가 없습니다"
  description="새로운 항목을 추가하세요"
/>

// With Icon
<EmptyState
  title="검색 결과 없음"
  description="다른 검색어로 시도해보세요"
  icon={<SearchIcon size={48} />}
/>

// With Action
<EmptyState
  title="비어있습니다"
  description="새로운 항목을 추가하여 시작하세요"
  action={{
    label: '추가하기',
    onClick: () => handleAdd(),
  }}
/>
```

**Props:**

- `title`: string
- `description`: string
- `icon`: ReactNode
- `action`: { label: string, onClick: () => void }

---

### Skeleton

스켈레톤 로더 컴포넌트입니다.

```tsx
import { Skeleton, SkeletonText, SkeletonCard } from '@/shared/ui/Skeleton';

// Basic Skeleton
<Skeleton width={200} height={20} />

// Variants
<Skeleton variant="rectangular" />
<Skeleton variant="circular" width={50} height={50} />
<Skeleton variant="text" />

// Pre-built Components
<SkeletonText lines={3} />
<SkeletonCard />
```

**Props:**

- `variant`: 'text' | 'circular' | 'rectangular'
- `width`: string | number
- `height`: string | number

---

## 🎮 Playground

모든 컴포넌트를 한 곳에서 확인하고 테스트할 수 있습니다:

```
http://localhost:3000/playground
```

Playground에서 제공하는 기능:

- ✅ 모든 컴포넌트 실시간 확인
- ✅ 인터랙티브 예제
- ✅ 다양한 상태 테스트
- ✅ 크기 및 변형 비교

---

## 📝 컴포넌트 패턴

모든 컴포넌트는 일관된 패턴을 따릅니다:

```
ComponentName/
├── ComponentName.styles.ts  # tailwind-variants 스타일
├── ComponentName.tsx        # 컴포넌트 로직
└── index.ts                 # Export
```

### 새 컴포넌트 추가 예제

```tsx
// ComponentName.styles.ts
import { tv } from 'tailwind-variants';

export const componentStyles = tv({
  base: 'base-classes',
  variants: {
    size: {
      sm: 'small-classes',
      md: 'medium-classes',
      lg: 'large-classes',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// ComponentName.tsx
import { componentStyles } from './ComponentName.styles';
import type { PropsWithClassName } from '@/shared/types';

export interface ComponentNameProps extends PropsWithClassName {
  size?: 'sm' | 'md' | 'lg';
}

export const ComponentName = ({
  className,
  size = 'md',
}: ComponentNameProps) => {
  const styles = componentStyles({ size });
  return <div className={styles({ className })}>Component</div>;
};

// index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';
```

---

## 🎨 스타일링 가이드

### Tailwind Variants 사용

```tsx
import { tv } from 'tailwind-variants';

const styles = tv({
  base: 'base-classes',
  variants: {
    variant: {
      primary: 'primary-classes',
      secondary: 'secondary-classes',
    },
    size: {
      sm: 'small-classes',
      lg: 'large-classes',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      size: 'lg',
      className: 'combined-classes',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});
```

### 클래스 병합

```tsx
import { cn } from '@/lib/utils';

<div className={cn('base-classes', className, conditionalClasses)} />;
```

---

## 🔗 참고 자료

- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://www.tailwind-variants.org)
- [Lucide Icons](https://lucide.dev)
- [Radix UI](https://www.radix-ui.com)
