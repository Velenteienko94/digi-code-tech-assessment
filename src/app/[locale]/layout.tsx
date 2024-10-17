import { ReactNode } from "react";
import { BaseLayout } from "@/components/lib";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <BaseLayout>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </BaseLayout>
    </html>
  );
}
