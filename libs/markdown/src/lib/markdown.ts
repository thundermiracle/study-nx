import * as fs from 'fs';
import * as grayMatter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export function getMarkdownContent(filePathWithoutExt: string) {
  const [validFilePath] = [
    `${filePathWithoutExt}.md`,
    `${filePathWithoutExt}.mdx`,
  ].filter((filePath) => fs.existsSync(filePath));

  if (!validFilePath) {
    throw new Error(`Markdown file not found: ${filePathWithoutExt}`);
  }

  const fileContent = fs.readFileSync(validFilePath, 'utf8');
  const { data, content } = grayMatter(fileContent);

  return {
    data,
    content,
  };
}

export async function renderMarkdown(content?: string) {
  const result = await serialize(content || '');
  return result;
}
