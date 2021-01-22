import React, { Fragment } from "react";
import style from "src/components/style";

class AboutPage extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="aboutContainer">
          <div className="aboutContent">
            <div className="videoContainer">
              <video controls>
                <source src="/bdivideo.mp4" type="video/mp4" />
              </video>
            </div>
            <article>
              <h3>Le concept</h3>
              <p>
                La Bande Des Idées est un rendez-vous mensuel parisien autour de
                la bande dessinée.
              </p>
              <p>
                Le premier lundi de chaque mois, on se retrouve à 20h30 au Lou
                Pascalou (Paris 20e) pour 2h de débats autour de 4 bandes
                dessinées proposées par 2 chroniqueurs et 2 chroniqueuses
                différent.e.s à chaque fois. A la table des chroniqueur.ses :
                libraires, bibliothécaires, éditeurs, auteurs, journalistes,
                scénaristes, passionnés, vous…tous ceux qui le veulent ! A
                l’animation : l’un.e des membres de l’équipe organisatrice de la
                Bande Des Idées.
              </p>
              <p>
                Chaque chroniqueur.se présente la bande dessinée choisie, puis
                ouvre le débat avec les autres chroniqueur.ses, puis avec le
                public. La Bande Des Idées est un espace d’échange où chacun
                peut s’exprimer. Il est dédié aux curieuses et curieux,
                amatrices et amateurs, passionnées et passionnés de bande
                dessinée.
              </p>
              <p>
                La Bande Des Idées est née en 2014, de la volonté de retrouver à
                Paris une rencontre comme les rendez-vous bordelais organisés à
                l’Oiseau cabosse, le dernier jeudi de chaque mois, par
                l'association ADALI, sous le nom de{" "}
                <a
                  href="https://www.facebook.com/LaNeuviemeCase"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  La neuvième case
                </a>
                .
              </p>
              <p>
                Ce rendez-vous, sous une forme différente, a aussi lieu à
                Marseille et Toulon, sous le nom de « Raging bulles », le
                dernier jeudi de chaque mois.
              </p>
            </article>
            <article>
              <h3>L'équipe</h3>
              <p>
                Baptiste est souple, il n’a pas peur des grands écarts puisqu’il
                s’occupe des rayons BD jeunesse ET érotisme de la librairie
                Millepages (Vincennes). C’est aussi le secrétaire de la Bande
                Des Idées.
              </p>
              <p>
                Diego aime les mots, surtout ceux des comics et des mangas qu’il
                conseille chez Bulles en tête Le Peletier (Paris 9). Il est vice
                président de la Bande Des Idées.
              </p>
              <p>
                Desiré a été libraire ici et là, aujourd’hui on le trouve à Ici,
                la librairie boulevard Poissonnière (Paris 2). C’est le
                secrétaire adjoint de la Bande Des Idées.
              </p>
              <p>
                Marion en connaît un rayon en Humain, c’est pour ça qu’elle gère
                le rayon Sciences humaines de la librairie Delamain (Paris 1er)
                et que c’est la présidente de la Bande Des Idées.
              </p>
              <p>
                Mathilde n’est pas libraire, mais chef de projet dans une agence
                de com’ : elle gère donc les projets com’ de la Bande Des Idées
                et comme elle excelle en Excel, c’est aussi la trésorière.
              </p>
              <p>
                Olivia a été librairie, maintenant elle est développeuse web, ce
                qui en fait la parfaite webmaster de la Bande Des Idées !
              </p>
              <p>
                Quentin aime les histoires, c’est pour ça qu’il est spécialiste
                BD de la librairie du cinéma MK2 quai de Loire (paris 19e). Et
                parce que de contes à comptes il n’y a qu’un pas, il est aussi
                le trésorier adjoint de la Bande Des Idées.
              </p>
              <p>
                Ils et elles contribuent ponctuellement à la Bande Des Idées :{" "}
                Dominique Brugheail (directeur artistique), Aymeric Ingret
                (illustrateur), Marie-Charlotte Pulcini (illustratrice), Toan
                Tran (illustrateur).
              </p>
              <p>
                N'hésitez pas à nous envoyer des mots doux à
                <strong> labandedesidees@gmail.com</strong>.
              </p>
            </article>
          </div>
        </div>

        <style jsx global>{`
          .aboutContainer {
            justify-content: center;
            width: 100%;
          }

          .aboutContent {
            margin: 0rem 17rem 4rem 17rem;
          }

          .videoContainer {
            display: flex;
            justify-content: center;
          }

          video {
            max-width: 70rem;
            width: 100%;
            height: auto;
          }

          article {
            margin-top: 4rem;
          }

          h3 {
            margin-top: 1rem;
            color: ${style.colorBlue};
            font-family: ${style.secondary};
          }

          p {
            margin-bottom: 0.5rem;
            font-family: ${style.basic};
          }

          a {
            color: ${style.colorBlue};
          }
        `}</style>
      </Fragment>
    );
  }
}

export default AboutPage;
