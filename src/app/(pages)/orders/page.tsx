import Header from "@/app/components/Header";
import { Order } from "@/app/types";
import Container from "@/app/components/Container";
import OrderCard from "./OrderCard";


export const getBaseUrl = () => {
  const headers = require("next/headers").headers(); 
  const host = headers.get("host");
  const protocol = headers.get("x-forwarded-proto") || "http";

  if (!host) {
    throw new Error("Host bilgisi alınamadı.");
  }

  return `${protocol}://${host}`;
};

type ResType = {
  message: string;
  orders: Order[];
};

const getOrders = async (): Promise<ResType> => {
  const baseUrl = getBaseUrl(); 
  const res = await fetch(`${baseUrl}/api/orders`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Siparişleri alırken bir hata oluştu.");
  }

  return res.json();
};

const Page = async () => {
  const data = await getOrders();

  return (
    <div>
      <Header />

      <Container>
        <h2 className="mb-10 text-3xl font-bold">Siparişlerin</h2>

        <div className="grid gap-10">
        {data.orders.map((order, key) => (
            <OrderCard order={order} key={key} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Page;
