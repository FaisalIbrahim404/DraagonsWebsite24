import { useRouter } from "next/router";
import BlogSidebar from "./components/Sidebar/Sidebar";
import OverView from "./components/OverView/OverView";
import Link from "next/link";
import { ReactNode } from "react";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const formatTitles = (text: string): string => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace("Ai ", "AI ")
      .replace(" Ai ", " AI ")
      .replace(" Api ", " API ")
      .replace(" Api ", " API ");
  };

  // Function to create breadcrumb navigation
  const currentUrlEnds = () => {
    const titles = router.asPath.split("/").filter(Boolean);
    let currentUrl = "";
    return titles.map((title) => {
      currentUrl += "/" + title;
      return {
        title: formatTitles(decodeURIComponent(title)),
        url: currentUrl,
      };
    });
  };

  return (
    <div
      dir="rtl"
      lang="ar"
      className="grid font-sans px-[5%] mb-20 relative z-20 place-items-center"
    >
      <div className="w-full relative grid pt-20 max-w-[1600px]">
        <div className="w-full flex relative">
          {/* Sidebar - fixed */}
          <div className="max-w-[20rem] w-full max-md:hidden sticky top-24 h-screen overflow-y-auto no-scrollbar">
            <BlogSidebar />
          </div>

          {/* Main Content Area */}
          <div className="w-full max-w-[950px] relative px-2 md:px-10 flex flex-col">
            {/* Breadcrumb navigation */}
            <div className="w-full min-h-12 select-none text-gray-400 box-border flex items-center md:text-2xl mb-10 md:m-0 gap-4 font-semibold">
              <div className="flex items-center gap-2">
                {currentUrlEnds().map(({ title, url }, index, arr) => (
                  <span key={index} className="flex items-center">
                    <Link href={url}>
                      <span
                        className={`cursor-pointer hover:text-purple-500 ${index + 1 === arr.length ? "text-slate-200" : "text-gray-500"}`}
                      >
                        {title}
                      </span>
                    </Link>
                    {index + 1 !== arr.length && (
                      <span className={`mx-2 text-gray-400`}>&gt;</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Dynamic children content */}
            <div className="min-h-full w-full mt-8 box-border flex justify-center">
              {children}
            </div>
          </div>

          {/* Overview section - fixed */}
          <div className="max-w-[20rem] w-full max-lg:hidden h-screen sticky top-24 no-scrollbar">
            <OverView
              Instructor="Dragons Team"
              // tags={["React", "JavaScript", "CSS"]}
              Description="فهم المسارات الفنية المهنية مع سيناريوهات من الواقع الفعلي وتعلم مكثف لمدة 7 أيام من الممارسة والإرشاد."
              LessonNum={5}
              Topics={[
                "مقدمة",
                "لماذا هذا كثير؟!",
                "معركة المناصب",
                "خريطة الطريق الذهبية",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
