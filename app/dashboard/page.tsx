'use client';

import { Card } from '@/components/ui/card';

interface StatCard {
  label: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
}

interface Activity {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  type: 'success' | 'info' | 'warning';
}

const statCards: StatCard[] = [
  {
    label: '총 사용자',
    value: '1,234',
    change: '+12% 증가',
    changeType: 'positive',
  },
  {
    label: '총 매출',
    value: '$12,345',
    change: '+5% 증가',
    changeType: 'positive',
  },
  {
    label: '활성 세션',
    value: '456',
    change: '-8% 감소',
    changeType: 'negative',
  },
  {
    label: '변환율',
    value: '3.24%',
    change: '+1.2% 증가',
    changeType: 'positive',
  },
];

const activities: Activity[] = [
  {
    id: 1,
    title: '신규 사용자 가입',
    description: '새로운 사용자 150명이 가입했습니다.',
    timestamp: '2 시간 전',
    type: 'success',
  },
  {
    id: 2,
    title: '시스템 유지보수',
    description: '데이터베이스 백업이 완료되었습니다.',
    timestamp: '4 시간 전',
    type: 'info',
  },
  {
    id: 3,
    title: 'API 응답 시간 증가',
    description: 'API 응답 시간이 평소보다 높습니다. 모니터링 중입니다.',
    timestamp: '6 시간 전',
    type: 'warning',
  },
  {
    id: 4,
    title: '보고서 생성 완료',
    description: '월간 분석 보고서가 생성되었습니다.',
    timestamp: '8 시간 전',
    type: 'success',
  },
];

const typeStyles = {
  success: 'bg-green-100 text-green-800',
  info: 'bg-blue-100 text-blue-800',
  warning: 'bg-yellow-100 text-yellow-800',
};

const typeIcons = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 py-8 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
          <p className="text-gray-600 mt-2">
            서비스 통계와 최근 활동을 한눈에 확인하세요.
          </p>
        </div>

        {/* 통계 카드 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            주요 지표
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-gray-900 mb-3">
                  {stat.value}
                </p>
                <p
                  className={`text-sm font-medium ${
                    stat.changeType === 'positive'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {stat.changeType === 'positive' ? '📈' : '📉'} {stat.change}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 최근 활동 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            최근 활동
          </h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                className="p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                      typeStyles[activity.type]
                    }`}
                  >
                    {typeIcons[activity.type]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {activity.timestamp}
                    </p>
                  </div>
                  <span
                    className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                      typeStyles[activity.type]
                    }`}
                  >
                    {activity.type === 'success'
                      ? '성공'
                      : activity.type === 'info'
                        ? '정보'
                        : '경고'}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 추가 정보 */}
        <section className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            💡 팁: 대시보드 확장하기
          </h3>
          <p className="text-gray-700 mb-3">
            이 대시보드는 shadcn/ui의 Card 컴포넌트를 활용한 예제입니다.
            다음과 같이 확장할 수 있습니다:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Chart 라이브러리로 그래프 추가</li>
            <li>API 연동으로 실시간 데이터 표시</li>
            <li>필터와 검색 기능 추가</li>
            <li>내보내기 기능 구현</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
