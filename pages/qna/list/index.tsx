import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import BgTitle from '../../../components/common/bgTitle';
import PostCard from '../../../components/post/postCard';
import Post from '../post/[id]';

const QnA = () => {
  const router = useRouter();
  const category = router.query.category;

  const menuRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = menuRef.current;

    if (!category) {
      router.push('?category=인문');
    }

    if (element && element.innerHTML === category) {
      element.scrollIntoView();
    }
  }, [category]);

  return (
    <div className="max-w-[1280px] m-auto relative">
      <Head>
        <title>{category} 카테고리 | Qupp</title>
        <meta name="description" content={`Qupp ${category} 카테고리`} />
      </Head>
      <BgTitle>게시판</BgTitle>
      <div className="mt-[60px] flex">
        <nav className="w-[150px] lg:block hidden">
          <h2 className="text-lg font-bold text-primary pb-[10px] border-b-4 border-primary">
            카테고리
          </h2>
          <ul>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=인문">
                <a
                  className={`w-full block ${
                    category === '인문' && 'text-primary font-bold'
                  }`}
                >
                  인문
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=사회">
                <a
                  className={`w-full block ${
                    category === '사회' && 'text-primary font-bold'
                  }`}
                >
                  사회
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=상경">
                <a
                  className={`w-full block ${
                    category === '상경' && 'text-primary font-bold'
                  }`}
                >
                  상경
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=자연과학">
                <a
                  className={`w-full block ${
                    category === '자연과학' && 'text-primary font-bold'
                  }`}
                >
                  자연과학
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=공학">
                <a
                  className={`w-full block ${
                    category === '공학' && 'text-primary font-bold'
                  }`}
                >
                  공학
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=예술">
                <a
                  className={`w-full block ${
                    category === '예술' && 'text-primary font-bold'
                  }`}
                >
                  예술
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:w-[768px] w-full mx-auto">
          <PostCard
            category={`${category ? category : '인문'}`}
            title="이 문제는 어떻게 푸나요?"
            writer="작성자"
            date="2022/08/24"
          />
          <PostCard
            category="자연과학"
            title="이 문제는 어떻게 푸나요?"
            writer="작성자"
            date="2022/08/24"
          />
        </div>
      </div>
    </div>
  );
};

export default QnA;
