import { GetServerSideProps } from 'next';
import Link from 'next/link';
// import { useRouter } from 'next/router';

import { ArticleType } from '../../../components/ArticleList';

const article: React.FC<{ article: ArticleType }> = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  //   return <div>This is a article {id}</div>;
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
