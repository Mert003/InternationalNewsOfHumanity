import React from "react";
import News from "../../components/NewsForTopics/News";
import Triple from "../../components/TripleComponent/Triple";
import EditorPicks from "../../components/EditorPicks/EditorPicks";
import OneCard from "../../components/OneCardComponent/OneCard";
import ThreeColumnsComponents from "../../components/ThreeColumnsComponent/ThreeColumnsComponents";
const sport = () => {
  

  return (
    <>
    <News topic="sports" />
    <Triple category="sports" />
    <EditorPicks topic="tournament" />
    <OneCard topic="exercise" />
    <ThreeColumnsComponents topic="gym" />
    </>
  );
};

export default sport;