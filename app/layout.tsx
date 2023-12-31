import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript, localStorageColorSchemeManager } from "@mantine/core";
import { theme } from "../theme";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
