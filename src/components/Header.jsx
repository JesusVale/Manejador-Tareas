import { useParams, Link } from "react-router-dom";
import classNames from "classnames";

export default function Header(){

    let { tipo } = useParams();

    const claseCompletadas = classNames('header__link', {
        'header__link--seleccionado': tipo === 'completadas'
      })
      const claseEliminadas = classNames('header__link', {
        'header__link--seleccionado': tipo === 'eliminadas'
      })
      const claseTodas = classNames('header__link', {
        'header__link--seleccionado': tipo === undefined
      })
      

    return (
        <header className="header">
            <nav className="header__navegacion">
                <Link to="/" className={claseTodas}>Todas</Link>
                <Link to="/completadas" className={claseCompletadas}>Completadas</Link>
                <Link to="/eliminadas" className={claseEliminadas}>Eliminadas</Link>
            </nav>
        </header>
    )
}