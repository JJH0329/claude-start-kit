'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: '홈', href: '/' },
  { label: '대시보드', href: '/dashboard' },
  { label: '컴포넌트', href: '/components' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            🚀 Next.js Kit
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <Button variant="ghost" size="sm">
            라이트
          </Button>
          <Button size="sm">
            시작하기
          </Button>
        </div>
      </nav>

      {/* 모바일 네비게이션 */}
      <div className="md:hidden px-4 py-3 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? 'default' : 'outline'}
                  size="sm"
                  className="text-xs"
                >
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
