"use client";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
} from "../ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import {
  FaInfo,
  FaLightbulb,
  FaShare,
  FaCopy,
  FaBookmark,
} from "react-icons/fa";
import SettingsSection from "../Home/Settings";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-1 py-4">
      <h1 className="text-2xl w-full md:w-1/6 text-gray-800 text-left">
        Duas Page
      </h1>
      <div className="hidden md:flex md:w-3/6">
        <div className="relative w-1/2 ml-auto rounded-md bg-white">
          <Input
            type="text"
            id="search"
            placeholder="Search Categories"
            className="w-full rounded-md px-4 py-6 pl-4 pr-4 focus:outline-none focus-visible:ring-basicColor border-none shadow-none placeholder:text-gray-400"
          />
          <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 bg-[#F3F4F6] py-3 px-4 rounded-md">
            <FaSearch className="" />
          </span>
        </div>
      </div>
      <div className="md:flex items-center justify-between gap-4 ">
        <div className="hidden md:block">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                >
                  <rect width="45" height="45" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_2022_17407"
                        transform="scale(0.0222222)"
                      />
                    </pattern>
                    <image
                      id="image0_2022_17407"
                      width="45"
                      height="45"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfaSURBVHgBvZn7cxPXFce/d1eSLb+Q3RA8BIqwa7BbSExCiZPaQXlAQlNATR/T/tCG/gXlh0yn03bG5of80namnfaXzrQzTmbaaZLJw07IAIlt5PCIJwkT25AY8bKIDbGxsAUC23rs3py70iqrlWTtypA7ts7O7tHZz37vPffePWJYZnt0h79VktTtDKyVcbTSKQ8HvBkHjggkDAvLGQuoKgZPvt8zjGU0hhKa7xm/V1XVfRzstwKyoCMnfMZyLRCiOwcSjB0YOtwTwt2EFrAK591Quc8EYR3YbBlesgtvCdrn83tUl7qflO1cEtQusMGSOfDBe2934U5Ap4YCP6qN09xuviPABhtKSOzxYqpLS11sf8bvUxT+aRaw9qh3BVhE8Drpfh1P/si/FJdc6ELHDv8+xtW3KFj5N6Dw13EYyiFJv1jb2BKauHh2JN+t8hJ0POn3Q9KAYQfYs6IGj7Z9H2vvW41aTy0UJYHJq1MYHj2DseB56+B6WFV5/HjfwUBRaG2GoC6iKx6rSbd39y74n30ajQ3rCVSBLMugKZEEkzJ2Jnwdg8c/xKuv92J6ZgYWY0cSsrTFPMZzvvXYzr3jVpPuW3W16PzDC9j83WYNtBCw0U5Pz6Dzxb/g7PkLKCSCeU6X42xLINAT0V3kbOA9XTT5+K0m3b/+8WdsaGwoCswoBhcxqVVXV+EJXzs++mQYs3NzuXFzh41HlfniFxeDg7pLZvYQwyJrHk7fpBDwrqefwrq1aywDC6sfV1ZU4E+/26/5oJjS4rtgXW3ElwNNK12nnWntuT27tJsWGxI6sLDGY++6tbh/U0tRYN3SVNidBS1UpqV5nxWFhU+l242NTd8pqrBu9WZUXdi2rQ9ZAk4JyH262o6MyjYWjuqa6hzgZDKpuSUSCe0cNz288BH/TqczA15X57EGnLYOVX2evA9o0LSl9HEbC4dKwMGRU4jN38SGppWAugiJJSHzOGTqO4n8lPgCwSczOijiHHNhkUs4d+EWFLkak6EJe/sTsP0CWhb7Yeqs39tZ6bgSB658DrcURXPTCpTJBMtjcMjkwwleuCkL9BGn8aeIvqRpSqGbxqlrY5ig6W5o4AROj53DzHzSxqrJy9c0NvZKYgNvd2lOJBWtexub7jOMYckwhlNDQz8y26bm1drRjcWkLaWFleDYLjHOfHaAhZWdDrjdLtTdU2OYJVLg0AFFshUAr6lxY+vDDbgpoG0Aa71Mb0iStlzbABZ2V3sL9v60AxWV5RmF092XctFCqPmV5iIpGbZua6ShVW9bafojaFV7r7MMLOxzOzbj3vpalJeXZRTOgGVcpbzAWlLSQ8rUO8/v2WxP6VQcT7bSVjKYVFpTv8IwJNILhwksR+m0wqoYXmJRIvB7aitsAaebV7IDLCxXOS5fncteOJgZOFtp1aSwmrYzs7ftAmtNsgOs23/+73gaB3kUTlntodLnZZPCopei8zG8+O+TtoE1aNIuZDeDT302iT/+7V1D0uW6poZPfoWFfeGvfZgKR20Di/oJKc0idpUW9uPTE7h6JVzQJTUV5ioszgeDU7g4MVcCsJY7wxJnVP2xCSxsXFHRPzBS0EVKg8oGqy9CA8fO2QfWcoeJLUdEovlg2LbS6TY0Oong2QmTC9cUzgcsHmR0+DJGL83aVjijNOMBSdTWSgEW7fKNRfQfPoUbkdtFFRbnwzNRDBwdw5fRmD1ggw9FGpS0YqAoEloFN7RbMQWjkxG8+cogInO3s5LuypXZLODpqRt4u+cULoTnMZ9QbQ0Jg29I8GpbU6pm/p1qHF1FFc4TfOzaPGrKZhH9zyG0bFqHe1fVkfJRnBm5hE0PfBtVVWW4Hr6Fz89M4jwBB8MLJSmcEowFNAzxQbU6r+Li47YTwxC8eaUbG1ZWattS8xuKEHZs+hYuzi6WFFu3iThbPxToCWlv46HQ2ci6hmYfXfCWqkKY9sVylQfPPrEBZU6VNlMurKqvQsPG1Th9LYGR8XDpCmsWL50c6H1ZuDh0XznBfqM41fESxlnGyu4aNHf8CkhGocRm4XDXg8vlGAh20/VLWE7sRCJ+QHfJ7D2oGBLiTOoqlHTF1KiqqsJjP2iDw+kCnLShYg4CdlMSynikbRvqV62yPK2ZY9Nf11DgcCjzXMbvaXVoJ1VJGbywCPzgA5ux+4c7NWDx0ipmi3hsEfPR63C5V8BdUQm95iHKYkf6Ajgx9JGl2GkbOvZe73qjW85jp5PyU6DwltVBb+F+qt+1P7IND7ben7eEEI/F4Corg74TNCbml1PX8NobvegfPIabN5fcf0Qo+baI5FsSWrT2p/w+JvGjZhU2fa8FD2/dgp//ZC9cpOpSNY+YgHa5cmYSoxW+R/oGcfDQEZwZC+aCK8qPj/Uf7DHzFcwIUZ+mhb5bHLdtewi//uXP0LKxyXIZTNQ/BHQhYLMNXZ7AK6T+oSN9qZVPYftO9Pe8DLutY6ff/9//vz5HgTkVY7jREnhBS/A8Ho9ljgtZc0xhe945NNexY/d2LKdRLKpXK+NWQHWrQcdiSwLr3zWKQOfFfby4U42CdloB14EUgrGjMDUR34M73RYWFoTq3fkUzgdmRWE6d1TExd1uogvpv1t0p1lhi2N4Lq2sFyU0hmU2urGom2wn62Oiaq+qrcIaZocQzSwRAh+mGUf8Jj5I55f12/hXhTEM2U0ZtRQAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
                <svg
                  className="ml-2 mr-2"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                    fill="#868686"
                  ></path>
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mx-4 py-6 px-4 w-64 rounded-2xl">
              <DropdownMenuItem>
                <Link
                  href="/settings/support"
                  className="px-2  text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-4"
                >
                  <span>
                    {" "}
                    <FaInfo className="text-basicColor" />
                  </span>
                  Support Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/settings/download"
                  className="px-2  text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-4"
                >
                  <span>
                    {" "}
                    <FaLightbulb className="text-basicColor" />
                  </span>
                  Download Dua App
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/settings/privacy"
                  className="px-2  text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-4"
                >
                  <span>
                    {" "}
                    <FaShare className="text-basicColor" />
                  </span>
                  Privacy Policy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/settings/credit"
                  className="px-2  text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-4"
                >
                  <span>
                    {" "}
                    <FaCopy className="text-basicColor" />
                  </span>
                  Thanks & Credits
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/settings/about"
                  className="px-2  text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-4"
                >
                  <span>
                    {" "}
                    <FaBookmark className="text-basicColor" />
                  </span>
                  About Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/settings/copyright"
                  className="px-2  text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-4"
                >
                  <span>
                    {" "}
                    <FaShare className="text-basicColor" />
                  </span>
                  Copyright Warning
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/settings/projects"
                  className="px-2  text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-4"
                >
                  <span>
                    {" "}
                    <FaCopy className="text-basicColor" />
                  </span>
                  Our Other Projects
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Sheet>
          <SheetTrigger>
            <FontAwesomeIcon
              icon={faGear}
              className=" text-basicColor text-lg pr-10 "
            />
          </SheetTrigger>
          <SheetContent className="w-full">
            <SettingsSection
            />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
