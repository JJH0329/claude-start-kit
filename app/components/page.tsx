'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function ComponentsPage() {
  const [inputValue, setInputValue] = useState('');
  const [buttonClicks, setButtonClicks] = useState(0);

  return (
    <div className="flex flex-col gap-8 py-8 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* 헤더 */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900">UI 컴포넌트</h1>
          <p className="text-gray-600 mt-2">
            shadcn/ui와 커스텀 컴포넌트를 활용한 예제를 확인하세요.
          </p>
        </div>

        {/* Button 컴포넌트 */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Button 컴포넌트
            </h2>
            <div className="space-y-8">
              {/* 기본 버튼 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  기본 버튼
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => setButtonClicks(buttonClicks + 1)}>
                    기본 버튼 (클릭: {buttonClicks})
                  </Button>
                  <Button disabled>비활성 버튼</Button>
                </div>
              </div>

              {/* 다양한 크기 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  다양한 크기
                </h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="sm">작은 버튼</Button>
                  <Button size="default">기본 크기</Button>
                  <Button size="lg">큰 버튼</Button>
                </div>
              </div>

              {/* 다양한 스타일 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  다양한 스타일
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">기본</Button>
                  <Button variant="outline">아웃라인</Button>
                  <Button variant="secondary">보조</Button>
                  <Button variant="ghost">유령</Button>
                  <Button variant="destructive">삭제</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Input 컴포넌트 */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Input 컴포넌트
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  기본 입력 필드
                </label>
                <Input
                  type="text"
                  placeholder="텍스트를 입력하세요"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                {inputValue && (
                  <p className="text-sm text-gray-600 mt-2">
                    입력된 값: <strong>{inputValue}</strong>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  이메일 입력 필드
                </label>
                <Input
                  type="email"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  비활성 입력 필드
                </label>
                <Input
                  type="text"
                  placeholder="수정할 수 없습니다"
                  disabled
                  defaultValue="비활성 상태"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Card 컴포넌트 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Card 컴포넌트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <Card
                key={num}
                className="p-6 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                  {num}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  카드 {num}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  shadcn/ui의 Card 컴포넌트로 만들어진 카드입니다. 다양한 콘텐츠를
                  담을 수 있습니다.
                </p>
                <Button variant="outline" size="sm">
                  자세히 보기
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* 폼 예제 */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              폼 예제
            </h2>
            <form className="space-y-6 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  이름
                </label>
                <Input placeholder="이름을 입력하세요" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  이메일
                </label>
                <Input
                  type="email"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  메시지
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="메시지를 입력하세요"
                  rows={4}
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit">제출</Button>
                <Button type="reset" variant="outline">
                  초기화
                </Button>
              </div>
            </form>
          </Card>
        </section>

        {/* 컴포넌트 가이드 */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            📚 컴포넌트 추가 방법
          </h3>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-fit">1단계:</span>
              <span>
                <code className="bg-gray-200 px-2 py-1 rounded">
                  npx shadcn add &lt;component-name&gt;
                </code>{' '}
                실행
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-fit">2단계:</span>
              <span>
                <code className="bg-gray-200 px-2 py-1 rounded">
                  components/ui/
                </code>{' '}
                에 컴포넌트가 추가됩니다
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-fit">3단계:</span>
              <span>필요한 페이지나 컴포넌트에 import 하여 사용합니다</span>
            </li>
          </ol>
          <p className="text-sm text-gray-600 mt-4">
            shadcn/ui 공식 문서:{' '}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ui.shadcn.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
