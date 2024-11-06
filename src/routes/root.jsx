import {v4 as uuidv4} from 'uuid';
import ListeDepenses  from './ListeDepenses';
import { useState } from "react";

export default function Root() {
    const Liste_Depenses = [
        {id: uuidv4(), titre :"Chaussure", montant : 100, date: "10-09-1992"},
        {id: uuidv4(), titre :"Courses", montant : 50, date: "10-09-1992"},
        {id: uuidv4(), titre :"Restau", montant : 50, date: "10-09-1992"}
      ];
      
const [depenses, setDepenses] = useState(Liste_Depenses)
    return (
      <>
        <div id="sidebar">
          <h1>Liste des dépenses</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Rechercher.."
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">Nouvelle dépense</button>
            </form>
          </div>
          <nav>
            <ListeDepenses depenses={depenses}/> 
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }
  