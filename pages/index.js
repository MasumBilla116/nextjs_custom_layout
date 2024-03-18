import AdminLayout from "@/components/layout/AdminLayout";
 

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
    </>
  );
}
 
Home.getLayout = function getLayout(page){
  return <AdminLayout>{page}</AdminLayout> 
}