# Onlimit Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Node](https://img.shields.io/badge/Node-20-green)](https://nodejs.org/)
[![Yarn](https://img.shields.io/badge/Yarn-4.6.0-blue)](https://yarnpkg.com/)

## 🚀 Quick Start

```bash
# 저장소 클론
git clone https://github.com/meta/onlimit.git
cd onlimit

# 의존성 설치
yarn install

# 개발 서버 실행 (클라이언트 + 모킹 서버)
yarn dev

# 테스트 실행
yarn test

# 포맷팅 실행
yarn format
```

## 📖 프로젝트 소개

Onlimit 프로젝트는 확장성과 자동 유지보수에 중점을 둔 웹 애플리케이션입니다. 이 프로젝트는 최신 기술 스택을 기반으로 빠른 개발과 확장이 가능한 MVP를 지향합니다.

## 🛠️ 기술 스택

### 핵심 기술
- **Framework**: Next.js 14 (SSR 지원)
- **Language**: TypeScript
- **Node Version**: 20
- **Package Manager**: Yarn Berry 4.6.0
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **API**: REST API
- **상태 관리**: React Query + Zustand (예정)
- **테스트**: Vitest + Testing Library

### 개발 도구
- **Linting & Formatting**: ESLint + Prettier
- **Git Hooks**: Husky (선택적)
- **CI/CD**: GitHub Actions
- **Mock Server**: Express (포트: 3001)

## 📁 프로젝트 구조

프로젝트는 Feature-Sliced Design(FSD) 아키텍처를 기반으로 확장 가능한 구조로 설계되었습니다.

```
src/
├── app/                # 애플리케이션 진입점
├── entities/           # 비즈니스 엔티티 (모델)
├── features/           # 사용자 액션과 비즈니스 로직
├── lib/                # 유틸리티 및 라이브러리
│   └── server/         # 모킹 서버
├── pages/              # 페이지 컴포넌트
├── shared/             # 공통 유틸리티, 스타일, 타입
│   ├── api/            # API 클라이언트
│   ├── config/         # 환경 설정
│   └── ui/             # UI 컴포넌트
└── widgets/            # 독립적인 UI 블록
```

## ⚙️ 개발 가이드라인

### 브랜치 컨벤션
```
feat/feature-name      # 새로운 기능 개발
refactor/feature-name  # 코드 리팩토링
hotfix/YYYYMMDD##      # 긴급 버그 수정
```

### 커밋 컨벤션
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 스타일 변경 (기능에 영향을 주지 않는 변경)
refactor: 코드 리팩토링
test: 테스트 코드 추가
chore: 빌드 프로세스 또는 보조 도구 변경
add: 의존성 추가
remove: 의존성 제거
```

**중요**: 커밋 메시지는 "OOO파일 수정 X" 대신 "OOO로 인해 발생한 에러를 OOO파일 수정으로 해결" 형식으로 작성합니다.

### 티켓 관리
- GitHub Issues를 사용하여 티켓 관리
- Pull Request 필수

### 코드 품질
- ESLint 및 Prettier를 통한 코드 스타일 일관성 유지
- TypeScript interface를 사용하여 객체 명세 작성
- 코드 리뷰 필수

### 패키지 관리
프로젝트는 Yarn Berry 4.6.0을 사용합니다. `.yarnrc.yml` 파일에 다음 설정이 포함되어 있습니다:

```yaml
yarnPath: .yarn/releases/yarn-4.6.0.cjs
```

## 📡 API 연동

### Mock Server
Express를 사용한 Mock Server가 기본 제공됩니다.

```bash
# 모킹 서버만 실행
yarn dev:server
```

Mock API 엔드포인트: `http://localhost:3001/api/example`

## 📚 스크립트

```json
"scripts": {
  "dev:server": "node src/lib/server/server.js",
  "dev:client": "next dev",
  "dev": "concurrently \"yarn dev:client\" \"yarn dev:server\"",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "yarn lint && prettier --write .",
  "test": "vitest"
}
```

## ✅ 구현된 기능 (v1.0.0)

- ✅ Next.js 14 설정 (#3)
- ✅ ESLint + Prettier 설정 (#3)
- ✅ Node.js 20 환경 설정 (#3)
- ✅ Yarn Berry 4.6.0 패키지 매니저 설정 (#3)
- ✅ Tailwind CSS 스타일링 구현 (#4)
- ✅ Vite + Vitest 테스트 환경 구성 (#2)
- ✅ FSD 기반 기본 폴더 구조 설정 (#5)
- ✅ Express 기반 Mock Server 제공 (#8)

## 🤝 기여하기

1. 이 저장소를 Fork 합니다.
2. 새 브랜치를 생성합니다: `git checkout -b feat/amazing-feature`
3. 변경사항을 커밋합니다: `git commit -m 'feat: Add amazing feature'`
4. 브랜치에 푸시합니다: `git push origin feat/amazing-feature`
5. Pull Request를 생성합니다.

## 📝 라이센스

MIT 라이센스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.