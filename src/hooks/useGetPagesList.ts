export const useGetPagesList = () => {
  const mockedPagesData = [
    {
      title: "Breeds page",
      url: "/breeds",
      key: "df123d3",
    },
    {
      title: "SSR page",
      url: "/server-page",
      key: "bxbvx35y6",
    },
  ];
  return {
    pages: mockedPagesData,
  };
};
