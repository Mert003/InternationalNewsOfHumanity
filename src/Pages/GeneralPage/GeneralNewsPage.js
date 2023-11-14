import React from "react";
import News from "../../components/NewsForTopics/News";
import Triple from "../../components/TripleComponent/Triple";
import EditorPicks from "../../components/EditorPicks/EditorPicks";
import OneCard from "../../components/OneCardComponent/OneCard";
import ThreeColumnsComponents from "../../components/ThreeColumnsComponent/ThreeColumnsComponents";
const General = () => {
  
  return (
    <>
    <News topic="general" />
    <Triple category="politic" />
    <EditorPicks topic="crisis" />
    <OneCard topic="aircraft" />
    <ThreeColumnsComponents topic="war" />
    </>
  );
};

export default General;