import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Article.module.css';

export type ArticleType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  excerpt: any;
};

const ArticleList: React.FC<{ articles: ArticleType[] }> = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
