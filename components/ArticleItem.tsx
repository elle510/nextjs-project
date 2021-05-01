import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

import { ArticleType } from './ArticleList';

type ArticleItemProps = {
  article: ArticleType;
};

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  return (
    <Link href={`/article/[id]`} as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
        {/* <p>{article.excerpt}</p> */}
      </a>
    </Link>
  );
};

export default ArticleItem;
