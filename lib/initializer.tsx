"use client"

import { useEffect } from 'react';

import { initializeApiClient } from './initializeApiClient';

export default function Initializer() {
  useEffect(() => {
    initializeApiClient()
  }, []);
  return null;
}