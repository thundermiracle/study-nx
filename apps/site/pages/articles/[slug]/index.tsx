import { readdirSync } from 'fs';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import path, { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote';
import { getMarkdownContent, renderMarkdown } from '@study-nx/markdown';
import dynamic from 'next/dynamic';

export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const mdxElements = {
  Youtube: dynamic(() => import('@study-nx/shared/mdx-elements/youtube')),
  a: dynamic(() => import('@study-nx/shared/mdx-elements/custom-link')),
};

export function Article({
  data,
  html,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <article className="prose lg:prose-xl px-8">
        <h1>{data.title}</h1>
        <div>{new Date(data.date).toLocaleDateString()}</div>
        <MDXRemote {...html} components={mdxElements} />
      </article>
    </div>
  );
}

const POSTS_PATH = join(process.cwd(), process.env.ContentBlogPath);

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  const { data, content } = getMarkdownContent(join(POSTS_PATH, params.slug));
  const html = await renderMarkdown(content);

  return {
    props: {
      data,
      html,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = readdirSync(POSTS_PATH).map((fileName) => ({
    params: {
      slug: path.basename(fileName, path.extname(fileName)),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
