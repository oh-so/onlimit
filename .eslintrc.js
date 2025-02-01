module.exports = {
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: ['plugin:@typescript-eslint/eslint-recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@next/next/no-img-element': 'off',
    'sort-imports': 'off',
    'react/display-name': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 1. Node.js 기본 모듈
          [
            '^(assert|buffer|child_process|crypto|fs|http|https|os|path|stream|url|util)$'
          ],
          // 2. 외부 패키지 (npm으로 설치된 모듈)
          ['^@?\\w'],
          // 3. `next` 관련 (Next.js 프로젝트의 경우)
          ['^next', '^next/.*'],
          // 4. 절대 경로 기반 import (예: tsconfig paths)
          ['^@/'],
          // 5. 부모 디렉토리 import
          ['^\\.\\.'],
          // 6. 현재 디렉토리 import
          ['^\\.'],
          // 7. 이미지 파일
          ['^.+\\.(png|jpg|jpeg|gif|svg|webp)$'],
          // 8. 스타일 파일
          ['^.+\\.(css|scss|sass|less)$']
        ]
      }
    ]
  },
  ignorePatterns: ['node modules', 'build', '*.js']
};
