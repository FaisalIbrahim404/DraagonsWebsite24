import { useRouter } from 'next/router';
import BlogSidebar from '../../components/Blog/Sidebar/Sidebar';
import Link from 'next/link';
import { ReactNode } from 'react';

// Define the BlogLayout component with TypeScript
const BlogLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();

    const formatTitles = (text: string): string => {
        let formatedText = text
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        formatedText = formatedText
            .replace('Ai ', 'AI ')
            .replace(' Ai ', ' AI ')
            .replace(' Api ', ' API ')
            .replace(' Api ', ' API ');

        return formatedText;
    };

    const currentUrlEnds = () => {
        const titles = router.asPath.split('/').filter(Boolean);
        let currentUrl = '';
        return titles.map((title) => {
            currentUrl += '/' + title;
            return { title: formatTitles(title), url: currentUrl };
        });
    };

    return (
      <div className='grid relative place-items-center'>
        <div className='flex min-h-screen w-full relative pt-24 max-w-[1500px]'>
          <div className='flex relative min-h-screen w-full h-[calc(100vh-5.5rem)]'>
            <BlogSidebar />
            <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#030014_40%,#63e_100%)]'></div>
            <div className='w-full relative   px-2 md:px-10 grid  place-items-center '>
              <div className='w-full  min-h-24 select-none  text-gray-400  box-border flex items-center md:text-2xl mb-10 md:m-0   gap-4 font-semibold'>
              <div className='absolute top-0'>
              {currentUrlEnds().map(({ title, url }, index, arr) => (
                  <span key={index} className='flex items-center'>
                    <Link href={url} passHref>
                      <span
                        className={`cursor-pointer transition-all hover:text-blue-1 ${index + 1 === arr.length ? "text-slate-200" : "text-gray-500"}`}>
                        {title}
                      </span>
                    </Link>
                    {index + 1 !== arr.length && (
                      <span
                        className={`transition-all ${index + 1 === arr.length ? "text-slate-800" : "text-gray-400"}`}>
                        &gt;
                      </span>
                    )}
                  </span>
                ))}
                </div>
              </div>

              <div className='min-h-full h-full  box-border w-full flex justify-center items-center'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BlogLayout;
