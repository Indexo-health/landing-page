export interface BlogPostMeta {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: 'product' | 'company' | 'feature';
  coverImage: string;
  author: string;
  readingTime: number;
  lang: 'en' | 'zh';
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
