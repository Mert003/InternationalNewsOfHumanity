import React from "react";
import News from "../../components/NewsForTopics/News";
import Triple from "../../components/TripleComponent/Triple";
import EditorPicks from "../../components/EditorPicks/EditorPicks";
import OneCard from "../../components/OneCardComponent/OneCard";
import ThreeColumnsComponents from "../../components/ThreeColumnsComponent/ThreeColumnsComponents";

const Business = () => {


  return (
    <>
   <News topic="business" />
   <Triple category="business" />
   <EditorPicks topic="business" />
   <OneCard topic="retirement" />
    <ThreeColumnsComponents topic="work" />
   </>
  );
};

export default Business;