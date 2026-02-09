'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Radio, RadioGroup } from '@/shared/ui/Radio';
import { Toggle } from '@/shared/ui/Toggle';
import { SearchBox } from '@/shared/ui/SearchBox';
import { Textarea } from '@/shared/ui/Textarea';
import { Badge } from '@/shared/ui/Badge';
import { Spinner } from '@/shared/ui/Spinner';
import { EmptyState } from '@/shared/ui/EmptyState';
import { Skeleton, SkeletonCard } from '@/shared/ui/Skeleton';
import { toast } from '@/shared/ui/Toast';
import { Heart, Star, AlertCircle } from 'lucide-react';

export default function PlaygroundPage() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [toggleValue, setToggleValue] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [searchValue, setSearchValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Component Playground
          </h1>
          <p className="mt-2 text-gray-600">
            모든 컴포넌트를 한 곳에서 확인하고 테스트할 수 있습니다
          </p>
        </div>

        <div className="space-y-8">
          {/* Buttons */}
          <Card>
            <h2 className="mb-4 text-2xl font-bold">Buttons</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  With Icons
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button>
                    <Heart className="mr-2 h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="primary">
                    <Star className="mr-2 h-4 w-4" />
                    Favorite
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  States
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button disabled>Disabled</Button>
                  <Button loading>Loading</Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Form Inputs */}
          <Card>
            <h2 className="mb-4 text-2xl font-bold">Form Inputs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-700">
                  Text Input
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <Input placeholder="Small input" size="sm" />
                  <Input placeholder="Medium input" size="md" />
                  <Input placeholder="Large input" size="lg" />
                </div>
                <div className="mt-4 space-y-2">
                  <Input
                    label="이름"
                    placeholder="이름을 입력하세요"
                    helperText="실명을 입력해주세요"
                  />
                  <Input
                    label="이메일"
                    type="email"
                    placeholder="email@example.com"
                    error="유효한 이메일을 입력해주세요"
                  />
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-700">
                  Search Box
                </h3>
                <div className="space-y-2">
                  <SearchBox
                    placeholder="검색어를 입력하세요..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <SearchBox
                      placeholder="Small"
                      size="sm"
                      fullWidth={false}
                    />
                    <SearchBox
                      placeholder="Medium"
                      size="md"
                      fullWidth={false}
                    />
                    <SearchBox
                      placeholder="Large"
                      size="lg"
                      fullWidth={false}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-700">
                  Textarea
                </h3>
                <Textarea
                  label="메시지"
                  placeholder="메시지를 입력하세요..."
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                  maxLength={200}
                  showCounter
                />
              </div>
            </div>
          </Card>

          {/* Checkboxes & Radios & Toggles */}
          <Card>
            <h2 className="mb-4 text-2xl font-bold">Selection Controls</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-700">
                  Checkboxes
                </h3>
                <div className="space-y-3">
                  <Checkbox
                    label="기본 체크박스"
                    checked={checkboxValue}
                    onChange={(e) => setCheckboxValue(e.target.checked)}
                  />
                  <Checkbox
                    label="설명이 있는 체크박스"
                    description="추가 정보를 표시할 수 있습니다"
                  />
                  <div className="space-y-2">
                    <Checkbox label="Small" size="sm" />
                    <Checkbox label="Medium" size="md" />
                    <Checkbox label="Large" size="lg" />
                  </div>
                  <Checkbox label="에러 상태" error="필수 항목입니다" />
                  <Checkbox label="비활성화" disabled />
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-700">
                  Radio Buttons
                </h3>
                <RadioGroup label="옵션을 선택하세요" orientation="vertical">
                  <Radio
                    label="옵션 1"
                    name="demo"
                    value="option1"
                    checked={radioValue === 'option1'}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <Radio
                    label="옵션 2"
                    description="추가 설명"
                    name="demo"
                    value="option2"
                    checked={radioValue === 'option2'}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <Radio
                    label="옵션 3"
                    name="demo"
                    value="option3"
                    checked={radioValue === 'option3'}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                </RadioGroup>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-700">
                  Toggle Switches
                </h3>
                <div className="space-y-3">
                  <Toggle
                    label="기본 토글"
                    checked={toggleValue}
                    onChange={(e) => setToggleValue(e.target.checked)}
                  />
                  <Toggle
                    label="설명이 있는 토글"
                    description="ON/OFF 상태를 전환합니다"
                  />
                  <div className="space-y-2">
                    <Toggle label="Small" size="sm" />
                    <Toggle label="Medium" size="md" />
                    <Toggle label="Large" size="lg" />
                  </div>
                  <Toggle label="비활성화" disabled />
                </div>
              </div>
            </div>
          </Card>

          {/* Badges */}
          <Card>
            <h2 className="mb-4 text-2xl font-bold">Badges</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  Outline
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge outline>Default</Badge>
                  <Badge variant="primary" outline>
                    Primary
                  </Badge>
                  <Badge variant="success" outline>
                    Success
                  </Badge>
                  <Badge variant="warning" outline>
                    Warning
                  </Badge>
                  <Badge variant="error" outline>
                    Error
                  </Badge>
                  <Badge variant="info" outline>
                    Info
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  With Icons
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary" icon={<Heart size={12} />}>
                    Favorite
                  </Badge>
                  <Badge variant="success" icon={<Star size={12} />}>
                    Featured
                  </Badge>
                  <Badge variant="error" icon={<AlertCircle size={12} />}>
                    Alert
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Loading States */}
          <Card>
            <h2 className="mb-4 text-2xl font-bold">Loading States</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  Spinners
                </h3>
                <div className="flex items-center gap-4">
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                  Skeleton Loaders
                </h3>
                <div className="space-y-4">
                  <Skeleton height={40} />
                  <div className="flex gap-4">
                    <Skeleton variant="circular" width={60} height={60} />
                    <div className="flex-1 space-y-2">
                      <Skeleton height={20} width="60%" />
                      <Skeleton height={16} width="40%" />
                    </div>
                  </div>
                  <SkeletonCard />
                </div>
              </div>
            </div>
          </Card>

          {/* Empty State */}
          <Card>
            <h2 className="mb-4 text-2xl font-bold">Empty States</h2>
            <EmptyState
              title="데이터가 없습니다"
              description="새로운 항목을 추가하여 시작하세요"
              icon={<AlertCircle size={32} />}
              action={{
                label: '항목 추가',
                onClick: () => toast.success('항목이 추가되었습니다!'),
              }}
            />
          </Card>

          {/* Toast Notifications */}
          <Card>
            <h2 className="mb-4 text-2xl font-bold">Toast Notifications</h2>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => toast.success('성공 메시지입니다!')}>
                Success Toast
              </Button>
              <Button
                variant="danger"
                onClick={() => toast.error('에러가 발생했습니다!')}
              >
                Error Toast
              </Button>
              <Button
                variant="secondary"
                onClick={() => toast.info('정보 메시지입니다')}
              >
                Info Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.warning('주의가 필요합니다')}
              >
                Warning Toast
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  toast('기본 메시지', {
                    description: '추가 설명을 넣을 수 있습니다',
                  })
                }
              >
                Custom Toast
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
