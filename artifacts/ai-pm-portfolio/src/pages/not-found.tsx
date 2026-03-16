import React from 'react';
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-8xl font-black text-gray-900 tracking-tighter mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-8 font-light">页面未找到 / Page Not Found</p>
      <Link href="/" className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition-colors">
        返回首页 Return Home
      </Link>
    </div>
  );
}
