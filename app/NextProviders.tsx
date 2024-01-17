'use client'
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from "next-themes/dist/types";
import {NextUIProvider} from '@nextui-org/react'

export interface ProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function NextProviders({children, themeProps}: ProviderProps){
  return (
    <NextUIProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
