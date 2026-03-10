import type { BlogPost, BlogPostMeta } from '../types/blog';

/* ── Lightweight frontmatter parser (browser-safe, no Node.js deps) ── */
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }

  return { data, content: match[2] };
}

/* Vite bundles all .md files at build time — zero runtime fetch */
const modules = import.meta.glob<string>(
  '../../content/blog/**/post.*.md',
  { query: '?raw', import: 'default', eager: true },
);

interface ParsedPost {
  slug: string;
  lang: 'en' | 'zh';
  meta: BlogPostMeta;
  content: string;
}

function parseAllPosts(): ParsedPost[] {
  const posts: ParsedPost[] = [];

  for (const [path, raw] of Object.entries(modules)) {
    const match = path.match(/\/blog\/([^/]+)\/post\.(en|zh)\.md$/);
    if (!match) continue;

    const slug = match[1];
    const lang = match[2] as 'en' | 'zh';
    const { data, content } = parseFrontmatter(raw as string);

    posts.push({
      slug,
      lang,
      meta: {
        slug,
        title: data.title ?? '',
        summary: data.summary ?? '',
        date: data.date ?? '',
        category: (data.category as BlogPostMeta['category']) ?? 'product',
        coverImage: data.coverImage ?? `/images/blog/${slug}/cover.jpg`,
        author: data.author ?? 'Indexo Health Team',
        readingTime: Math.ceil(content.split(/\s+/).length / 200),
        lang,
      },
      content,
    });
  }

  return posts;
}

const allPosts = parseAllPosts();

export function getAllPosts(lang: 'en' | 'zh'): BlogPostMeta[] {
  return allPosts
    .filter((p) => p.lang === lang)
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
    .map((p) => p.meta);
}

export function getPostBySlug(slug: string, lang: 'en' | 'zh'): BlogPost | null {
  const found = allPosts.find((p) => p.slug === slug && p.lang === lang);
  if (!found) return null;
  return { ...found.meta, content: found.content };
}
