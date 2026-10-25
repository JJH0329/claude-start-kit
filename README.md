# 🚀 Next.js Starter Kit

Next.js 15, TypeScript, Tailwind CSS, shadcn/ui로 구성된 프로덕션 준비 완료 Starter Kit입니다.

새로운 프로젝트를 빠르게 시작할 수 있도록 최적화된 기본 구조, 레이아웃, 예제 페이지를 포함하고 있습니다.

## ✨ 주요 기능

- ⚡ **Next.js 15** - 최신 버전의 Next.js와 App Router
- 🎨 **Tailwind CSS** - 현대적이고 반응형 UI 스타일링
- 📦 **shadcn/ui** - 고품질의 재사용 가능한 컴포넌트
- ✅ **TypeScript** - 타입 안정성을 통한 안전한 코드
- 🎯 **ESLint** - 코드 품질 관리
- 📱 **반응형 디자인** - 모바일부터 데스크톱까지 최적화
- 📝 **@/* 임포트 에일리어스** - 깔끔한 import 경로

## 🛠 기술 스택

| 기술 | 설명 |
|------|------|
| [Next.js 15](https://nextjs.org) | React 기반 프레임워크 |
| [React 19](https://react.dev) | UI 라이브러리 |
| [TypeScript](https://www.typescriptlang.org) | 정적 타입 언어 |
| [Tailwind CSS](https://tailwindcss.com) | 유틸리티 기반 CSS |
| [shadcn/ui](https://ui.shadcn.com) | 컴포넌트 라이브러리 |
| [ESLint](https://eslint.org) | 코드 린터 |

## 📁 폴더 구조

```
claude-start-kit/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # 홈 페이지 (/)
│   ├── layout.tsx               # 루트 레이아웃
│   ├── globals.css              # 전역 스타일
│   ├── dashboard/
│   │   └── page.tsx            # 대시보드 페이지 (/dashboard)
│   └── components/
│       └── page.tsx            # 컴포넌트 예제 페이지 (/components)
├── components/
│   ├── ui/                      # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── layout/
│       └── header.tsx           # 헤더 컴포넌트
├── lib/
│   └── utils.ts                 # 유틸리티 함수
├── public/                       # 정적 파일
├── .env.example                 # 환경 변수 예시
├── next.config.ts              # Next.js 설정
├── tailwind.config.ts          # Tailwind CSS 설정
├── tsconfig.json               # TypeScript 설정
├── components.json             # shadcn/ui 설정
└── package.json                # 패키지 정의
```

## 🚀 빠른 시작

### 1. 설치

```bash
# npm 의존성 설치
npm install

# 또는 yarn
yarn install

# 또는 pnpm
pnpm install
```

### 2. 환경 변수 설정

```bash
# .env.example을 복사하여 .env.local 생성
cp .env.example .env.local

# 필요한 환경 변수 설정
```

### 3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

## 📝 주요 명령어

### 개발

```bash
npm run dev          # 개발 서버 시작 (hot reload)
```

### 빌드 및 프로덕션

```bash
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버 시작
```

### 코드 품질

```bash
npm run lint         # ESLint 실행 및 문제 확인
```

## 📄 페이지 구조

### 홈 페이지 (/)
- Starter Kit 소개
- 주요 기능 설명
- 빠른 시작 가이드
- 프로젝트 구조 소개

### 대시보드 (/dashboard)
- 통계 카드 (4개)
- 최근 활동 목록
- 확장 가이드

### 컴포넌트 (/components)
- Button 컴포넌트 예제
  - 기본 버튼
  - 다양한 크기 (sm, default, lg)
  - 다양한 스타일 (default, outline, secondary, ghost, destructive)
- Input 컴포넌트 예제
  - 텍스트 입력
  - 이메일 입력
  - 비활성 상태
- Card 컴포넌트 예제
- 폼 예제
- shadcn/ui 컴포넌트 추가 가이드

## 🔧 새로운 페이지 추가하기

### 1. 페이지 파일 생성

```bash
# 예: /about 페이지 추가
mkdir -p app/about
touch app/about/page.tsx
```

### 2. 페이지 컴포넌트 작성

```typescript
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">소개 페이지</h1>
      {/* 페이지 콘텐츠 */}
    </div>
  );
}
```

### 3. 헤더 네비게이션에 링크 추가 (선택사항)

`components/layout/header.tsx`의 `navItems` 배열에 링크 추가:

```typescript
const navItems = [
  { label: '홈', href: '/' },
  { label: '대시보드', href: '/dashboard' },
  { label: '컴포넌트', href: '/components' },
  { label: '소개', href: '/about' },  // 추가
];
```

## 🎨 shadcn/ui 컴포넌트 추가하기

shadcn/ui에서 제공하는 다양한 컴포넌트를 추가할 수 있습니다.

### 컴포넌트 설치

```bash
# 예: Alert 컴포넌트 추가
npx shadcn add alert

# 여러 컴포넌트 동시 추가
npx shadcn add dialog dropdown-menu select
```

### 설치 후 사용

```typescript
import { Alert, AlertDescription } from '@/components/ui/alert';

export function MyComponent() {
  return (
    <Alert>
      <AlertDescription>Alert 컴포넌트</AlertDescription>
    </Alert>
  );
}
```

사용 가능한 모든 컴포넌트는 [shadcn/ui 공식 문서](https://ui.shadcn.com)에서 확인할 수 있습니다.

## 🎯 권장 확장사항

이 Starter Kit을 확장하면서 추가할 수 있는 기능들:

### 상태 관리
- [Zustand](https://zustand-demo.pmnd.rs) - 가벼운 상태 관리
- [TanStack Query](https://tanstack.com/query) - 서버 상태 관리

### 폼 라이브러리
- [React Hook Form](https://react-hook-form.com) - 효율적인 폼 관리
- [Zod](https://zod.dev) - TypeScript 스키마 검증

### 데이터베이스
- [Prisma](https://www.prisma.io) - ORM
- [PostgreSQL](https://www.postgresql.org) / [MySQL](https://www.mysql.com) / [SQLite](https://www.sqlite.org)

### 인증
- [NextAuth.js](https://next-auth.js.org) - 인증 솔루션
- [Auth0](https://auth0.com) - 클라우드 인증

### 배포
- [Vercel](https://vercel.com) - Next.js 최적화 호스팅 (권장)
- [Netlify](https://www.netlify.com)
- [AWS](https://aws.amazon.com)

## 📊 성능 최적화 팁

1. **이미지 최적화**: `next/image` 사용
2. **동적 임포트**: `next/dynamic` 활용
3. **API 라우트**: `app/api` 디렉토리 활용
4. **캐싱**: 적절한 캐시 헤더 설정
5. **번들 분석**: 번들 크기 모니터링

## 📚 유용한 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs)

## 📄 라이선스

이 프로젝트는 MIT 라이선스로 공개됩니다. 자유롭게 사용, 수정, 배포할 수 있습니다.

---

**Happy Coding! 🎉**
