import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "../Button";
import { api } from "@/shared/api/api";
import { Programm } from "@/shared/static/types";
import Link from "next/link";

export const ProgramsList = () => {
  const getPrograms = () => api.getPrograms();

  const { data: programs = [], isLoading } = useQuery<Programm[]>({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });
  return (
    <div className=" md:mt-24 mt-12 grid md:grid-cols-2 md:gap-12 gap-8">
      {programs.map((program, i) => (
        <article key={program.name.concat(i.toString())} className="w-full">
          <div
            className={clsx(
              "relative w-[300px] h-[282px] md:w-[600px] md:h-[420px] overflow-hidden",
              "bg-[#323232] shadow-base rounded-[15px] group grayscale"
            )}
            onClick={() => console.log("click")}
            aria-hidden
          >
            <div className="flex flex-col items-center gap-3 mb-3 md:mb-6">
              <div className="relative w-[300px] h-[282px]  md:w-[600px] md:h-[420px] shrink-0 rounded-[15px]">
                <Image
                  src={program.image || "/images/empty.png"}
                  alt={program.name || "Аватар"}
                  fill
                  className="w-full h-full rounded-[20px] object-cover"
                />
                <div className="absolute p-[30px] py-[20px] top-0 bottom-0 left-0 right-0 text-white md:text-lg flex flex-col items-start justify-between">
                  <div className="flex flex-col gap-[10px]">
                    <div className="md:text-[32px] text-[24px] font-bold">
                      {program.name}
                    </div>
                    <div className="md:text-[24px] text-[16px] font-normal">
                      {program.currentPrice}
                    </div>
                  </div>

                  <Link
                    href={`/programs/${program.id}`}
                    className="self-center w-full"
                  >
                    <Button
                      title="подробнее"
                      className="bg-transparent opacity-50 font-normal !my-0 !rounded-[5px] py-4 w-full border text-[20px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
