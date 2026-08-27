import config from "@payload-config";
import Link from "next/link";
import { getPayload } from "payload";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const dynamic = "force-dynamic";

export default async function Home() {
  const payload = await getPayload({ config });

  const [{ totalDocs: pageCount, docs: pages }, { totalDocs: userCount }] =
    await Promise.all([
      payload.find({ collection: "pages", limit: 5, depth: 0 }),
      payload.count({ collection: "users" }),
    ]);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary" className="w-fit">
          Scaffold ready
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight">
          Byldd landing site
        </h1>
        <p className="text-muted-foreground">
          Next.js + Tailwind CSS + shadcn/ui, with Payload CMS on MongoDB.
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Payload</CardTitle>
          <CardDescription>
            {userCount === 0
              ? "No admin user yet — open the admin panel to create the first one."
              : `${userCount} user${userCount === 1 ? "" : "s"} · ${pageCount} page${pageCount === 1 ? "" : "s"}`}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {pages.length > 0 && (
            <ul className="text-sm">
              {pages.map((page) => (
                <li
                  key={page.id}
                  className="flex justify-between border-b py-2 last:border-b-0"
                >
                  <span>{page.title}</span>
                  <span className="text-muted-foreground font-mono">
                    /{page.slug}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-3">
            <Button size="lg" render={<Link href="/admin" />}>
              Open admin panel
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/api/graphql-playground" />}
            >
              GraphQL playground
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
