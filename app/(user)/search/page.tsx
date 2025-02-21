interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const term = await(await searchParams).term;
  console.log(term);

  return <div>Search Param: {term}</div>;
};

export default SearchPage;
