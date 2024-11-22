import MainLayout from "@/components/layout/MainLayout";
import { API_URL } from "@/constants/base";

export default async function Home() {
  const categoriesResponse = await fetch(
    `${API_URL}/category?sortBy=name&sortOrder=ASC&limit=&page=`,
    { next: { revalidate: 3600 } }
  );
  const {data} = await categoriesResponse.json()
  return (
    <>
      <MainLayout categories={data?.entities} />
    </>
  );
}
