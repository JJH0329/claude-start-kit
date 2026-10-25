import Link from 'next/link';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: '⚡',
    title: 'Next.js 15',
    description: '최신 Next.js 버전으로 빠르고 효율적인 개발을 시작하세요.',
  },
  {
    icon: '🎨',
    title: 'Tailwind CSS',
    description: '유틸리티 기반 CSS로 빠른 UI 개발이 가능합니다.',
  },
  {
    icon: '📦',
    title: 'shadcn/ui',
    description: '재사용 가능한 고품질 컴포넌트 라이브러리입니다.',
  },
  {
    icon: '✅',
    title: 'TypeScript',
    description: '타입 안정성으로 더 안전한 코드를 작성합니다.',
  },
];

const quickStartSteps = [
  {
    step: 1,
    title: '대시보드 확인',
    description: '통계 카드와 활동 목록을 포함한 대시보드 예제를 확인하세요.',
    href: '/dashboard',
  },
  {
    step: 2,
    title: 'UI 컴포넌트 학습',
    description: '사용 가능한 shadcn/ui 컴포넌트와 커스텀 컴포넌트를 학습합니다.',
    href: '/components',
  },
  {
    step: 3,
    title: 'README 읽기',
    description: 'README.md에서 폴더 구조와 페이지 추가 방법을 확인합니다.',
    href: '#',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              🚀 Next.js Starter Kit
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Next.js 15, TypeScript, Tailwind CSS, shadcn/ui로 구성된
              <br />
              프로덕션 준비 완료 Starter Kit입니다.
              <br />
              새로운 프로젝트를 빠르게 시작하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/dashboard">
                <Button size="lg">
                  대시보드 확인하기 →
                </Button>
              </Link>
              <Link href="/components">
                <Button size="lg" variant="outline">
                  컴포넌트 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 기능 소개 */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            주요 기능
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 빠른 시작 가이드 */}
      <section className="bg-gray-50 py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            빠른 시작 가이드
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartSteps.map((item) => (
              <div key={item.step} className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
                {item.href !== '#' && (
                  <Link href={item.href}>
                    <Button variant="outline" className="mt-4">
                      자세히 보기 →
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 구조 */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            프로젝트 구조
          </h2>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono">
{`claude-start-kit/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 홈 페이지
│   ├── dashboard/         # 대시보드 페이지
│   ├── components/        # 컴포넌트 예제 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── globals.css        # 전역 스타일
├── components/            # React 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   └── layout/           # 레이아웃 컴포넌트
├── lib/                   # 유틸리티 함수
├── public/                # 정적 파일
├── .env.example           # 환경 변수 예시
├── next.config.ts         # Next.js 설정
├── tailwind.config.ts     # Tailwind CSS 설정
├── tsconfig.json          # TypeScript 설정
└── package.json           # 패키지 정의`}
            </pre>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">지금 바로 시작하세요!</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            이 Starter Kit은 즉시 복사해서 새 프로젝트에서 사용할 수 있도록
            설계되었습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                예제 확인하기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
