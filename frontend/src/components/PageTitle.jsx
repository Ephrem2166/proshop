import { Helmet } from "react-helmet-async";

const PageTitle = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

PageTitle.defaultProps = {
  title: "Welcome to ProShop",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electronics",
};

export default PageTitle;
