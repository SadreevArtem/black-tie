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
import { Order } from "@/shared/static/types";




export const Orders: React.FC = () => {
const token = useAuthStore((state) => state.token);
   const getOrders = () => api.getOrders(token);
   const {data: orders = [], isLoading} = useQuery<Order[]>({queryKey:['order'], queryFn: getOrders});   

  return (
    <section className="flex flex-col w-full">
      <div className="flex"></div>
      {!isLoading ? (
        <div className="">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Имя</TableCell>
                  <TableCell>Телефон</TableCell>
                  <TableCell>Дата заказа</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.phone}</TableCell>
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