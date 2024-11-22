"use client";
import CategorySection from "@/components/Home/CategorySection";
import CardSection from "@/components/Home/CardSection";
import CategorySectionMobile from "@/components/Home/CategorySectionMobile";
import BottomBar from "@/components/Navbar/BottomBar";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/SideBar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { ICategory } from "@/lib/interfaces/category.interface";
import { API_URL } from "@/constants/base";

export default function MainLayout({ categories }: {categories: ICategory[]}) {
  const [duas, setDuas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const duaRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const fetchDuas = async () => {
      const duaResponse = await fetch(
        `${API_URL}/dua?category=${selectedCategory}`
      );
      const duasData = await duaResponse.json();
      setDuas(duasData?.data?.response || []);
    };
    fetchDuas();
  }, [selectedCategory]);

  const handleDuaClick = (duaId: string) => {
    const ref = duaRefs.current[duaId];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex max-h-screen min-h-screen bg-[#EBEEF2] overflow-hidden">
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col ml-1 overflow-hidden">
        <div className="flex-shrink-0">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <div className="bg-white rounded-xl py-4 px-6 mb-4 mr-4 font-medium flex items-center gap-4">
            <Sheet>
              <SheetTrigger>
                <FaBars className="text-gray-700 text-lg" />
              </SheetTrigger>
              <SheetContent side="left" className="w-full m-0 p-0">
                <CategorySectionMobile 
                 handleDuaClick={handleDuaClick}
                 setSelectedCategory={setSelectedCategory}
                 categories={categories}
                 SheetTrigger={SheetTrigger}
                />
              </SheetContent>
            </Sheet>
            <p className="">Time of dua</p>
          </div>
        </div>
        <div className="flex gap-6 overflow-hidden">
          <div className="hidden lg:block lg:w-[35%] rounded-l-3xl mb-2 rounded-t-xl overflow-hidden">
            <CategorySection
              handleDuaClick={handleDuaClick}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          </div>
          <div className="flex-2 max-h-screen w-full overflow-y-auto mb-2">
            <CardSection duas={duas} duaRefs={duaRefs} />
          </div>
        </div>
        <div className="flex-shrink-0">
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
