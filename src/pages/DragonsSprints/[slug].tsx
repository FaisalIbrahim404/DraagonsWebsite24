import React, { useState } from "react";
import { useRouter } from "next/router";
import ButtonComponent from "@/components/Micros/Button";
import { Correct_1, Document_1, Time_1 } from "@/components/Icons";
import CourseHeasder from "@/pages/DragonsSprints/Components/Header/CourseHeader";
import OverViewComponent from "@/pages/DragonsSprints/Components/OverView";
import TopicsComponent from "./Components/Topics";
import CoverImage from "@/../public/45f.png";

interface Coupon {
  name: string;
  discount: number;
}

export default function minisprint_explore_view() {
  const router = useRouter();
  const minisprint_name = "The Developer's Quest with Real-World Scenarios";
  const [coupon, setCoupon] = useState<Coupon | null>({
    name: "DISCOUNT20",
    discount: 20,
  });
  const [couponInput, setCouponInput] = useState("");
  const description =
    "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem";
  const benefits = [
    "test test test test",
    "test 1 test 1 test 1 test 1",
    "test 2 test 2 test 2 test 2",
    "test 3 test 3 test 3",
    "test 4 test 4 test 4 test 4 test 4 test 4",
  ];
  const content = {
    duration: "70 hours / 2 weeks",
    assignments: "",
    articles: "8",
    resources: "5",
  };
  const Instructors = ["General"];
  const Category = ["General"];
  const Level = ["Beginner"];
  const Language = ["Arabic", "English"];
  const HasCertificate = true;

  const requirements = [
    "test test test test",
    "test 1 test 1 test 1 test 1",
    "test 2 test 2 test 2 test 2",
    "test 3 test 3 test 3",
    "test 4 test 4 test 4 test 4 test 4 test 4",
  ];

  const add_coupon = (couponData: Coupon | null) => {
    setCoupon(couponData);
  };
  const price = 1250;

  const Topics = [
    {
      title: "Introduction",
      image: CoverImage.src,
    },
    {
      title: "Introduction",
      image: CoverImage.src,
    },
    {
      title: "Introduction",
      image: CoverImage.src,
    },
    {
      title: "Introduction",
      image: CoverImage.src,
    },
  ];

  return (
    <div className='grid place-items-center '>
      <div className='h-full flex-col max-w-[1400px] w-full flex justify-center'>
        <CourseHeasder
          title={minisprint_name}
          description={description}
          duration={content.duration}
          Instructors={Instructors}
          Category={Category}
          Level={Level}
          Language={Language}
          HasCertificate={HasCertificate}
        />
       <div className="w-full flex justify-center">
       <div className='flex md:flex-row flex-col max-w-[1200px]'>
          <div className='w-full md:w-2/3'>
            {" "}
            <div className='flex-shrink flex flex-col gap-4 '>
              <OverViewComponent description={description} title={"OverView"} />
              <TopicsComponent Topics={Topics} title={"Topics"} />
            </div>
          </div>
          <div className='w-1/3 h-full flex-shrink '>
            <div className='w-full p-1 bg-purple-800/20 rounded-3xl'>
              <div className='w-full relative bg-purple-800 min-h-[200px] rounded-3xl cursor-pointer'>
                <div className='text-base px-3 md:px-6 absolute  grid place-items-center   lg:text-3xl font-medium text-gray-200 h-full w-full '>
                  <span className='w-full'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}
