import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Sahar Babaeyan | Social Media Manager</title>
    </Helmet>
  );
};

export default PageTitle;
