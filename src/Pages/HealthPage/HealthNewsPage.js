import React from "react";
import News from "../../components/NewsForTopics/News";
import Triple from "../../components/TripleComponent/Triple";
import EditorPicks from "../../components/EditorPicks/EditorPicks";
import OneCard from "../../components/OneCardComponent/OneCard";
import ThreeColumnsComponents from "../../components/ThreeColumnsComponent/ThreeColumnsComponents";
const health = () => {
  

  return (
    <>
   <News topic="health" />
   <Triple category="health" />
   <EditorPicks topic="vaccines" />
   <OneCard topic="diet" />
    <ThreeColumnsComponents topic="medicine" />
   </>
  );
};

export default health;