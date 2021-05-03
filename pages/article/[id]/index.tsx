import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
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

// SSR
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// SSG (url 이 동적으로 만들어지므로 이에 상응하는 path 도 만들어줘야 한다. - getStaticPaths 필요)
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  const ids = articles.map((article: ArticleType) => article.id);
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  return {
    // paths: [{ params: { id: '1' } }, { params: { id: '2' } }], // 이런 형식으로 리턴
    paths,
    fallback: false, // 존재하지 않는 경로는 404 페이지 리턴
  };
};

export default article;
