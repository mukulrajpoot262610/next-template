import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster />
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
