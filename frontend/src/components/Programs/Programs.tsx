import { useQuery } from "@tanstack/react-query";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useAuthStore } from "@/store/auth";
import { api } from "@/pages/api/api";

import { Button } from "../Button";
import Link from "next/link";
import { Programm } from "@/shared/static/types";





export const Programs: React.FC = () => {
const token = useAuthStore((state) => state.token);
   const getProgramsAll = () => api.getProgramsAll(token);
   const {data: programs = [], isLoading} = useQuery<Programm[]>({queryKey:['Programs'], queryFn: getProgramsAll});   

  return (
    <section className="flex flex-col w-full">
      <div className="flex"></div>
      {!isLoading ? (
        <div className="">
          <div className="flex mb-2">
            <Link className="ml-auto" href="/staff-route/control/programs/0">
              <Button className=" w-auto px-6" title="Добавить" />
            </Link>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Наименование</TableCell>
                  <TableCell>Прайс</TableCell>
                  <TableCell>Описание</TableCell>
                  <TableCell>Опубликовано</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {programs?.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Link href={`/staff-route/control/Programs/${row.id}`} className="hover:text-blue-700">
                        {row.name}
                      </Link>
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.currentPrice}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>
                      {row.published ? "На сайте" : "Скрыто"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div>Загрузка...</div>
      )}
    </section>
  );
};