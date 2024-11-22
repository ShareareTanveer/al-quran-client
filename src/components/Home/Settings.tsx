"use client";

import { FaLanguage } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Slider } from "../ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SettingsSection = () => {
  return (
    <div className=" w-full py-6">
      <h1 className="text-xl text-center">Settings</h1>

      <div className="space-y-4 py-12 text-slate-500">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-start items-center gap-5 bg-[#F7F8FA] rounded-xl py-2 px-4">
              <div className="bg-[#E8F0F5] py-4 px-4 w-fit rounded-full">
                <FaLanguage className="text-lg" />
              </div>
              <p>Language settings</p>
            </AccordionTrigger>
            <AccordionContent className="border-x border-b rounded-b-md px-4 py-6 flex items-center justify-center gap-2">
              <Button className="px-10 py-6 bg-basicColor text-white hover:bg-green-700">
                English
              </Button>
              <Button className="px-10 py-6 bg-transparent text-black border shadow-none hover:bg-gray-100">
                বাংলা
              </Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex justify-start items-center gap-5 bg-[#F7F8FA] rounded-xl py-2 px-4">
              <div className="bg-[#E8F0F5] py-4 px-4 w-fit rounded-full">
                <FaLanguage className="text-lg" />
              </div>
              <p>General settings</p>
            </AccordionTrigger>
            <AccordionContent className="border-x border-b rounded-b-md px-4 py-6 text-black space-y-2">
              <div className="flex items-center justify-between">
                <p>Show Arabic</p>
                <div>
                  <Switch
                    className=" data-[state=checked]:bg-basicColor"
                    id="airplane-mode"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Show Translation</p>
                <div>
                  <Switch
                    className=" data-[state=checked]:bg-basicColor"
                    id="airplane-mode"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Show Transliteration</p>
                <div>
                  <Switch
                    className=" data-[state=checked]:bg-basicColor"
                    id="airplane-mode"
                  />
                </div>
              </div>{" "}
              <div className="flex items-center justify-between">
                <p>Show Refference</p>
                <div>
                  <Switch
                    className=" data-[state=checked]:bg-basicColor"
                    id="airplane-mode"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="flex justify-start items-center gap-5 bg-[#F7F8FA] rounded-xl py-2 px-4">
              <div className="bg-[#E8F0F5] py-4 px-4 w-fit rounded-full">
                <FaLanguage className="text-lg" />
              </div>
              <p>Font Settings</p>
            </AccordionTrigger>
            <AccordionContent className="border-x border-b rounded-b-md px-4 py-6 text-black space-y-6">
              <div className="space-y-4">
                <p>Translation Font Size</p>
                <Slider
                  className=" [&_[class~='bg-primary']]:bg-green-500"
                  defaultValue={[33]}
                  max={100}
                  step={1}
                />{" "}
              </div>
              <div className="space-y-4">
                <p>Select Arabic Script</p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="flex justify-start items-center gap-5 bg-[#F7F8FA] rounded-xl py-2 px-4">
              <div className="bg-[#E8F0F5] py-4 px-4 w-fit rounded-full">
                <FaLanguage className="text-lg" />
              </div>
              <p>Appearance Settings</p>
            </AccordionTrigger>
            <AccordionContent className="border-x border-b rounded-b-md px-4 py-6 text-black space-y-2">
              <div className="flex items-center justify-between">
                <p>Night Mode</p>
                <div>
                  <Switch
                    className=" data-[state=checked]:bg-basicColor"
                    id="airplane-mode"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SettingsSection;
