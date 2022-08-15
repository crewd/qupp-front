import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  return <div>{router.query.id}</div>;
};

export default Post;
