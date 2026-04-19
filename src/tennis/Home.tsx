import { Link } from 'react-router-dom';
import { supabase } from '../common/superbase';

export default function HomeTennis() {

  const ajouterEntrainementTest = async () => {
    
    const { data, error } = await supabase
      .from('entrainements')
      .insert([
        { 
          format: 'simple', 
          isMatch: false, 
          focus: 'Travail du revers lifté et service kické' 
        }
      ]);

    if (error) {
      console.error("Erreur lors de l'ajout :", error);
      alert("Mince, une erreur est survenue ! Regarde la console.");
    } else {
      console.log("Succès :", data);
      alert("Entraînement ajouté avec succès dans Supabase ! 🎉");
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Mon Tracker de Tennis 🎾</h1>
      
      <button 
        onClick={ajouterEntrainementTest}
        style={{ padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer', margin: '2rem 0' }}
      >
        Ajouter un entraînement de test
      </button>

      <br />
      <Link to="/" style={{ color: 'white' }}>Retour à l'accueil</Link>
    </div>
  );
}

/**
 * Pouvoir ajouter des amis
 * Dire avec qui on a fait des entrainements
 * Qu'est ce qu'on a bossé
 * Match ou pas
 * Simple ou doubles
 * 
 * 
 * Quel solution pour stocker ? 
 */