import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';

interface ArticleSchemaOptions {
  title: string;
  createdAt?: string;
}

export default async function (tree: Tree, schema: ArticleSchemaOptions) {
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    './content/blog',
    {
      title: schema.title,
      createdAt: schema.createdAt || new Date().toISOString(),
      normalizedTitle: names(schema.title).fileName,
    }
  );

  await formatFiles(tree);
}
