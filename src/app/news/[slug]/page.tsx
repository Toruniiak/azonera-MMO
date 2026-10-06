import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS, getPost } from "@/content/news";
import { DISCORD_URL } from "@/config/site";
import { asset, formatDate } from "@/lib/format";
import { NewsContent } from "@/components/News";
import { Reveal, CategoryBadge, IconDiscord, IconChevronLeft } from "@/components/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return NEWS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Nie znaleziono" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: [{ url: `/${post.cover}`, width: 1280, height: 720, alt: post.title }],
    },
  };
}

function YoutubeEmbed({ url }: { url: string }) {
  const id =
    url.split("v=")[1]?.split("&")[0] ??
    url.split("/").filter(Boolean).pop() ??
    "";
  return (
    <div className="aspect-video w-full border border-line">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="Wideo aktualizacji"
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative border-b border-line bg-coal/40">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ash transition-colors hover:text-emberbright"
            >
              <IconChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Wróć do newsów
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CategoryBadge label={post.category} />
              <time
                dateTime={post.date}
                className="text-[11px] font-bold uppercase tracking-[0.22em] text-dim"
              >
                {formatDate(post.date)}
              </time>
            </div>
            <h1 className="mt-5 font-display text-3xl font-black uppercase leading-tight tracking-[0.03em] text-bone sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ash">
              {post.description}
            </p>
          </Reveal>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
        <Reveal>
          <figure className="img-reveal cut border border-line">
            <img
              src={asset(post.cover)}
              alt={post.title}
              className="aspect-[16/8] w-full object-cover"
            />
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10">
            <NewsContent blocks={post.content} />
          </div>
        </Reveal>

        {post.video && (
          <Reveal delay={160}>
            <div className="mt-10">
              <h2 className="font-display text-xl font-bold uppercase tracking-[0.08em] text-bone">
                Wideo
              </h2>
              <div className="mt-4">
                {post.video.provider === "youtube" ? (
                  <YoutubeEmbed url={post.video.url} />
                ) : (
                  <video
                    controls
                    preload="metadata"
                    className="w-full border border-line"
                    src={asset(post.video.url)}
                  >
                    Twoja przeglądarka nie obsługuje wideo HTML5.
                  </video>
                )}
              </div>
            </div>
          </Reveal>
        )}

        {post.tags.length > 0 && (
          <Reveal delay={200}>
            <ul
              className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8"
              aria-label="Tagi"
            >
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-line bg-steel/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ash"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-line bg-coal/70 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-[0.08em] text-bone">
                Masz uwagi do tego wpisu?
              </p>
              <p className="mt-1.5 text-sm text-ash">
                Feedback i zgłoszenia testów trafiają prosto do zespołu.
              </p>
            </div>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost cut-sm shrink-0 !px-4 !py-2.5"
            >
              <IconDiscord className="h-4 w-4" />
              Napisz na Discordzie
            </a>
          </div>
        </Reveal>
      </article>
    </>
  );
}
