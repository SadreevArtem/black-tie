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
import { Master } from "../MastersBlock/MastersBlock";

import { Button } from "../Button";
import Link from "next/link";





export const Masters: React.FC = () => {
const token = useAuthStore((state) => state.token);
   const getMastersAll = () => api.getMastersAll(token);
   const {data: masters = [], isLoading} = useQuery<Master[]>({queryKey:['masters'], queryFn: getMastersAll});   

  return (
    <section className="flex flex-col w-full">
      <div className="flex"></div>
      {!isLoading ? (
        <div className="">
          <div className="flex mb-2">
            <Link className="ml-auto" href="/staff-route/control/masters/0">
              <Button className=" w-auto px-6" title="Добавить" />
            </Link>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Имя</TableCell>
                  <TableCell>Возраст</TableCell>
                  <TableCell>Рост</TableCell>
                  <TableCell>Вес</TableCell>
                  <TableCell>Размер</TableCell>
                  <TableCell>Опубликовано</TableCell>
                  <TableCell>Дата создания</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {masters?.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Link href={`/staff-route/control/masters/${row.id}`} className="hover:text-blue-700">
                        {row.name}
                      </Link>
                    </TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.height}</TableCell>
                    <TableCell>{row.weight}</TableCell>
                    <TableCell>{row.size}</TableCell>
                    <TableCell>
                      {row.published ? "На сайте" : "Скрыто"}
                    </TableCell>
                    <TableCell>
                      {new Date(row.createdAt).toLocaleString("ru-RU", {
                        timeZone: "Asia/Yekaterinburg",
                      })}
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