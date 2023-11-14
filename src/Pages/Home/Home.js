import React from 'react';
import CurrentTopics from '../../components/CurrentTopic/CurrentTopics.js';
import Triple from '../../components/TripleComponent/Triple.js';

import "./Home.css";
import OneCard from '../../components/OneCardComponent/OneCard.js';
import EditorPicks from '../../components/EditorPicks/EditorPicks.js';
import ThreeColumnsComponents from '../../components/ThreeColumnsComponent/ThreeColumnsComponents.js';
export default function Home() {
    return (
      <div>
        
      <CurrentTopics />
      
      <h2 className='TripleHeader'>Conflicts</h2>
      <Triple category="Conflict"/>
      <h2 className='TripleHeader'>Popular News</h2>
      <Triple category="popular" />
      <h2 className='TripleHeader'>Climate Change</h2>
      <Triple category="climate" />

      <EditorPicks topic="money"/>

      <OneCard topic="general" />

      <ThreeColumnsComponents topic="science" />
      
      </div>
    );
  }