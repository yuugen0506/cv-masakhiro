import dynamic from "next/dynamic";
import Seo from "../components/Seo";
// import EdinaPreview from "../components/pages/preview";
import EdinaHorizontal from "../components/pages/home-horizontal";

const index = () => {
  return (
    <>
      {/* <Seo pageTitle="Preview" /> */}
      <Seo pageTitle="Offical Masakhiro CV" />
      <EdinaHorizontal />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
