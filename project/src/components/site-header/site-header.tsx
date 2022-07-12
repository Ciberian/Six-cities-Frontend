import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

type SiteHeaderProps = {
	isActive: boolean;
  count: number;
};

function SiteHeader({isActive, count}: SiteHeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className={`header__logo-link ${isActive ? 'header__logo-link--active' : ''}`} href="\#">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">{count}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="\#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
