#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

// 입력값 검증
if (!componentName) {
  console.error('❌ 에러: 컴포넌트 이름이 필요합니다');
  console.error('사용법: npm run create:component <ComponentName>');
  process.exit(1);
}

// PascalCase 검증
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('❌ 에러: PascalCase 형식이어야 합니다 (예: MyButton)');
  process.exit(1);
}

const componentDir = path.join(__dirname, '..', 'app', 'components', componentName);

// 폴더 존재 여부 확인
if (fs.existsSync(componentDir)) {
  console.error(`❌ 에러: '${componentName}' 컴포넌트가 이미 존재합니다`);
  process.exit(1);
}

// 컴포넌트 디렉토리 생성
fs.mkdirSync(componentDir, { recursive: true });

// 컴포넌트 파일 내용
const componentContent = `'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ${componentName}Props extends React.HTMLAttributes<HTMLDivElement> {
  // Props 추가
}

const ${componentName} = React.forwardRef<HTMLDivElement, ${componentName}Props>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props}>
      {/* 컴포넌트 내용 */}
    </div>
  ),
);

${componentName}.displayName = '${componentName}';

export { ${componentName} };
`;

// index.ts 파일 내용
const indexContent = `export { ${componentName} } from './${componentName}';
`;

// TypeScript 정의 파일 내용
const typesContent = `import React from 'react';

export interface ${componentName}Props extends React.HTMLAttributes<HTMLDivElement> {
  // Props 타입 정의
}

export const ${componentName}: React.ForwardRefExoticComponent<
  ${componentName}Props & React.RefAttributes<HTMLDivElement>
>;
`;

// 파일 생성
try {
  fs.writeFileSync(path.join(componentDir, \`\${componentName}.tsx\`), componentContent);
  fs.writeFileSync(path.join(componentDir, 'index.ts'), indexContent);
  fs.writeFileSync(path.join(componentDir, \`\${componentName}.types.ts\`), typesContent);

  console.log(\`✅ '\${componentName}' 컴포넌트가 생성되었습니다\`);
  console.log(\`📁 경로: app/components/\${componentName}/\`);
  console.log('');
  console.log('생성된 파일:');
  console.log(\`  - \${componentName}.tsx (컴포넌트 구현)\`);
  console.log(\`  - index.ts (내보내기)\`);
  console.log(\`  - \${componentName}.types.ts (타입 정의)\`);
} catch (error) {
  console.error('❌ 파일 생성 중 오류가 발생했습니다:', error.message);
  process.exit(1);
}
