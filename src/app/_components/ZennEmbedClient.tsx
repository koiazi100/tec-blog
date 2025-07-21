// src/app/_components/ZennEmbedClient.tsx
'use client';

import { useEffect } from "react";

// クライアントでのみ読み込みたい CSS/JS を useEffect で実行
export const ZennEmbedClient = () => {
  useEffect(() => {
    import('zenn-embed-elements');
  }, []);

  return null; // HTMLは何も返さない（必要であれば返しても良い）
};