import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import "@/app/styles/global.scss";

export const viewport: Viewport = {
  themeColor: "#fff",
};

const SITE_URL = "https://mjaedot.com";
const SITE_TITLE = "Minjee Kim's Portfolio";
const SITE_DESCRIPTION = "견고한 코드를 작성하는 마크업 개발자 퍼블리셔 김민지의 포트폴리오. 사용자의 흐름을 설계하고 실제 구현 가능한 형태로 팀과 소통하는 것을 좋아합니다.";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  authors: [{ name: "김민지", url: SITE_URL }],
  creator: "김민지",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 1400,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>Minjee Kim&#39;s Portfolio</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
