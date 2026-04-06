import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-xl text-center space-y-4">
        <h2 className="text-4xl font-semibold">404</h2>
        <p className="text-muted-foreground">The page you’re looking for doesn’t exist.</p>
        <Button asChild className="transition-all duration-200 hover:scale-105">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
