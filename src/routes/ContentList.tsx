import { useGetCompanyQuery } from "../features/api/apiSlice";
import ICompany from "../interfaces/ICompany";
import Table from "../components/Table";

export default function ContentList() {
  const { data, isLoading, isSuccess, isError, error } = useGetCompanyQuery(
    process.env.REACT_APP_TOKEN
  );

  const companyList = data as ICompany[];

  let content;

  if (isLoading) {
    content = <h1>Загрузка...</h1>;
  }

  if (isSuccess) {
    content = <Table data={companyList} />;
  }

  if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <div className='container mx-auto my-20'>{content}</div>;
}
